const Hapi = require("@hapi/hapi");
const manifest = require("./manifest");

require("dotenv").config();

const init = async () => {

    const server = Hapi.server(manifest.server);

    // DB plugin
    await server.register(manifest.register.plugins);

    server.route([
        require("../routes/auth/register"),
        require("../routes/auth/login"),
        require("../routes/auth/logout"),
        require("../routes/ticket/create"),
        require("../routes/ticket/fetch"),
        require("../routes/ticket/update"),
        require("../routes/ticket/update-status"),
        require("../routes/ticket/delete"),
        require("../routes/ticket/download-csv"),
        require("../routes/ticket/upload-csv")
    ]);

    await server.start();
    console.log("Server running on:", server.info.uri);
};

init();