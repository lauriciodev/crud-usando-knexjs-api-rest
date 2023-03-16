function openModal() {
  document.getElementById("modal__edit").classList.toggle("open");
}

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
          <button class="border-0  text-danger ">
            <i class="bi bi-trash3-fill h5" data-id="delete" id=${data.id}></i>
          </button>
          <button class=" border-0 text-primary ">
            <i class="bi bi-pencil-fill h5" data-id="edit" id=${data.id}></i>
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

//lauricio

document.getElementById("content").addEventListener("click", (event) => {
  let element = event.target;
  let id = element.id;
  let action = element.dataset.id;

  //deletando games
  if (action == "delete") {
    if (confirm("deseja realmente deletar este jogo?")) {
      axios
        .delete("http://localhost:4000/games/" + id)
        .then((response) => {
          alert("jogo deletado com sucesso");
          window.location.reload();
        })
        .catch((erro) => {
          alert("erro ao deletar");
        });
    }
  } else {
    openModal();
  }
});
