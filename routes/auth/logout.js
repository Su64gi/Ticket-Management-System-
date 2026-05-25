module.exports = {
    method: "POST",
    path: "/api/logout",

    handler: async (req, h) => {

        return h.response({
            message: "Logout successful"
        }).code(200);
    }
};