const { Parser } = require("json2csv");
const auth = require("../../plugins/auth");

module.exports = {
    method: "GET",
    path: "/api/ticket/download",

    options: {
        pre: [auth]
    },

    handler: async (req, h) => {

        try {

            const db = req.server.app.db;

            const [rows] = await db.query(
                "SELECT * FROM tickets"
            );

            const parser = new Parser();

            const csv = parser.parse(rows);

            return h.response(csv)
                .type("text/csv")
                .header(
                    "Content-Disposition",
                    "attachment; filename=tickets.csv"
                );

        } catch (err) {

            return h.response({
                error: err.message
            }).code(500);
        }
    }
};