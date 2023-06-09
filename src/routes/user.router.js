const { getAll, create, getOne, remove, update } = require('../controllers/user.controller');
const express = require('express');

const userRouter = express.Router();

userRouter.route("/")
		.get(getAll)
		.post(create)

userRouter.route("/:id")
		.get(getOne)
		.put(update)
		.delete(remove)

module.exports = userRouter;