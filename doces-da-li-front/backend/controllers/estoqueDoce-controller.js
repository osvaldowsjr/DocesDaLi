const express = require("express");
const router = express.Router();
const estoqueDoceService = require("../service/estoqueDoce-service");

router.post("/add", add);
router.get("/", getAll);
router.put("/:id", update);
router.delete("/:id", _delete);

module.exports = router;

function add(req, res, next) {
  estoqueDoceService
    .add(req.body)
    .then(() => res.json({}))
    .catch((err) => next(err));
}

function getAll(req, res, next) {
  estoqueDoceService
    .getAll()
    .then((users) => res.json(users))
    .catch((err) => next(err));
}

function update(req, res, next) {
  estoqueDoceService
    .update(req.params.id, req.body)
    .then(() => res.json({}))
    .catch((err) => next(err));
}

function _delete(req, res, next) {
  estoqueDoceService
    .delete(req.params.id)
    .then(() => res.json({}))
    .catch((err) => next(err));
}
