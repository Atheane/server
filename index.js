const app = express();
const express = require("express");
const path = require("path");
const PORT = process.env.PORT;


app.get("/", (req, res) => {
    res.send({ hello: "world" });
});

app.use(express.static('asset'))

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});


app.listen(PORT);
