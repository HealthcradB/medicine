import express from 'express';
import {
  get,
  getAll,
  createMedicine,
  deleteMedicine,
  updateMedicine,
  getMedicinesByManufacturer,
  updateDiscountByManufacturer,
} from '../controllers/medicineController.js';

const router = express.Router();

router.get('/get-medicine', getAll);
router.get('/single-medicine/:id', get);
router.get(
  '/medicines-by-manufacturer/:manufacturer',
  getMedicinesByManufacturer
);
router.post('/create-medicine', createMedicine);
router.delete('/delete-medicine/:id', deleteMedicine);
router.put('/update-medicine/:id', updateMedicine);
router.put('/update-discount/:manufacturer', updateDiscountByManufacturer);

export default router;
