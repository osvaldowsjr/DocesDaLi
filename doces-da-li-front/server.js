console.log("Hello, NodeJS");

require("rootpath")();
const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const jwt = require("backend/jwt");
const errorHandler = require("backend/error-handler");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.use(jwt());

app.use(errorHandler);

app.use("/clientes", require("./backend/controllers/cliente-controller"));
app.use("/pedidos", require("./backend/controllers/pedido-controller"));

const port =
  process.env.NODE_ENV === "production" ? process.env.PORT || 80 : 4000;
const server = app.listen(port, function () {
  console.log("Server listening on port " + port);
});
