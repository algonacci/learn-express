const express = require("express");

const app = express();

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`🚀Server is running on port ${PORT}`);
});

app.get("/", (req, res) => {
  res.send({
    id: 1,
    name: "John Doe",
  });
});

app.get("/messages", (req, res) => {
  res.send("<ul><li>Hello Einstein</li></ul>");
});

app.post("/messages", (req, res) => {
  console.log("Updating messages...");
});
