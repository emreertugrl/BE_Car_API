const fs = require("fs");
const crypto = require("crypto");

// araba verilerini al
const cars = JSON.parse(
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

  res.status(201).json({
    message: "Yeni Araç oluşturuldu.",
  });
};

// bir aracı al
exports.getCar = (req, res) => {
  res.status(200).json({
    message: "Araç alındı.",
  });
};

// bir aracı güncelle
exports.updateCar = (req, res) => {
  res.status(201).json({
    message: "Araç Güncellendi.",
  });
};

// bir aracı sil
exports.deleteCar = (req, res) => {
  res.status(203).json({
    message: "Araç Silindi.",
  });
};
