const router = require('express').Router();
const {
    getAllThoughts,
    getOneThought,
    createThought
} = require('../../controllers/thought-controller');

router.route('/').get(getAllThoughts).post(createThought);

router.route('/:thoughtid').get(getOneThought);

module.exports = router;