const router = require('express').Router();
const {
    getAllUsers,
    getSingleUser,
    createUser,
    updateUser,
    deleteUser,
    createFriend,
    deleteFriend
} = require('../../controllers/user-controller');

// route /api/users
router.route('/').get(getAllUsers).post(createUser);

// route /api/users/:userId
router.route('/:userId').get(getSingleUser).put(updateUser).delete(deleteUser);

// route /api/users/:userId/friend/:friendId
router.route('/:userId/friend/:friendId').post(createFriend).delete(deleteFriend);

module.exports = router;