const config = require("../config.json");
const db = require("../app");
const Pedido = db.Pedidos;

module.exports = {
  getAll,
  getById,
  create,
  delete: _delete,
};

async function getAll() {
  return await Pedido.find();
}

async function getById(id) {
  return await Pedido.findById(id);
}

async function create(pedidoParam) {
  const pedido = new Pedido(pedidoParam);

  await pedido.save();
}

async function _delete(id) {
  await Pedido.findByIdAndRemove(id);
}
