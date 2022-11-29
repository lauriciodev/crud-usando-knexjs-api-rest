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

//create route

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

//delete route
router.delete("/games/:id", (req, res) => {
  let id = req.params.id;
  databaseConnection
    .where({ id: id })
    .delete()
    .table("games")
    .then((data) => {
      res.status(200);
      res.json({ status: " game deletado" });
    })
    .catch((erro) => {
      res.status(404);
      res.json({ erro: "parametro inválido" });
    });
});

//update route
router.put("/games/:id", (req, res) => {
  let id = Number(req.params.id);
  let { nome, preco } = req.body;

  if (id != undefined || !isNaN(id)) {
    databaseConnection
      .where({ id: id })
      .update({ nome: nome, preco: preco })
      .table("games")
      .then((data) => {
        res.json({ resultado: "game atualizado" });
        res.status(200);
      })
      .catch((erro) => {
        console.log(erro);
      });
  } else {
    res.json({ erro: "erro ao execultar" });
  }
});

module.exports = router;
