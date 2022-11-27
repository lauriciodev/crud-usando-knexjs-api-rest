const express = require("express");
const router = express.Router();

//settings databases
const databaseConnection = require("./databases/connection");

router.get("/games", (req, res) => {
  databaseConnection
    .select()
    .table("games")
    .then((data) => {
      res.json(data);
    })
    .catch((erro) => {
      console.log(erro);
    });
});

router.post("/games", (req, res) => {
  let { id, nome, preco } = req.body;

  if (id != undefined || nome != undefined || preco != undefined) {
    databaseConnection
      .insert({ id: id, nome: nome, preco: preco })
      .into("games")
      .then((data) => {
        res.status(200);
        res.json(data);
      })
      .catch((erro) => {
        res.status(400);
        res.json({ erro: "erro ao execultar" });
      });
  } else {
    res.status(400);
    res.json({ erro: "dados inválidos" });
  }
});

module.exports = router;
