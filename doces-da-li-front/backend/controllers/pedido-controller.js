const express = require("express");
const router = express.Router();
const pedidoService = require("../service/pedido-service");

router.post("/register", register);
router.get("/", getAll);
router.get("/:id", getById);
router.delete("/:id", _delete);

module.exports = router;

function register(req, res, next) {
  pedidoService
    .create(req.body)
    .then(() => res.json({}))
    .catch((err) => next(err));
}

function getAll(req, res, next) {
  pedidoService
    .getAll()
    .then((users) => res.json(users))
    .catch((err) => next(err));
}

function getById(req, res, next) {
  pedidoService
    .getById(req.params.id)
    .then((user) => (user ? res.json(user) : res.sendStatus(404)))
    .catch((err) => next(err));
}

function _delete(req, res, next) {
  pedidoService
    .delete(req.params.id)
    .then(() => res.json({}))
    .catch((err) => next(err));
}
