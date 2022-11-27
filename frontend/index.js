const axios = require("axios");

axios
  .get("http://localhost:4000/games")
  .then((response) => {
    console.log(response.data);
  })
  .catch((erro) => {
    console.log(erro);
  });
