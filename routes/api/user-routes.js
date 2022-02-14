const router = require('express').Router();
const {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
    addFriend
} = require('../../controllers/user-controller');

//set up get all and post at /api/users
router
    .route('/')
    .get(getAllUsers)
    .post(createUser)

//set up get one, put and delete at /api/users/:id
router
    .route('/:id')
    .get(getUserById)
    .put(updateUser)
    .delete(deleteUser)

// add a user to a friend list    
router.route('/:userId/friends/:friendId')
    .post(addFriend)


module.exports = router;