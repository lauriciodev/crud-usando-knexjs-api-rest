axios
  .get("http://localhost:4000/games")
  .then((response) => {
    let responser = document.getElementById("responser");
    response.data.forEach((data) => {
      console.log(data);
    });
  })
  .catch((erro) => {
    console.log(erro);
  });
