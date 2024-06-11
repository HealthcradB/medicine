import Generic from '../models/genric.js';

class GenericRepository {
  async getAllGenricMedicines() {
    try {
      const genericMedicines = await Generic.find();
      return genericMedicines;
    } catch (error) {
      console.log('Error in getAllGenricMedicines repository method:', error);
      throw { error };
    }
  }

  async getGenericMedicine(id) {
    try {
      const genericMedicine = await Generic.findById(id);
      return genericMedicine;
    } catch (error) {
      console.log('Error in getGenericMedicine repository method:', error); // Fixed typo here
      throw { error };
    }
  }
}

export default GenericRepository;
