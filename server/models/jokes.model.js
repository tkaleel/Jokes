const mongoose = require('mongoose');

const JokeSchema = new mongoose.Schema(
    {
    setup: {
        type: String,
        required: [true, "Setup is required!"],
        minlength: [2, "Setup must contain at least 2 characters."]
    },
    punchline: {
        type: String,
        required: [true, "Punchline is required!"],
        minlength: [2, "Punchline must contain at least 2 characters."]
    }
    },
    { timestamps: true }

    );

const Joke = mongoose.model('Joke', JokeSchema);

module.exports = Joke;