const { Router } = require("express");
const MarkerController = require("../controllers/markerController");

const router = Router();

router
  .get("/markers", MarkerController.ListAllMarkers)
  .post("/markers", MarkerController.CreateMarker)
  .put("/markers/:markerId", MarkerController.UpdateMarker)
  .delete("/markers/:markerId", MarkerController.DeleteOneMarker);

module.exports = router;
