import { StatusCodes } from 'http-status-codes';
import CustomAPIError from './custom-api';

export default class BadRequestError extends CustomAPIError {
  private statusCode: StatusCodes;
  constructor(message) {
    super(message);
    this.statusCode = StatusCodes.BAD_REQUEST;
  }
}
