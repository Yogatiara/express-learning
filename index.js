const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
const db = require('./connection')
const response = require('./response')


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
  response(200, "API ready", "Succes", res)

})

app.get("/mahasiswa", (req, res) => {
  // res.send("List mahasiswa muncul");

  const sql = "SELECT* FROM mahasiswa";
  db.query(sql, (err, field) => {
    if (err) {
      throw err
    }
    response(200, field, "Mahasiswa list", res)

  })

})


app.get("/mahasiswa/:id_mahasiswa", (req, res, next) => {
  const id = req.params.id_mahasiswa;
  const sql = `SELECT * FROM mahasiswa WHERE id_mahasiswa = ${id}`

  db.query(sql, (err, field) => {
    if (err) throw err;
    response(200, field, `get detail mahasiswa`, res)
  })
  //   setTimeout(() => {
  //     try {
  //       const id = req.params.id_mahasiswa;

  //       const sql = `SELECT * FROM mahasiswa WHERE id_mahasiswa = ${id}`
  //       const sql1 = "SELECT id_mahasiswa FROM mahasiswa ORDER BY id_mahasiswa ASC"

  //       db.query(sql1, (err, field) => {
  //         const a = JSON.stringify(field)
  //         const b = JSON.parse(a);
  //         console.log(b.length)
  //         for (let i = 1; i <= b.length; i++) {
  //           console.log(i);
  //           if (id != i) {
  //             throw new Error("test")
  //           }
  //         }
  //         response(200, field, "Data mahasiswa berhasil ditampilkan", res);
  //         // console.log([0].field.id_mahasiswa)

  //         // for (let i = 0; i < field.lenght; i++) {
  //         //   console.log(field[i])
  //         // }

  //       })

  //     } catch (err) {
  //       next(err)

  //     }
  //   }, 100)
  //   // db.query(sql, (err, field) => {
  //   //   try {
  //   //     if (!id) {
  //   //       throw new Error("data mahasiswa tidak ada")
  //   //     }
  //   //     response(200, field, "Data mahasiswa berhasil ditampilkan", res);

  //   //   } catch (err) {
  //   //     response(200, field, `Error: ${err.message}`, res);
  //   //   }

  //   // })
})

app.post("/mahasiswa", (req, res) => {
  // res.send("Ini posting");

  const { nama, nim, alamat, kelas } = req.body;
  // console.log(req.body);
  const sql = `INSERT INTO mahasiswa (nama,nim, alamat, kelas) VALUES("${nama}",${nim},"${alamat}","${kelas}")`

  db.query(sql, (err, fields) => {
    if (err) response(500, "invalid", "Data failed added", res);


    if (fields?.affectedRows) {
      const data = {
        isSucces: fields.affectedRows,
        id: fields.insertId
      }
      response(200, data, "Data added seccesfull", res);

    }
  })
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