axios
  .get("http://localhost:4000/games")
  .then((response) => {
    let responser = document.getElementById("responser");
    response.data.forEach((data) => {
      let res = document.createElement("h1");
      res.innerHTML = `
      <p>${data.nome}</p>
      `;
      responser.appendChild(res);
    });
  })
  .catch((erro) => {
    console.log(erro);
  });
