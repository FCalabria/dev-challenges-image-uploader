require('dotenv').config()
const express = require("express");
const cors = require("cors");
const fileUpload = require('express-fileupload');
const Firebase = require("./firebase")

const PORT = process.env.PORT || 3001;

const app = express();
const fb = new Firebase();
app.use(fileUpload())
app.use(cors())

app.get("/ping", (req, res) => {
  res.json({ message: "Pong!" });
});

app.post("/image", (req, res) => {
  // TODO: limit size
  return fb.upload(req.files.file.data, req.files.file.name)
    .then(() => {
      res.status(200);
      res.send()
    })
    .catch(error => {
      console.log(error)
      res.status(error.error.code)
      res.send()
    })
})
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});