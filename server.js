const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());

let ledState = "OFF";

app.get("/api/control", (req, res) => {
  res.send({ led: ledState });
});

app.post("/api/control", (req, res) => {
  const { state } = req.body;
  if (state === "ON" || state === "OFF") {
    ledState = state;
    console.log(`LED state set to: ${state}`);
    res.send({ success: true });
  } else {
    res.status(400).send({ success: false, message: "Invalid state" });
  }
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
