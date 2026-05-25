const authService = require("../../services/authService");

module.exports = {
    method: "POST",
    path: "/api/login",

    handler: async (req, h) => {

        const db = req.server.app.db;

        const { email, password } = req.payload;

        const token = await authService.login(db, email, password);

        return { message: "Login successful", token };
    }
};