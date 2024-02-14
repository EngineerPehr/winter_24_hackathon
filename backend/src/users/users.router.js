const router = require("express").Router({ mergeParams: true });
const controller = require("./reservations.controller");
const methodNotAllowed = require("../errors/methodNotAllowed");

/* GET users listing. */

router.route("/users").get(controller.list).all(methodNotAllowed);

module.exports = router;
