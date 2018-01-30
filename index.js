const express = require("express");
const app = express();
const path = require("path");
const port = process.env.PORT;


// app.get("/", (req, res) => {
//     res.send({ hello: "world" });
// });

app.use(express.static('asset'))

app.get("/", (req, res) => {
   res.sendFile(path.join(__dirname, "index.html"));
});

app.listen(port, function() {
  console.log('App is running on port: ' + port);
});
