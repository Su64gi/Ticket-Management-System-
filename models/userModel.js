const User = {

    create: (db, name, email, password) => {
        return db.execute(
            "INSERT INTO users (name, email, password) VALUES (?, ?, ?)",
            [name, email, password]
        );
    },

    findByEmail: (db, email) => {
        return db.execute(
            "SELECT * FROM users WHERE email = ?",
            [email]
        );
    }
};

module.exports = User;