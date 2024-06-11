import mongoose from 'mongoose';

const genericSchema = new mongoose.Schema(
  {
    NAME: {
      type: String,
      required: true, // Fixed typo here
    },
    COMPOSITION: {
      type: String,
      required: true,
    },
    PACKING: {
      type: String,
      required: true, // Fixed typo here
    },
    TYPE: {
      type: String,
      required: true, // Fixed typo here
    },
    MRP: {
      type: Number,
      required: true, // Fixed typo here
    },
    DISCOUNT: {
      type: Number,
      default: 0,
    },
    SALE_RATE: {
      type: Number,
      required: true, // Fixed typo here
    },
    Final_PURCHASE_RATE: {
      type: Number,
      required: true, // Fixed typo here
    },
    PURCHASE_DISCOUNT: {
      type: Number,
      required: true, // Fixed typo here
    },
  },
  {
    timestamps: true,
  }
);

const Generic = mongoose.model('Generic', genericSchema);

export default Generic;
