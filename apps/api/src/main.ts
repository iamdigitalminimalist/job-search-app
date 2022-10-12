import * as express from 'express';
import { Message } from '@job-search-app/api-interfaces';
import { Request, Response } from 'express';
import * as dotenv from 'dotenv';

// Middleware
import notFoundMiddleware from './middleware/not-found';
import errorHandlerMiddleware from './middleware/error-handler';
import connectDb from './db/connect';

dotenv.config();
const app = express();

const greeting: Message = { message: 'Welcome to api!' };

app.get('/api', (req: Request, res: Response) => {
  res.send(greeting);
});

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
