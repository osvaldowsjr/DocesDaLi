const config = require("../config.json");
const db = require("../app");
const Estoque = db.Estoque;

module.exports = {
  getAll,
  add,
  update,
  delete: _delete,
};

async function getAll() {
  return await Estoque.find();
}

async function add(estoqueParam) {
  const estoque = new Estoque(estoqueParam);

  await estoque.save();
}

async function update(id, estoqueParam) {
  const estoque = await Estoque.findById(id);

  Object.assign(estoque, estoqueParam);

  await estoque.save();
}

async function _delete(id) {
  await Estoque.findByIdAndRemove(id);
}
