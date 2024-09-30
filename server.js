const express = require("express");
const { logger } = require("./middleware");
const {
  getAllCars,
  getCar,
  deleteCar,
  updateCar,
  createCar,
} = require("./controllers");

// express'ı kurulum ve portunu belirle
const app = express();
const port = 3000;

// middleware (ara yazılım)
// logger middleware istekleri consola yazdırır.
app.use(logger);
// isteklerin body/header/param bölümlerini işleyen mw
app.use(express.json());

// route/endpoint'leri tanımlanır.
// endpointleri tanımlarken ikinci yöntem aynı url ise gruplanabilir.
app.route("/api/v1/cars").get(getAllCars).post(createCar);
app.route("/api/v1/cars/:id").get(getCar).patch(updateCar).delete(deleteCar);

// dinlenecek portu belirle
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
