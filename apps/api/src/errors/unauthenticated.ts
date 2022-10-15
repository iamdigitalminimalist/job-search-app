import { StatusCodes } from 'http-status-codes';
import CustomAPIError from './custom-api';

export default class UnAuthenticatedError extends CustomAPIError {
  private statusCode: StatusCodes;
  constructor(message: string) {
    super(message);
    this.statusCode = StatusCodes.UNAUTHORIZED;
  }
}
