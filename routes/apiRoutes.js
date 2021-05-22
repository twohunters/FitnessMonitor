const router = require("express").Router();
const db = require("../models/workout");

router.post("/api/workouts", ({ body }, res) => {
    db.Workout.create(body)
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.status(400).json(err);
        })
});

router.get("/api/workouts", (req, res) => {
    db.Workout.find({})
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.status(400).json(err);
        })
});

router.put("/api/workouts/:id", (req, res) => {
    // add workouts
});

router.get("/api/workouts/range", (req, res) => {
    // get range of workouts
});

module.exports = router;