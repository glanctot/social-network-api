const router = require('express').Router();
const { 
    getAllThoughts,
    getThoughtById,
    addThought,
    updateThought,
    removeThought 
} = require('../../controllers/thought-controller');

// set up get all and post at /api/thought
router
    .route('/')
    .get(getAllThoughts)

router.route('/:userId')
    .post(addThought)

router.route('/:userId/:thoughtId')
    .delete(removeThought)

// set up get one, put and delete at /api/thought/:id
router
    .route('/:id')
    .get(getThoughtById)
    .put(updateThought)

module.exports = router;