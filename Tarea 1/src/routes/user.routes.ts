import { Router } from 'express';
import { controller } from '../controllers';
import {roles} from "../middleware/auth.middleware";

const router = Router();


router.get('/usuarios', roles(['admin', 'gerente']), controller.listAll);

export default router;
