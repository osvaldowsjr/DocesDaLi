const express = require("express");
const router = express.Router();
const estoqueService = require("../service/estoque-service");

router.post("/add", add);
router.get("/", getAll);
router.put("/:id", update);
router.delete("/:id", _delete);

module.exports = router;

function add(req, res, next) {
  estoqueService
    .add(req.body)
    .then(() => res.json({}))
    .catch((err) => next(err));
}

function getAll(req, res, next) {
  estoqueService
    .getAll()
    .then((users) => res.json(users))
    .catch((err) => next(err));
}

function update(req, res, next) {
  estoqueService
    .update(req.params.id, req.body)
    .then(() => res.json({}))
    .catch((err) => next(err));
}

function _delete(req, res, next) {
  estoqueService
    .delete(req.params.id)
    .then(() => res.json({}))
    .catch((err) => next(err));
}
