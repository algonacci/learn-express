const express = require("express");

const friendsController = require("../controllers/friends.controller");

const friendsRouter = express.Router();

friendsRouter.use((req, res, next) => {
  next();
});
friendsRouter.get("/", friendsController.getFriends);
friendsRouter.get("/:id", friendsController.getFriendById);
friendsRouter.post("/", friendsController.postFriend);

module.exports = friendsRouter;
