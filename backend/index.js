const express = require("express");
const app = express();
const cors = require("cors");

//settings cors
app.use(cors());

//settings parser
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//settings routes
app.use("/", require("./routes"));

app.listen(4000, (erro) => {
  if (erro) {
    console.log("erro ao execultar");
  } else {
    console.log("servidor está online");
  }
});
