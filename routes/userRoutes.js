const express = require('express');
const {
  getUser,
  getUsers,
  createUser,
  deleteUser,
  updateUser,
} = require('../controllers/userController');

const router = express.Router();
router.route('/').get(getUsers).post(createUser);
router.route('/:id').get(getUser).delete(deleteUser).patch(updateUser);

module.exports = router;
