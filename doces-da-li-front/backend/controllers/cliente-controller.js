const express = require("express");
const router = express.Router();
const clienteService = require("../service/cliente-service");

router.post("/authenticate", authenticate);
router.post("/register", register);
router.get("/", getAll);
router.get("/current", getCurrent);
router.get("/:id", getById);
router.delete("/:id", _delete);

module.exports = router;

function authenticate(req, res, next) {
  clienteService
    .authenticate(req.body)
    .then((user) =>
      user
        ? res.json(user)
        : res.status(400).json({ message: "Email ou senha está incorreto" })
    )
    .catch((err) => next(err));
}

function register(req, res, next) {
  clienteService
    .create(req.body)
    .then(() => res.json({}))
    .catch((err) => next(err));
}

function getAll(req, res, next) {
  clienteService
    .getAll()
    .then((users) => res.json(users))
    .catch((err) => next(err));
}

function getCurrent(req, res, next) {
  clienteService
    .getById(req.user.sub)
    .then((user) => (user ? res.json(user) : res.sendStatus(404)))
    .catch((err) => next(err));
}

function getById(req, res, next) {
  clienteService
    .getById(req.params.id)
    .then((user) => (user ? res.json(user) : res.sendStatus(404)))
    .catch((err) => next(err));
}

function _delete(req, res, next) {
  clienteService
    .delete(req.params.id)
    .then(() => res.json({}))
    .catch((err) => next(err));
}
