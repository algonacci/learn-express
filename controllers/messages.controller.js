const path = require("path");

function getMessages(req, res) {
  // res.sendFile(
  //   path.join(
  //     __dirname,
  //     "..",
  //     "public",
  //     "images",
  //     "Garuda_Wisnu_Kencana_00000001.jpg"
  //   )
  // );
  res.render("messages", { title: "Messages", friend: "Elon Musk" });
}

function postMessage(req, res) {
  console.log("Updating messages...");
}

module.exports = {
  getMessages,
  postMessage,
};
