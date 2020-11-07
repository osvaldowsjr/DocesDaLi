const mongoose = require("mongoose");

const estoqueDoce = mongoose.Schema({
  nome: { type: String, required: true },
  preco: { type: Number, required: true },
  descricao: { type: String, required: true },
  urlImagem: { type: String, required: true },
});

estoqueDoce.set("toJSON", {
  virtuals: true,
  versionKey: false,
  transform: function (doc, ret) {
    delete ret._id;
    delete ret.hash;
  },
});

module.exports = mongoose.model("EstoqueDoce", estoqueDoce);
