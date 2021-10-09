const router = require('express').Router();
const {
    getAllThoughts,
    getSingleThought,
    createThought,
    updateThought,
    deleteThought,
    createReaction,
    deleteReaction
} = require('../../controllers/thought-controller');

// route /api/thoughts
router.route('/').get(getAllThoughts).post(createThought);

// route /api/thoughts/:thoughtId
router.route('/:thoughtId').get(getSingleThought).put(updateThought).delete(deleteThought);

// route /api/thoughts/:thoughtId/reaction
router.route('/:thoughtId/reaction').post(createReaction);

// route /api/thoughts/:thoughtId/reaction/:reactionId
router.route('/:thoughtId/reaction/:reactionId').delete(deleteReaction);

module.exports = router;