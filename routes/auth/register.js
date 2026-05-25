const authService = require("../../services/authService");

module.exports = {
    method: "POST",
    path: "/api/register",
    handler: async (req, h) => {

        try {
            console.log("PAYLOAD:", req.payload);

            if (!req.payload) {
                return h.response({
                    error: "No data received. Check Postman JSON body + headers."
                }).code(400);
            }
            const db = req.server.app.db;
            const { name, email, password } = req.payload;

            await authService.register(db,name, email, password);

            return h.response({
                message: "User registered successfully"
            }).code(201);

        } catch (err) {
            console.log("ERROR OCCURRED:", err);

            return h.response({
                error: err.message
            }).code(500);
        }
    }
};