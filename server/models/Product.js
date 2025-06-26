// models/product.js
import { Schema, model } from "mongoose";

const productSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },

  productName: {
    type: String,
    required: true,
  },

  price: {
    type: Number,
    required: true,
  },
  
  quantity: {
    type: String,
    required: true,
  },  

  description: {
    type: String,
    required: true,
  },
},{
  timestamps: true
});

const Product = model("Product", productSchema);

export default Product;
