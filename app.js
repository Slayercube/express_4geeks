const express = require("express");
const app = express();
const port = 4200;

// index routes
const indexRoutes = require("./routes/index.routes");
app.use("/", indexRoutes);

// user routes
const usersRoutes = require("./routes/users.routes");
app.use("/users", usersRoutes);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
