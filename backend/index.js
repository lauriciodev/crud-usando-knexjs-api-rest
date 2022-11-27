const express = require("express");
const app = express();

//settings parser
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//settings routes
app.use("/", require("./routes"));

app.listen(3000, (erro) => {
  if (erro) {
    console.log("erro ao execultar");
  } else {
    console.log("servidor está online");
  }
});
