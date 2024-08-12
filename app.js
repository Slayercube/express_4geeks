const express = require("express");
const app = express();
const port = 4200;

process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = 0;

// index routes
const indexRoutes = require("./routes/index.routes");
app.use("/", indexRoutes);

// user routes
const usersRoutes = require("./routes/users.routes");
app.use("/users", usersRoutes);

// console.log(process.env.DB_URI);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
