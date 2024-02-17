const asyncErrorBoundary = require("../errors/asyncErrorBoundary");
const service = require("./users.service");

async function list(req, res) {
  const data = await service.list();
  res.json({ data });
}

module.exports = {
  list: asyncErrorBoundary(list),
};