import mongoose from "mongoose";

const chatSchema = new mongoose.Schema({
  role: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
});

const Product = mongoose.model("Product", chatSchema);

export default Product;
