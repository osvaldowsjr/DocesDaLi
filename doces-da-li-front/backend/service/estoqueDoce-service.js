const config = require("../config.json");
const db = require("../app");
const EstoqueDoce = db.EstoqueDoce;

module.exports = {
  getAll,
  add,
  update,
  delete: _delete,
};

async function getAll() {
  return await EstoqueDoce.find();
}

async function add(estoqueDoceParam) {
  const estoqueDoce = new EstoqueDoce(estoqueDoceParam);

  await estoqueDoce.save();
}

async function update(id, estoqueDoceParam) {
  const estoqueDoce = await EstoqueDoce.findById(id);

  Object.assign(estoqueDoce, estoqueDoceParam);

  await estoqueDoce.save();
}

async function _delete(id) {
  await EstoqueDoce.findByIdAndRemove(id);
}
