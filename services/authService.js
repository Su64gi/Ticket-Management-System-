const User = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const authService = {

    register: async (db, name, email, password) => {

        const hashedPassword = await bcrypt.hash(password, 10);

        await User.create(db, name, email, hashedPassword);
    },

    login: async (db, email, password) => {

        const [rows] = await User.findByEmail(db, email);

        if (rows.length === 0) {
            throw new Error("User not found");
        }

        const user = rows[0];

        const validPassword = await bcrypt.compare(password, user.password);

        if (!validPassword) {
            throw new Error("Invalid password");
        }

        // JWT TOKEN
        const token = jwt.sign(
            {
                id: user.id,
                email: user.email
            },
            "secretkey",
            {
                expiresIn: "1d"
            }
        );

        return token;
    }
};

module.exports = authService;