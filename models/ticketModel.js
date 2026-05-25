const Ticket = {

    create: (db, title, description, user_id) => {
        return db.execute(
            "INSERT INTO tickets(title, description, user_id, status) VALUES (?,?,?,?)",
            [title, description, user_id, "Open"]
        );
    },

    update: (db, id, title, description) => {
        return db.execute(
            "UPDATE tickets SET title=?, description=? WHERE id=?",
            [title, description, id]
        );
    },

    delete: (db, id) => {
        return db.execute("DELETE FROM tickets WHERE id=?", [id]);
    },

    updateStatus: (db, id, status) => {
        return db.execute(
            "UPDATE tickets SET status=? WHERE id=?",
            [status, id]
        );
    },

    getAll: (db) => db.query("SELECT * FROM tickets"),

    getByStatus: (db, status) =>
        db.query("SELECT * FROM tickets WHERE status=?", [status])
};

module.exports = Ticket;