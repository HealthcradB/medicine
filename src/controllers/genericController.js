import GenericService from '../services/generic-service.js';

const genericmedicineService = new GenericService();

export const getAll = async (req, res) => {
  try {
    const genericMedicines =
      await genericmedicineService.getAllGenericMedicines();
    return res.status(200).json({
      data: genericMedicines,
      success: true,
      message: 'Successfully fetched all generic medicines',
      error: null,
    });
  } catch (error) {
    console.error('Error in getAll controller method:', error);
    return res.status(500).json({
      data: null,
      success: false,
      message: 'Failed to fetch all medicines',
      error: error.message,
    });
  }
};

export const get = async (req, res) => {
  try {
    const genericMedicine = await genericmedicineService.getGenericMedicine(
      req.params.id
    );
    if (!genericMedicine) {
      return res.status(404).json({
        data: null,
        success: false,
        message: 'Medicine not found',
        error: 'Medicine not found',
      });
    }
    return res.status(200).json({
      data: genericMedicine,
      success: true,
      message: 'Successfully fetched the medicine',
      error: null,
    });
  } catch (error) {
    console.error('Error in get controller method:', error);
    return res.status(500).json({
      data: null,
      success: false,
      message: 'Failed to fetch the medicine',
      error: error.message,
    });
  }
};

export const createGenericMedicine = async (req, res) => {
  try {
    const newGenericMedicine =
      await genericmedicineService.createGenericMedicine(req.body);
    return res.status(201).json({
      data: newGenericMedicine,
      success: true,
      message: 'Successfully created a new generic medicine',
      error: null,
    });
  } catch (error) {
    console.error('Error in createGenericMedicine controller method:', error);
    return res.status(500).json({
      data: null,
      success: false,
      message: 'Failed to create new medicine',
      error: error.message,
    });
  }
};

export const deleteGenericMedicine = async (req, res) => {
  try {
    const deletedMedicine = await genericmedicineService.deleteGenericMedicine(
      req.params.id
    );
    if (!deletedMedicine) {
      return res.status(404).json({
        data: null,
        success: false,
        message: 'Medicine not found',
        error: 'Medicine not found',
      });
    }
    return res.status(200).json({
      data: deletedMedicine,
      success: true,
      message: 'Successfully deleted the medicine',
      error: null,
    });
  } catch (error) {
    console.error('Error in deleteGenericMedicine controller method:', error);
    return res.status(500).json({
      data: null,
      success: false,
      message: 'Failed to delete the medicine',
      error: error.message,
    });
  }
};

export const updatePurchaseDiscount = async (req, res) => {
  try {
    const { discount } = req.body;
    const updatedMedicine = await genericmedicineService.updatePurchaseDiscount(
      req.params.id,
      discount
    );
    return res.status(200).json({
      data: updatedMedicine,
      success: true,
      message:
        'Successfully updated the purchase discount and final purchase rate',
      error: null,
    });
  } catch (error) {
    console.error('Error in updatePurchaseDiscount controller method:', error);
    return res.status(500).json({
      data: null,
      success: false,
      message: 'Failed to update the purchase discount',
      error: error.message,
    });
  }
};

export const updateDiscount = async (req, res) => {
  try {
    const { discount } = req.body;
    const updatedMedicine = await genericmedicineService.updateDiscount(
      req.params.id,
      discount
    );
    return res.status(200).json({
      data: updatedMedicine,
      success: true,
      message: 'Successfully updated the discount and sale rate',
      error: null,
    });
  } catch (error) {
    console.error('Error in updateDiscount controller method:', error);
    return res.status(500).json({
      data: null,
      success: false,
      message: 'Failed to update the discount',
      error: error.message,
    });
  }
};
