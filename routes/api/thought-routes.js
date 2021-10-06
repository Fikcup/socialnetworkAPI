const router = require('express').Router();
const {
    getAllThoughts,
    getSingleThought,
    createThought,
    deleteThought
} = require('../../controllers/thought-controller');

router.route('/').get(getAllThoughts).post(createThought);

router.route('/:thoughtId').get(getSingleThought).delete(deleteThought);

module.exports = router;