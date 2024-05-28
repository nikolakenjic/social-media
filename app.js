import * as dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import morgan from 'morgan';
import { StatusCodes } from 'http-status-codes';
import AppError from './utils/appError.js';
import errorController from './middleware/errorController.js';
import { connectDB } from './db/connectDB.js';

const app = express();

// Routes
import authRouter from './routes/authRoutes.js';
import userRouter from './routes/userRoutes.js';

// Middleware
app.use(express.json());

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.get('/', (req, res) => {
  res.send('hello');
});

app.use('/api/v1/auth', authRouter);
app.use('/api/v1/user', userRouter);

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
  await connectDB(process.env.MONGO_URL);
  app.listen(port, () => {
    console.log(`Server is running on a port: ${port}`);
  });
} catch (err) {
  console.error(err);
  process.exit(1);
}
