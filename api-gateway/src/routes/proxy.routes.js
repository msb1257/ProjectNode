const { createProxyMiddleware } = require("http-proxy-middleware");
const auth = require("../middleware/auth.middleware");
const { publicLimiter, authLimiter, userLimiter } = require("../middleware/rateLimit.middleware");

module.exports = (app) => {
  // Auth (strict limit)
  app.use(
    "/api/auth",
    authLimiter,
    createProxyMiddleware({
      target: process.env.AUTH_SERVICE,
      changeOrigin: true
    })
  );

  // Users
  app.use(
    "/api/users",
    auth(["USER", "ADMIN"]),
    userLimiter,
    createProxyMiddleware({
      target: process.env.USER_SERVICE,
      changeOrigin: true
    })
  );

  // Restaurants (public browsing)
  app.use(
    "/api/restaurants",
    publicLimiter,
    createProxyMiddleware({
      target: process.env.RESTAURANT_SERVICE,
      changeOrigin: true
    })
  );

  // Cart
  app.use(
    "/api/cart",
    auth(["USER"]),
    userLimiter,
    createProxyMiddleware({
      target: process.env.CART_SERVICE,
      changeOrigin: true
    })
  );

  // Orders
  app.use(
    "/api/orders",
    auth(["USER", "ADMIN", "RESTAURANT"]),
    userLimiter,
    createProxyMiddleware({
      target: process.env.ORDER_SERVICE,
      changeOrigin: true
    })
  );

  // Payments (very strict)
  app.use(
    "/api/payments",
    auth(["USER"]),
    rateLimit({
      windowMs: 1 * 60 * 1000,
      max: 10,
      keyGenerator: (req) => req.user.id,
      message: "Payment rate limit exceeded"
    }),
    createProxyMiddleware({
      target: process.env.PAYMENT_SERVICE,
      changeOrigin: true
    })
  );
};