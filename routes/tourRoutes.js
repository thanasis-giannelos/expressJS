const express = require('express');
const {
  getTour,
  getTours,
  createTour,
  deleteTour,
  updateTour,
} = require('../controllers/tourController');

const router = express.Router();
// router.param('id', checkId);
router.route('/').get(getTours).post(createTour);
router.route('/:id').get(getTour).delete(deleteTour).patch(updateTour);

module.exports = router;
