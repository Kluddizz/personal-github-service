const db = require("../db");
const ash = require("../wrap-async");
const express = require("express");
const router = express.Router();

router.get(
  "/",
  ash(async (req, res) => {
    const query = await db.query(
      `
      SELECT *
      FROM repository;
      `,
      []
    );

    res.status(200).json({
      status: 200,
      repositories: query.rows,
    });
  })
);

module.exports = router;
