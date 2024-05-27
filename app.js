import * as dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import morgan from 'morgan';

const app = express();

// Routes
import authRouter from './routes/authRoutes.js';
import { StatusCodes } from 'http-status-codes';
import AppError from './utils/appError.js';
import errorController from './middleware/errorController.js';

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.get('/', (req, res) => {
  res.send('hello');
});

app.use('/api/v1/auth', authRouter);

// Errors
app.all('*', (req, res, next) => {
  next(
    new AppError(
      `Can't find ${req.originalUrl} on this server`,
      StatusCodes.NOT_FOUND
    )
  );
});

app.use(errorController);

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
