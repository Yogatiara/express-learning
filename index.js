const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
const db = require('./connection')
const response = require('./response/response')


app.use(bodyParser.json());

// app.get('/', (req, res) => {
//   // console.log({ urlParam: req.query.alamat })
//   const sql = "SELECT * FROM mahasiswa";
//   db.query(sql, (error, result) => {
//     // console.log(result);
//     response(200, result, "get all data from mahasiswa", res)
//   });


// })

// app.get('/find', (req, res) => {
//   const sql = `SELECT * FROM mahasiswa WHERE nim = ${req.query.nim}`
//   db.query(sql, (error, result) => {
//     response(200, result, "find mahasiswa name", res)

//   })

// })

// validation, insert, menghapus
// app.post('/login', (req, res) => {
//   console.log({ requestFromOutside: req.body });

//   res.send("login berhasil");

// })

// merubah(mengupdate)
// app.put('/username', (req, res) => {
//   console.log({ updateData: req.body });
//   res.send("update berhasil");
// })

app.get("/", (req, res) => {
  response(200, "Data mahasiswa", "Ini pesan", res)

})

app.get("/mahasiswa", (req, res) => {
  // res.send("List mahasiswa muncul");
  response(200, "mahasiswa get list", res)
})

app.get("/mahasiswa/:id_mahasiswa", (req, res) => {
  const id = req.params.id_mahasiswa;
  response(200, `spesifik mahasiswa by ${id}`, res);
})

app.post("/mahasiswa", (req, res) => {
  // res.send("Ini posting");
  response(200, "Ini posting", res);
})
app.put("/mahasiswa", (req, res) => {
  // res.send("Ini put atau update data")
  response(200, "Ini put atau update data", res)
})
app.delete("/mahasiswa", (req, res) => {
  response(200, "Ini delete data", res)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})