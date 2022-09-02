const express = require("express");

const friendsController = require("./controllers/friends.controller");
const messagesController = require("./controllers/messages.controller");

const app = express();

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`🚀Server is running on port ${PORT}`);
});

app.use((req, res, next) => {
  const start = Date.now();
  next();
  const delta = Date.now() - start;
  console.log(`${req.method} ${req.url} - ${delta}ms`);
});

app.use(express.json());

app.get("/friends", friendsController.getFriends);
app.get("/friends/:id", friendsController.getFriendById);
app.post("/friends", friendsController.postFriend);

app.get("/messages", messagesController.getMessages);
app.post("/messages", messagesController.postMessage);
