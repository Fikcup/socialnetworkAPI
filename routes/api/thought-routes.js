const router = require('express').Router();
const {
    getAllThoughts,
    getOneThought,
} = require('../../controllers/thought-controller');

router.route('/').get(getAllThoughts);

router.route('/:thoughtid').get(getOneThought);

module.exports = router;