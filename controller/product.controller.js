import connectDB from "../config/db.js";
import Product from "../models/Product.js";

export const updateProduct = async (req, res) => {
  await connectDB();
  try {
    const { id } = req.params || {};
    const { name, price } = req.body || {};

    if (!name || !price) {
      return res.status(400).json({ error: "Name and price are required" });
    }

    const newProduct = await Product.findByIdAndUpdate(
      id,
      { name, price },
      { new: true },
    );

    return res.status(200).json({
      message: "Product updated successfully!",
      data: newProduct,
    });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

export const deleteProduct = async (req, res) => {
  await connectDB();

  try {
    const { id } = req.params || {};

    const product = await Product.findById(id);
    if (!product) {
      return res.status(404).json({ error: "Product not found" });
    }

    await Product.findByIdAndDelete(id);

    return res.status(200).json({
      message: "Product deleted successfully!",
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
