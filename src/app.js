require("rootpath")();
const express = require("express");
const route = require("./routes");
const app = express();
const cors = require("cors");
const errorHandler = require("./middleware/error-handler");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

route(app);
app.use(errorHandler);

const port =
  process.env.NODE_ENV === "production" ? process.env.PORT || 80 : 3000;
app.listen(port, () =>
  console.log("Server listening on port http://localhost:" + port)
);
