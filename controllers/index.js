const fs = require("fs");
const crypto = require("crypto");
const write = require("../utils/write");

// araba verilerini al
let cars = JSON.parse(
  fs.readFileSync(`${__dirname}/../data/cars.json`, "utf-8")
);
// bütün araçları alır
exports.getAllCars = (req, res) => {
  res.status(200).json({
    message: "Araçlar alındı.",
    results: cars.length,
    cars,
  });
};
// yeni araç ekle
exports.createCar = (req, res) => {
  // yeni aracı oluştur ve id'sini üreterek ekle
  const newCar = { ...req.body, id: crypto.randomUUID() };
  // yeni aracı diziye ekle
  cars.push(newCar);
  // json dosyasını güncelle
  write(cars);

  res.status(201).json({
    message: "Yeni Araç oluşturuldu.",
    car: newCar,
  });
};

// bir aracı al
exports.getCar = (req, res) => {
  res.status(200).json({
    message: "Araç alındı.",
    car: req.car,
  });
};

// bir aracı sil
exports.deleteCar = (req, res) => {
  //id'si gelen aracı diziden kaldır.
  cars = cars.filter((car) => car.id !== req.params.id);

  // json dosyasını güncelle
  write(cars);

  res.status(204).json({
    message: "Araç Silindi.",
  });
};

// bir aracı güncelle
exports.updateCar = (req, res) => {
  res.status(201).json({
    message: "Araç Güncellendi.",
  });
};
