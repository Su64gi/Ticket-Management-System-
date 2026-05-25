const ticketService = require("../../services/ticketService");
const auth = require("../../plugins/auth");

module.exports = {
    method: "POST",
    path: "/api/ticket",

    options: {
        pre: [auth]
    },

    handler: async (req, h) => {

        const db = req.server.app.db;

        const { title, description } = req.payload;

        const user_id = req.user.id;

        await ticketService.createTicket(db, title, description, user_id);

        return h.response({
            message: "Ticket created",
            user_id
        }).code(201);
    }
};