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
}

export default GenericService;
