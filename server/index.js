const express = require("express");
const massive = require("massive");
const controller = require("./controller");
require("dotenv").config();

const app = express();
app.use(express.json());

massive(process.env.CONNECTION_STRING)
  .then(db => {
    app.set("db", db);
  })
  .catch(error => console.log(error));
const { CONNECTION_STRING, SERVER_PORT } = process.env;

app.use(express.json());

app.post("/api/properties", controller.createHouse);
app.get("/api/properties", controller.getHouse);
app.delete("/api/properties/:id", controller.deleteHouse);
app.put("./api/properties/:id", controller.updateHouse);

app.listen(SERVER_PORT, () => {
  console.log(`Server listening on ${SERVER_PORT}`);
});
