module.exports = (cars) =>
  fs.writeFile(
    `${__dirname}/../data/cars.json`,
    JSON.stringify(cars),
    (err) => {
      if (err) {
        console.log("Dosya güncellerken bir hata oluştu");
      }
      return;
    }
  );
