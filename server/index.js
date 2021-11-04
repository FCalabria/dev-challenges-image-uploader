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
  const file = req.files.file
  return fb.upload(file.data, file.name, {
    contentType: file.mimetype
  })
    .then(snapshot => {
      const name = snapshot.metadata.fullPath
      console.log('MC  |  app.post  |  snapshot', snapshot)
      res.status(200);
      let fileUrl
      fb.get(name).then(url => {
        fileUrl = url
      })
      .finally(() => {
        res.json({url: fileUrl})
      })
    })
    .catch(error => {
      console.log('SERVER  |  app.post  |  error', error)
      let code, message
      try {
        // TODO: more verbose error message
        const serverError = JSON.parse(error.customData.serverResponse).error
        code = serverError.code
        message = serverError.message
      } catch (error) {
        code = 500
      }
      res.status(code)
      res.send()
    })
})
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});