const express = require('express');
const tourRouter = require('./routes/tourRoutes');
const userRouter = require('./routes/userRoutes');

const app = express();

// puts body of request to request
app.use(express.json());

// app.get(`${API_URL}/tours`, getTours);
// app.post(`${API_URL}/tours`, createTour);
// app.get(`${API_URL}/tours/:id`, getTour);
// app.delete(`${API_URL}/tours/:id`, deleteTour);
// app.patch(`${API_URL}/tours/:id`, updateTour);

const VERSION = 1;
const API_URL = `/api/v${VERSION}`;

app.use(`${API_URL}/tours`, tourRouter);
app.use(`${API_URL}/users`, userRouter);

module.exports = app;
