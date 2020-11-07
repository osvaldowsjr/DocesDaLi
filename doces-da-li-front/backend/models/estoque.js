const mongoose = require("mongoose");

const estoque = mongoose.Schema({
  nome: { type: String, required: true },
  preco: { type: Number, required: true },
  quantidade: { type: Number, required: true },
  marca: { type: String, required: true },
});

estoque.set("toJSON", {
  virtuals: true,
  versionKey: false,
  transform: function (doc, ret) {
    delete ret._id;
    delete ret.hash;
  },
});

module.exports = mongoose.model("Estoque", estoque);
