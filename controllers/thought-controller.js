const { User, Thought } = require('../models');

const thoughtController = {
    getAllThoughts(req, res) {
        Thought.find()
            .then((thoughtData) => {
                res.json(thoughtData);
            })
            .catch((err) => {
                console.log(err);
                res.status(500).json(err);
            });
    },
    getOneThought(req, res) {
        Thought.findOne()
            .then((thoughtData) => {
                res.json(thoughtData);
            })
            .catch((err) => {
                console.log(err);
                res.status(500).json(err);
            });
    }
}

module.exports = thoughtController;