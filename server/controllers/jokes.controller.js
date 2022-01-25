const Joke = require('../models/jokes.model');

module.exports.findAllJokes = (req, res) => {
    Joke.find()
    .then(allJokes => res.json({ jokes: allJokes}))
    .catch(err => res.json({message:'Something went wrong when retrieving the jokes', error: err }));
}

module.exports.findOneSingleJoke = (req, res) => {
    Joke.findOne({_id: req.params.id})
    .then(oneSingleJoke => res.json({ joke: oneSingleJoke}))
    .catch(err => res.json({message:'Something went wrong when retrieving the joke', error: err }));
}

module.exports.createNewJoke = (req, res) => {
    Joke.create(req.body)
    .then(newJoke => res.json({ joke : newJoke }))
    .catch(err => res.json({message:'Something went wrong when creating the joke', error: err }));
}

module.exports.updateExistingJoke = (req, res) => {
    Joke.findOneAndUpdate(
        {_id: req.params.id },
        req.body,
        {new: true, runValidators: true}
    )
        .then(updatedJoke => res.json({ joke: updatedJoke }))
        .catch(err => res.json({message:'Something went wrong with the update', error: err})); 
}

module.exports.deleteExistingJoke = (req, res) => {
    Joke.deleteOne({_id: req.params.id})
    .then(result => res.json({result: result}))
    .catch(err => res.json({message:'Something went wrong with the deletion', error: err }));
}