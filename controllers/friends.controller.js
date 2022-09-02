const model = require("../models/friends.model");

function postFriend(req, res) {
  if (!req.body.name) {
    return res.status(400).json({ error: "Friend name is required" });
  }

  const newFriend = {
    name: req.body.name,
    id: model.length,
  };

  model.push(newFriend);
  res.status(201).json(newFriend);
}

function getFriends(req, res) {
  res.json(model);
}

function getFriendById(req, res) {
  const id = Number(req.params.id);
  const friend = model[id];
  if (friend) {
    res.status(200).json(friend);
  } else {
    res.status(404).json({ error: "Friend not found" });
  }
}

module.exports = {
  postFriend,
  getFriends,
  getFriendById,
};
