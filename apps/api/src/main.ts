import * as express from 'express';
import { Message } from '@job-search-app/api-interfaces';
import { Request, Response } from 'express';

// Middleware
import notFoundMiddleware from './middleware/not-found';

const app = express();

const greeting: Message = { message: 'Welcome to api!' };

app.get('/api', (req: Request, res: Response) => {
  res.send(greeting);
});

app.use(notFoundMiddleware);

const port = process.env.port || 3333;
const server = app.listen(port, () => {
  console.log('Listening at http://localhost:' + port + '/api');
});
server.on('error', console.error);
