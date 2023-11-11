const express = require("express");
const cors = require("cors");

// required for .env variables as well as npm i dotenv
require('dotenv').config();
const PORT = process.env.PORT || 3030;

const routes = require("../routes");

const startServer = () => {
    const app = express();
    app.use(express.urlencoded({ extended: false }));
    app.use(express.json());
    app.use(cors());
    app.use(routes);
    app.listen(PORT, () => console.log("Server is listening on port " + PORT));
};

module.exports = startServer;



