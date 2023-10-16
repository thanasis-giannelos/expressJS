const Tour = require('../models/tourModel');

const createTour = async (req, res) => {
  try {
    const newTour = await Tour.create(req.body);
    res.status(201).json({
      status: 'success',
      message: 'tour created successfully',
      data: newTour,
    });
  } catch (error) {
    // res
    //   .status(500)
    //   .json({ status: 'failed', message: 'could not create tour' });
    next(Error(`could not create tour`));
  }
};

const updateTour = async (req, res, next) => {
  try {
    const tour = await Tour.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).json({
      status: 'success',
      data: {
        tour,
      },
    });
  } catch (error) {
    // res.status(500).json({
    //   status: 'error',
    //   message: `no tour with id: ${id}`,
    // });
    next(Error(`could not update tour with id: ${req.params.id}`));
  }
};

const deleteTour = async (req, res, next) => {
  try {
    const tour = await Tour.findByIdAndDelete(req.params.id);
    res.status(200).json({
      status: 'success',
      data: {
        tour,
      },
    });
  } catch (error) {
    // res.status(500).json({
    //   status: 'error',
    //   message: `no tour with id: ${id}`,
    // });
    next(Error(`could not delete tour with id: ${req.params.id}`));
  }
};

const getTour = async (req, res, next) => {
  try {
    const tour = await Tour.findOne({ _id: req.params.id });
    res.status(200).json({
      status: 'success',
      data: {
        tour,
      },
    });
  } catch (error) {
    // res.status(500).json({
    //   status: 'error',
    //   message: `no tour with id: ${req.params.id}`,
    // });
    next(Error(`could not get tour with id: ${req.params.id}`));
  }
};

const getTours = async (req, res, next) => {
  try {
    const tours = await Tour.find();
    res.status(200).json({
      status: 'success',
      data: {
        tours,
      },
    });
  } catch (error) {
    // res.status(500).json({
    //   status: 'error',
    //   message: 'could not get tours',
    // });
    next(Error('could not get tours'));
  }
};

// const checkId = (req, res, next, id) => {
//   const anIndex = tours.findIndex((tour) => tour.id === id * 1);
//   console.log('index: ', anIndex);
//   if (anIndex === -1) {
//     return res.status(404).json({ status: 'fail', message: 'invalid ID' });
//   }
//   next();
// };

// const checkBody = (req, res, next) => {
//   const { name, price } = req.body;
//   console.log(req.body);
//   if (!name || name.trim() === '') {
//     return res.status(400).json({ status: 'fail', message: 'invalid name' });
//   }
//   if (!price || typeof price !== 'number') {
//     return res.status(400).json({ status: 'fail', message: 'invalid price' });
//   }
//   next();
// };

module.exports = {
  createTour,
  updateTour,
  getTour,
  getTours,
  deleteTour,
};
