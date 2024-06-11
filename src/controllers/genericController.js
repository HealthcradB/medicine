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
