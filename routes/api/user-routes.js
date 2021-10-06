const router = require('express').Router();
const {
    getAllUsers,
    getSingleUser,
    createUser
} = require('../../controllers/user-controller');

router.route('/').get(getAllUsers).post(createUser);

router.route('/:userId').get(getSingleUser);

module.exports = router;