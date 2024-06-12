import express from 'express';
import {
  getAll,
  get,
  createGenericMedicine,
  deleteGenericMedicine,
  updatePurchaseDiscount,
  updateDiscount,
} from '../controllers/genericController.js';

const router = express.Router();

router.get('/get-generic-medicine', getAll);
router.get('/single-generic-medicine/:id', get);
router.post('/create-generic-medicine', createGenericMedicine);
router.delete('/delete-generic-medicine/:id', deleteGenericMedicine);
router.put('/update-purchase-discount/:id', updatePurchaseDiscount);
router.put('/update-discount/:id', updateDiscount);

export default router;
