const ticketService = require("../../services/ticketService");
const auth = require("../../plugins/auth");

module.exports = {
    method: "DELETE",
    path: "/api/ticket/{id}",

    options: {
        pre: [auth]
    },

    handler: async (req, h) => {

        const db = req.server.app.db;
        const { id } = req.params;

        await ticketService.deleteTicket(db, id);

        return h.response({
            message: "Ticket deleted successfully"
        }).code(200);
    }
};