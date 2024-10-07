const express = require("express");

const router = express.Router();

// endpointleri tanımlarken ikinci yöntem aynı url ise gruplanabilir.
router.route("/api/v1/cars").get(getAllCars).post(createCar);
router
  .route("/api/v1/cars/:id")
  .get(idControl, getCar)
  .patch(idControl, updateCar)
  .delete(idControl, deleteCar);

module.exports = router;
