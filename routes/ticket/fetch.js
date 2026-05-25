const ticketService = require("../../services/ticketService");
const auth = require("../../plugins/auth");

module.exports = {
    method: "GET",
    path: "/api/ticket",

    options: {
        pre: [auth]
    },

    handler: async (req, h) => {

        const db = req.server.app.db;

        const { status } = req.query;

        let rows;

        if (status) {
            [rows] = await ticketService.getTicketsByStatus(db, status);
        } else {
            [rows] = await ticketService.getTickets(db);
        }

        return rows;
    }
};