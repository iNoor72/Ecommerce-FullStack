import mongoose from 'mongoose';

const prodctSchema = new mongoose.Schema({
  name: { type: String, required: true },
  image: { type: String, default: ""},
  price: { type: Number, default: 1, required: true },
  category: { type: String, required: true },
  countInStock: { type: Number, default: 1, required: true },
});

const productModel = mongoose.model('Product', prodctSchema);

export default productModel;
