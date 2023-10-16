const fs = require('fs');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const Tour = require('../../models/tourModel');

dotenv.config({ path: './config.env' });

const DB = process.env.DATABASE.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD
);

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then((connection) => console.log('connected to DB'));

const tours = JSON.parse(
  fs.readFileSync('./dev-data/data/tours-simple.json', 'utf-8')
);

(async function () {
  try {
    if (process.argv[2] === '--import') {
      await Tour.create(tours);
      console.log('data imported successfully');
    }
    if (process.argv[2] === '--delete') {
      await Tour.deleteMany();
      console.log('data deleted successfully');
    }
  } catch (error) {
    console.log(error);
  } finally {
    mongoose.disconnect();
  }
})();
