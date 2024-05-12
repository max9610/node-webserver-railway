const http = require("http");

http
  .createServer((req, res) => {
    // res.writeHead(200, { "Content-Type": "application/json" });
    // res.setHeader("Content-Disposition", "attachment; filename=lista.csv");
    // res.writeHead(200, { "Content-Type": "application/csv" });
    // const persona = {
    //   id: 1,
    //   nombre: "Fernando",
    // };
    // res.write(JSON.stringify(persona));
    // res.end();
    // Escribir la cabecera del CSV
    // res.write("id,nombre\n");

    // Escribir los datos
    // res.write("1,Erika\n");
    // res.write("2,Max\n");
    // res.write("3,Kevin\n");
    // res.write("4,Israel\n");

    res.write("Hola Mundo");
    // Finalizar la respuesta
    res.end();
  })
  .listen(8080, () => {
    console.log("Escuchando en el puerto", 8080);
  });
