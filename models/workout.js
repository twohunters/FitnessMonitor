const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    day: {
        type: Date,
        default: Date.now,
    },
    exercise: [{
        type: {
            type: String,
            trim: true,
            required: [true, "Select a type of exercise"]
        },
        name: {
            type: String,
            trim: true,
            required: [true, "Enter the name of the workout"]
        },
        duration: {
            type: Number,
            default: 0,
            required: [true, "Enter the duration of the workout in minutes"]
        },
        weight: {
            type: Number,
            default: 0,
            required: [true, "Enter an amount of weight in pounds"]
        },
        reps: {
            type: Number,
            default: 0,
            required: [true, "Enter the number of reps"]
        },
        sets: {
            type: Number,
            default: 0,
            required: [true, "Enter the number of sets"]
        },
        distance: {
            type: Number,
            default: 0,
            required: [true, "Enter the distance in feet"]
        }
    }]
},
    {
        toJSON: {
            virtuals: true
        }
    });

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;