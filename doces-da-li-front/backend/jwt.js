const expressJwt = require("express-jwt");
const config = require("./config.json");
const clienteService = require("./service/cliente-service");
const estoqueService = require("./service/estoque-service");

module.exports = jwt;

function jwt() {
  const secret = config.secret;
  return expressJwt({ secret, algorithms: ["HS256"], isRevoked }).unless({
    path: [
      // public routes that don't require authentication
      "/clientes/authenticate",
      "/clientes/register",
      "/pedidos/register",
      "/pedidos",
      "/estoque",
      "/estoque/add",
      /^\/estoque\/.*/,
      "/estoqueDoce",
      "/estoqueDoce/add",
      /^\/estoqueDoce\/.*/,
    ],
  });
}

async function isRevoked(req, payload, done) {
  const user = await clienteService.getById(payload.sub);

  // revoke token if user no longer exists
  if (!user) {
    return done(null, true);
  }

  done();
}
