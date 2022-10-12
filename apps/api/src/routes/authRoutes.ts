import * as express from 'express';
import { register, login, updateUser } from '../controllers/authController';

const router = express.Router();

router.route('/register').post(register);
router.route('/login').post(login);
router.route('/updateUser').patch(updateUser);

export default router;
