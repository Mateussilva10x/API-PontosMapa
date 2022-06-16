const bodyParser = require("body-parser");
const markers = require("./markersRoutes");

module.exports = (app) => {
  app.use(bodyParser.json(), markers);
};
