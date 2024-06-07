import MedicineRepository from '../repository/medicine-repository.js';

class MedicineService {
  constructor() {
    this.medicineRepository = new MedicineRepository();
  }

  async getMedicine(id) {
    try {
      const medicine = await this.medicineRepository.getMedicine(id);
      return medicine;
    } catch (error) {
      console.log('Error in getMedicine service method:', error);
      throw error;
    }
  }

  async getAllMedicines() {
    try {
      const medicines = await this.medicineRepository.getAllMedicines();
      return medicines;
    } catch (error) {
      console.log('Error in getAllMedicines service method:', error);
      throw error;
    }
  }

  async createMedicine(medicineData) {
    try {
      const newMedicine = await this.medicineRepository.createMedicine(
        medicineData
      );
      return newMedicine;
    } catch (error) {
      console.log('Error in createMedicine service method:', error);
      throw error;
    }
  }

  async deleteMedicine(id) {
    try {
      const result = await this.medicineRepository.deleteMedicine(id);
      return result;
    } catch (error) {
      console.log('Error in deleteMedicine service method:', error);
      throw error;
    }
  }

  async updateMedicine(id, medicineData) {
    try {
      const updatedMedicine = await this.medicineRepository.updateMedicine(
        id,
        medicineData
      );
      return updatedMedicine;
    } catch (error) {
      console.log('Error in updateMedicine service method:', error);
      throw error;
    }
  }

  async getMedicinesByManufacturer(manufacturer) {
    try {
      const medicines =
        await this.medicineRepository.getMedicinesByManufacturer(manufacturer);
      return medicines;
    } catch (error) {
      console.log('Error in getMedicinesByManufacturer service method:', error);
      throw error;
    }
  }

  async updateDiscountByManufacturer(manufacturer, discount) {
    try {
      const result = await this.medicineRepository.updateDiscountByManufacturer(
        manufacturer,
        discount
      );
      return result;
    } catch (error) {
      console.log(
        'Error in updateDiscountByManufacturer service method:',
        error
      );
      throw error;
    }
  }
}

export default MedicineService;
