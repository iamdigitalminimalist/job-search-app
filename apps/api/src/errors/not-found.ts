import { StatusCodes } from 'http-status-codes';
import CustomAPIError from './custom-api';

export default class NotFoundError extends CustomAPIError {
  private statusCode: StatusCodes;
  constructor(message: string) {
    super(message);
    this.statusCode = StatusCodes.NOT_FOUND;
  }
}
