const { User, Thought } = require('../models');

const userController = {
    getAllUsers(req, res) {
        User.find()
            .then((userData) => {
                res.json(userData);
            })
            .catch((err) => {
                console.log(err);
                res.status(500).json(err);
            });
    },
    getSingleUser(req, res) {
        User.findOne()
            .then((userData) => {
                res.json(userData);
            })
            .catch((err) => {
                console.log(err);
                res.status(500).json(err);
            });
    },
    createUser(req, res) {
        User.create(req.body)
            .then((userData) => {
                res.json(userData);
            })
            .catch((err) => {
                console.log(err);
                res.status(500).json(err);
            })
    },
    updateUser(req, res) {
        User.findOneAndUpdate(
            { _id: req.params.userId },
            { $set: req.body },
            { runValidators: true, new: true, }
        )
            .then((userData) => {
                if (!userData) {
                    return res.status(404).json({ message: 'No user exists with this id!' });
                }
                res.json(userData);
            })
            .catch((err) => {
                console.log(err);
                res.status(500).json(err);
            })
    },
    deleteUser(req, res) {
        User.findOneAndDelete(
            { _id: req.params.userId },
        )
            .then((userData) => {
                if (!userData) {
                    return res.status(404).json({ message: 'No user exists with this id!' });
                }

                res.json({ message: 'User has been deleted' });
            })
            .catch((err) => {
                console.log(err);
                res.status(500).json(err);
            })
            
    }
}


module.exports = userController;