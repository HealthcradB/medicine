import GenericRepository from '../repository/generic-repository.js';

class GenericService {
  constructor() {
    this.genericRepository = new GenericRepository();
  }

  async getAllGenericMedicines() {
    try {
      const genericMedicines =
        await this.genericRepository.getAllGenricMedicines();
      return genericMedicines;
    } catch (error) {
      console.log('Error in getAllMedicines service method:', error);
      throw error;
    }
  }

  async getGenericMedicine(id) {
    try {
      const genericMedicine = await this.genericRepository.getGenericMedicine(
        id
      );
      return genericMedicine;
    } catch (error) {
      console.log('Error in getGenericMedicine service method:', error);
      throw error;
    }
  }

  async createGenericMedicine(data) {
    try {
      const newGenericMedicine =
        await this.genericRepository.createGenericMedicine(data);
      return newGenericMedicine;
    } catch (error) {
      console.log('Error in createGenericMedicine service method:', error);
      throw error;
    }
  }

  async deleteGenericMedicine(id) {
    try {
      const deletedMedicine =
        await this.genericRepository.deleteGenericMedicine(id);
      return deletedMedicine;
    } catch (error) {
      console.log('Error in deleteGenericMedicine service method:', error);
      throw error;
    }
  }

  async updatePurchaseDiscount(id, discount) {
    try {
      const updatedMedicine =
        await this.genericRepository.updatePurchaseDiscount(id, discount);
      return updatedMedicine;
    } catch (error) {
      console.log('Error in updatePurchaseDiscount service method:', error);
      throw error;
    }
  }

  async updateDiscount(id, discount) {
    try {
      const updatedMedicine = await this.genericRepository.updateDiscount(
        id,
        discount
      );
      return updatedMedicine;
    } catch (error) {
      console.log('Error in updateDiscount service method:', error);
      throw error;
    }
  }
}

export default GenericService;
