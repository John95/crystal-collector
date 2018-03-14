const express = require("express");
const router = express.Router();
const path = require("path");

// Port settings
const PORT = process.env.PORT || 8080;

// App setup
const app = express();

app.use(express.static("assets"));

app.get("/", function(req, res) {
	res.sendFile(path.join(__dirname, "index.html"));
});

const server = app.listen(PORT, function() {
  console.log("App now listening at localhost:" + PORT);
});