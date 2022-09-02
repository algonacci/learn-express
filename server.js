const express = require("express");

const app = express();

const PORT = process.env.PORT || 3000;

const friends = [
  {
    id: 0,
    name: "John Doe",
  },
  {
    id: 1,
    name: "Albert Einstein",
  },
];

app.listen(PORT, () => {
  console.log(`🚀Server is running on port ${PORT}`);
});

app.use((req, res, next) => {
  const start = Date.now();
  next();
  const delta = Date.now() - start;
  console.log(`${req.method} ${req.url} - ${delta}ms`);
});

app.get("/friends", (req, res) => {
  res.json(friends);
});

app.get("/friends/:id", (req, res) => {
  const id = Number(req.params.id);
  const friend = friends[id];
  if (friend) {
    res.status(200).json(friend);
  } else {
    res.status(404).json({ message: "Friend not found" });
  }
});

app.get("/messages", (req, res) => {
  res.send("<ul><li>Hello Einstein</li></ul>");
});

app.post("/messages", (req, res) => {
  console.log("Updating messages...");
});
