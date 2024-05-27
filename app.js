import * as dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import morgan from 'morgan';

const app = express();

// Routes
import authRouter from './routes/authRoutes.js';
import { StatusCodes } from 'http-status-codes';

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.get('/', (req, res) => {
  res.send('hello');
});

app.use('/api/v1/auth', authRouter);

// Errors
app.all('*', (req, res, next) => {
  const err = new Error(`Can't find ${req.originalUrl} on this server`);
  err.status = 'fail';
  err.statusCode = 404;

  next(err);
});

app.use((err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.status = err.status || 'error';

  res.status(err.statusCode).json({ status: err.status, message: err.message });
});

// Running server

const port = process.env.PORT || 5050;

try {
  app.listen(port, () => {
    console.log(`Server is running on a port: ${port}`);
  });
} catch (err) {
  console.error(err);
  process.exit(1);
}
