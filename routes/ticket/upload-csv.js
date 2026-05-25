const fs = require("fs");
const csv = require("csv-parser");
const auth = require("../../plugins/auth");

module.exports = {
    method: "POST",

    path: "/api/ticket/upload",

    options: {

        pre: [auth],

        payload: {
            output: "file",
            parse: true,
            multipart: true,
            maxBytes: 10485760
        }
    },

    handler: async (req, h) => {

        try {

            const db = req.server.app.db;

            const file = req.payload.file;

            const results = [];

            return new Promise((resolve, reject) => {

                fs.createReadStream(file.path)

                    .pipe(csv())

                    .on("data", (data) => {
                        results.push(data);
                    })

                    .on("end", async () => {

                        for (const row of results) {

                            await db.execute(
                                `INSERT INTO tickets
                                (title, description, status, user_id)
                                VALUES (?, ?, ?, ?)`,
                                [
                                    row.title,
                                    row.description,
                                    row.status,
                                    row.user_id
                                ]
                            );
                        }

                        resolve(
                            h.response({
                                message: "CSV uploaded successfully",
                                data: results
                            }).code(200)
                        );
                    })

                    .on("error", (err) => {
                        reject(err);
                    });
            });

        } catch (err) {

            return h.response({
                error: err.message
            }).code(500);
        }
    }
};