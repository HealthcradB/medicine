import express from 'express';

import { getAll } from '../controllers/genericController.js';
import { get } from '../controllers/genericController.js'; // Fixed import path

const router = express.Router();

router.get('/get-generic-medicine', getAll);
router.get('/single-generic-medicine/:id', get);

export default router;
