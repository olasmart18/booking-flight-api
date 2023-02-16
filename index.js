const express = require("express");
const { json } = require("express");
const connect = require("./config/database")
const routes = require("./routes/flightRoute");

const app = express();
app.use(json());

app.use("/flight", routes);

const port = process.env.PORT || 3000;
app.listen(port, () => {
connect();
  console.log(`Server is running on port ${port}`);
});
