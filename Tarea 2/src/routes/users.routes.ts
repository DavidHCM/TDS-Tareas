import { Router } from 'express';
import  controller  from '../controllers/users.controller';

const router = Router();

router.get('', controller.getAll);
router.post('/login', controller.login);


export default router;