function loadGames() {
  axios
    .get("http://localhost:4000/games")
    .then((response) => {
      let content = document.getElementById("content");
      response.data.forEach((data) => {
        let newData = document.createElement("tr");
        newData.innerHTML = `
        <td class="border">${data.nome}</td>
        <td class="border bg-secondary text-white">${data.preco}</td>
        <td class="border text-center" style="width: 90px">
          <button class="rounded-3 bg-dark text-white border-2">
            <i class="bi bi-trash3-fill"></i>
          </button>
          <button class="rounded-3 bg-dark text-white border-2">
            <i class="bi bi-pencil-fill"></i>
          </button>
        </td>
       `;

        content.prepend(newData);
      });
    })
    .catch((erro) => {
      console.log("erro");
    });
}

loadGames();

//criando games

function criarGame() {
  let nome = document.getElementById("nome").value;
  let preco = document.getElementById("preco").value;

  let user = {
    nome: nome,
    preco: preco,
  };

  axios
    .post("http://localhost:4000/games", user)
    .then((response) => {
      if ((response.status = 200)) {
        alert("game cadastrado com sucesso");
        window.location.reload();
      }
    })
    .catch((erro) => {
      alert("erro ao cadastrar novo game");
    });
}

//deletando games
