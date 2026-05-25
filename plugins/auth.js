const jwt = require("jsonwebtoken");

const auth = async (req, h) => {

    try {

        const authHeader = req.headers.authorization;

        if (!authHeader) {
            return h.response({
                error: "Authorization token required"
            }).code(401).takeover();
        }

        // Bearer tokenvalue
        const token = authHeader.split(" ")[1];

        if (!token) {
            return h.response({
                error: "Invalid token format"
            }).code(401).takeover();
        }

        const decoded = jwt.verify(token, "secretkey");

        req.user = decoded;

        return h.continue;

    } catch (err) {

        return h.response({
            error: "Invalid or Expired Token"
        }).code(401).takeover();
    }
};

module.exports = auth;