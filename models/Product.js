import mongoose from "mongoose";

const { Schema, model } = mongoose;

// Review Schema
const reviewSchema = new Schema({
  rating: Number,
  comment: String,
  date: Date,
  reviewerName: String,
  reviewerEmail: String,
});

// Dimensions Schema
const dimensionsSchema = new Schema({
  width: Number,
  height: Number,
  depth: Number,
});

// Meta Schema
const metaSchema = new Schema({
  createdAt: Date,
  updatedAt: Date,
  barcode: String,
  qrCode: String,
});

// Product Schema
const productSchema = new Schema({
  id: Number,
  title: String,
  description: String,
  category: String,
  price: Number,
  discountPercentage: Number,
  rating: Number,
  stock: Number,
  tags: [String],
  brand: String,
  sku: String,
  weight: Number,
  dimensions: dimensionsSchema,
  warrantyInformation: String,
  shippingInformation: String,
  availabilityStatus: String,
  reviews: [reviewSchema],
  returnPolicy: String,
  minimumOrderQuantity: Number,
  meta: metaSchema,
  images: [String],
  thumbnail: String,
});

const Product = model("Product", productSchema);

export default Product;
