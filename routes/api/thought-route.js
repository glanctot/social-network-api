const router = require('express').Router();
const { 
    getAllThoughts,
    getThoughtById,
    addThought,
    updateThought,
    removeThought,
    addReaction,
    removeReaction
} = require('../../controllers/thought-controller');

// set up get all and post at /api/thought
router
    .route('/')
    .get(getAllThoughts)

router.route('/:userId')
    .post(addThought)

router.route('/:userId/:thoughtId')
    .delete(removeThought)
    .put(updateThought)

// set up get one, put and delete at /api/thought/:id
router
    .route('/:id')
    .get(getThoughtById)

router
    .route('/:thoughtId/reaction')
    .post(addReaction)

router.route('/:thoughtId/reaction/:reactionId').delete(removeReaction)

module.exports = router;