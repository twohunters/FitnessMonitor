const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    // create new workout schema
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;