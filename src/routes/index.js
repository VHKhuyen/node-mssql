const siteRouter = require("./site");
const productsRouter = require("./products");
const storeRouter = require("./stores");

function route(app) {
  app.use("/stores", storeRouter);
  app.use("/products", productsRouter);
  app.use("/", siteRouter);
}

module.exports = route;
