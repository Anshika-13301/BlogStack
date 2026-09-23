const jwt = require("jsonwebtoken");

const auth = (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
      return res.status(401).json({
        success: false,
        message: "No token provided"
      });
    }

    const token = authHeader.startsWith("Bearer ")
      ? authHeader.split(" ")[1]
      : authHeader;

    const verifyUser = jwt.verify(
      token,
      process.env.JWT_SECRET
    );

    req.user = verifyUser;

    next();

  } catch (error) {
    return res.status(403).json({
      success: false,
      message: "Token is invalid or expired"
    });
  }
};

module.exports = auth;