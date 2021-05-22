const router = require("express").Router();
const Workout = require("../models/workout");

router.post("/api/workouts", ({ body }, res) => {
    // create workouts
});

router.get("/api/workouts", (req, res) => {
    // get workouts
});

router.put("/api/workouts/:id", (req, res) => {
    // add workouts
});

router.get("/api/workouts/range", (req, res) => {
    // get range of workouts
});

module.exports = router;