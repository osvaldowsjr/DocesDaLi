const mongoose = require("mongoose");

const clienteSchema = mongoose.Schema({
  nome: { type: String, required: true },
  hash: { type: String, required: true },
  email: { type: String, required: true },
});

clienteSchema.set("toJSON", {
  virtuals: true,
  versionKey: false,
  transform: function (doc, ret) {
    delete ret._id;
    delete ret.hash;
  },
});

module.exports = mongoose.model("Cliente", clienteSchema);
