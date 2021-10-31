import { Router } from 'express';
import updateUserDetails from '../controllers/user/updateDetails';
import joiMiddleware from '../middleware/joiMiddleware';
import { updateDetailsSchema } from '../validators/user';
import { requireSignIn } from '../middleware/auth';
import updatePassword from '../controllers/user/updatePassword';
import getPortFolioPosition from '../controllers/user/getPortfolioPosition';

const router: Router = Router();

router.patch('/update-profile', joiMiddleware(updateDetailsSchema), requireSignIn, updateUserDetails);
router.put('/update-password', requireSignIn, updatePassword);
router.get('/portfolio-position', requireSignIn, getPortFolioPosition);

export default router;
