const axios = require("axios");
const redis = require("../utils/redisClient");

const gateway = axios.create({
  baseURL: process.env.GATEWAY_URL
});

const TTL = parseInt(process.env.CACHE_TTL_SECONDS || "60");

exports.getHomeData = async (token) => {
  const cacheKey = `home:${token || "public"}`;

  const cached = await redis.get(cacheKey);
  if (cached) {
    return JSON.parse(cached);
  }

  const headers = token ? { Authorization: token } : {};

  const [restaurants, cart, orders] = await Promise.all([
    gateway.get("/api/restaurants", { headers }),
    gateway.get("/api/cart", { headers }),
    gateway.get("/api/orders", { headers })
  ]);

  const response = {
    restaurants: restaurants.data,
    cart: cart.data,
    activeOrders: orders.data
  };

  await redis.setEx(cacheKey, TTL, JSON.stringify(response));
  return response;
};