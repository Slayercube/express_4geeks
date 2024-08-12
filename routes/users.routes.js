const express = require("express");
const router = express.Router();

const { queryDB } = require("../db/db.init");

router.get("/", async (req, res) => {
  try {
    let data = await queryDB(`SELECT * FROM "user"`);
    res.send(data);
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal Server Error");
  }
});

module.exports = router;
