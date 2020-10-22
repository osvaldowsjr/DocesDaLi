const mongoose = require("mongoose");

const listaPedidos = mongoose.Schema({
  id_cliente: { type: String, required: true },
  pedido: [
    {
      description: { type: String, required: true },
      id: { type: Number, required: true },
      imageurl: { type: String, required: true },
      name: { type: String, required: true },
      price: { type: Number, required: true },
      quantidade: { type: Number, required: true },
    },
  ],
  endereco: {
    complement: { type: String, required: true },
    number: { type: Number, required: true },
    street: { type: String, required: true },
    zipCode: { type: Number, required: true },
  },
  data: { type: String, required: true },
});

listaPedidos.set("toJSON", {
  virtuals: true,
  versionKey: false,
  transform: function (doc, ret) {
    delete ret._id;
    delete ret.hash;
  },
});

module.exports = mongoose.model("Pedidos", listaPedidos);
