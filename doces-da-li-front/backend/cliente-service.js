const config = require("./config.json");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const db = require("./app");
const User = db.User;

module.exports = {
  authenticate,
  getAll,
  getById,
  create,
  delete: _delete,
};

async function authenticate({ email, password }) {
  const user = await User.findOne({ email });
  if (user && bcrypt.compareSync(password, user.hash)) {
    const token = jwt.sign({ sub: user.id }, config.secret, {
      expiresIn: "7d",
    });
    return {
      ...user.toJSON(),
      token,
    };
  }
}

async function getAll() {
  return await User.find();
}

async function getById(id) {
  return await User.findById(id);
}

async function create(userParam) {
  if (await User.findOne({ email: userParam.email })) {
    throw 'Email "' + userParam.email + '" já está em uso';
  }

  const user = new User(userParam);

  if (userParam.password) {
    user.hash = bcrypt.hashSync(userParam.password, 10);
  }

  await user.save();
}

async function _delete(id) {
  await User.findByIdAndRemove(id);
}
