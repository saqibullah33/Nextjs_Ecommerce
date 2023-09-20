import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  title: String,
  price: Number,
  rating: Number,
  category: String,
  description: String
});

// const User = mongoose.models.users || mongoose.model("users", userSchema);


export const Product=mongoose.models.products || mongoose.model("products", productSchema);
