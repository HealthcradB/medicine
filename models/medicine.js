import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
  // _id: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   required: true,
  // },
  NAME: {
    type: String,
    required: true,
  },
  PRICE: {
    type: Number,
    required: true,
  },
  PRESCRIPTION: {
    type: String,
    required: true,
  },
  PACK: {
    type: String,
    required: true,
  },
  MANUFACTURER: {
    type: String,
    required: true,
  },
  COMPOSITION: {
    type: String,
    required: true,
  },
  DISCOUNT: {
    type: Number,
    default: 0,
  },
});

const Product = mongoose.model('Product', productSchema);

export default Product;
