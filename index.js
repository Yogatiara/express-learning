const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.json());

app.get('/', (req, res) => {
  console.log({ urlParam: req.query.alamat })
  res.send('Hello World udin!')
})

app.get('/yoga', (req, res) => {
  res.send("Hello yoga")
})


// valiation
app.post('/login', (req, res) => {
  console.log({ requestFromOutside: req.body });

  res.send("login berhasil");

})

// merubah
app.put('/username', (req, res) => {
  console.log({ updateData: req.body });
  res.send("update berhasil");
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})