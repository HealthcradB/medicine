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

  async createGenericMedicine(data) {
    try {
      const newGenericMedicine = new Generic(data);
      await newGenericMedicine.save();
      return newGenericMedicine;
    } catch (error) {
      console.log('Error in createGenericMedicine repository method:', error);
      throw { error };
    }
  }

  async deleteGenericMedicine(id) {
    try {
      const deletedMedicine = await Generic.findByIdAndDelete(id);
      return deletedMedicine;
    } catch (error) {
      console.log('Error in deleteGenericMedicine repository method:', error);
      throw { error };
    }
  }

  async updatePurchaseDiscount(id, discount) {
    try {
      const genericMedicine = await Generic.findById(id);
      if (!genericMedicine) {
        throw new Error('Medicine not found');
      }
      genericMedicine.PURCHASE_DISCOUNT = discount;
      genericMedicine.Final_PURCHASE_RATE =
        genericMedicine.MRP - genericMedicine.MRP * (discount / 100);
      await genericMedicine.save();
      return genericMedicine;
    } catch (error) {
      console.log('Error in updatePurchaseDiscount repository method:', error);
      throw { error };
    }
  }

  async updateDiscount(id, discount) {
    try {
      const genericMedicine = await Generic.findById(id);
      if (!genericMedicine) {
        throw new Error('Medicine not found');
      }
      genericMedicine.DISCOUNT = discount;
      genericMedicine.SALE_RATE =
        genericMedicine.MRP - genericMedicine.MRP * (discount / 100);
      await genericMedicine.save();
      return genericMedicine;
    } catch (error) {
      console.log('Error in updateDiscount repository method:', error);
      throw { error };
    }
  }
}

export default GenericRepository;
