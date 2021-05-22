const router = require("express").Router();
const path = require("path");

router.get("/", (req, res) => {
    // index.html
});

router.get("/exercise", (req, res) => {
    // exercise.html
});

router.get("/stats", (req, res) => {
    // stats.html
});

module.exports = router;