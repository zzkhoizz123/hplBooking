const PORT = process.env.PORT || 5000;

// configura JWT
const TOKEN_SECRET = process.env.TOKEN_SECRET || "secret";

module.exports = {PORT, TOKEN_SECRET};
