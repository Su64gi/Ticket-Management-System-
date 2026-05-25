const ticketService = require("../../services/ticketService");
const auth = require("../../plugins/auth");

module.exports = {
    method: "PUT",
    path: "/api/ticket/{id}",

    options: {
        pre: [auth]
    },

    handler: async (req, h) => {

        const db = req.server.app.db;
        const { id } = req.params;
        const { title, description } = req.payload;

        await ticketService.updateTicket(db, id, title, description);

        return h.response({
            message: "Ticket updated successfully"
        }).code(200);
    }
};