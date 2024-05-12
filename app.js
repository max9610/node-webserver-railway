const express = require("express");
const app = express();
const hbs = require("hbs");
require("dotenv").config();

const port = process.env.PORT;

//handlebars

app.set("view engine", "hbs");
hbs.registerPartials(__dirname + "/views/partials");

//servir contenido estatico
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("home", {
    nombre: "Kevin Villeda",
    titulo: "Curso de Node",
  });
});
app.get("/generic", (req, res) => {
  res.render("generic", {
    nombre: "Kevin Villeda",
    titulo: "Curso de Node",
  });
});
app.get("/elements", (req, res) => {
  res.render("elements", {
    nombre: "Kevin Villeda",
    titulo: "Curso de Node",
  });
});

app.get("/generic", (req, res) => {
  res.sendFile(__dirname + "/public/generic.html");
});

app.get("/elements", (req, res) => {
  res.sendFile(__dirname + "/public/elements.html");
});

app.get("*", (req, res) => {
  res.sendFile(__dirname + "/public/404.html");
});

app.listen(port, () => {
  console.log(`Ejemplo corriendo en el puerto ${port}`);
});
