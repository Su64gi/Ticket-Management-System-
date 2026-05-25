const ticketService = require("../../services/ticketService");
const auth = require("../../plugins/auth");

module.exports = {
    method: "PATCH",
    path: "/api/ticket/status/{id}",

    options: {
        pre: [auth]
    },

    handler: async (req, h) => {

        const db = req.server.app.db;
        const { id } = req.params;
        const { status } = req.payload;

        await ticketService.updateStatus(db, id, status);

        return h.response({
            message: "Ticket status updated successfully"
        }).code(200);
    }
};