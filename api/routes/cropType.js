import { Router } from "express";
import { getCropTypes } from '../controllers/cropTypeController.js';

const router = Router();
router.get('/', getCropTypes);

export default router;