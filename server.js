const express = require("express");
const { logger } = require("./middleware");
const idControl = require("./middleware/idControl");
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
const carRoutes = require("./routes/carRoutes");
// middleware (ara yazılım)
// logger middleware istekleri consola yazdırır.
app.use(logger);
// isteklerin body/header/param bölümlerini işleyen mw
app.use(express.json());

// route/endpoint'leri tanımlanır.

app.use(carRoutes);
// dinlenecek portu belirle
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
