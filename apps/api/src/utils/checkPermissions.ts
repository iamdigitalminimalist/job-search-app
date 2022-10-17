// Prevent users to access or update another users' job

import { UnAuthenticatedError } from '../errors';

export const checkPermissions = (requestUser, resourceUserId) => {
  if (requestUser.userId === resourceUserId.toString()) return;

  throw new UnAuthenticatedError('Not authorized to access this route');
};
