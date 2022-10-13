import * as express from 'express';
import { Request, Response } from 'express';
import * as dotenv from 'dotenv';
import 'express-async-errors';
import * as morgan from 'morgan';

// db and authenticated User
import connectDb from './db/connect';

// routers
import authRouter from './routes/authRoutes';
import jobsRouter from './routes/jobsRoutes';

// Middleware
import notFoundMiddleware from './middleware/not-found';
import errorHandlerMiddleware from './middleware/error-handler';

// Types
import { Message } from '@job-search-app/api-interfaces';

dotenv.config();
const app = express();
app.use(express.json());

if (process.env.NODE_ENV !== 'production') {
  app.use(morgan('dev'));
}

const greeting: Message = { message: 'Welcome to api!' };

app.get('/api', (req: Request, res: Response) => {
  res.send(greeting);
});

app.use('/api/v1/auth', authRouter);
app.use('/api/v1/jobs', jobsRouter);

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const port = process.env.port || 3333;

const start = async () => {
  try {
    await connectDb(process.env.MONGO_URL);
    app.listen(port, () => {
      console.log(`Server is listening on port ${port}`);
    });
  } catch (err) {
    console.error(err);
  }
};

start();
