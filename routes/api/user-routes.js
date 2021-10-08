const router = require('express').Router();
const {
    getAllUsers,
    getSingleUser,
    createUser,
    updateUser,
    deleteUser,
    createFriend,
} = require('../../controllers/user-controller');

router.route('/').get(getAllUsers).post(createUser);

router.route('/:userId').get(getSingleUser).put(updateUser).delete(deleteUser);

router.route('/:userId/friend/:friendId').post(createFriend);

module.exports = router;