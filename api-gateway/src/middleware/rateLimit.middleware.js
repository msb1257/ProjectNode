const rateLimit = require("express-rate-limit");

exports.publicLimiter = rateLimit({
  windowMs: 1 * 60 * 1000,
  max: 100,
  message: "Too many requests, slow down"
});

exports.authLimiter = rateLimit({
  windowMs: 1 * 60 * 1000,
  max: 20,
  message: "Too many auth attempts, try later"
});

exports.userLimiter = rateLimit({
  windowMs: 1 * 60 * 1000,
  max: 60,
  keyGenerator: (req) => req.user.id,
  message: "Rate limit exceeded"
});