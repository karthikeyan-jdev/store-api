import express from "express";
import connectDB from "./config/db.js";
import Product from "./models/Product.js";

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Connect DB
connectDB();

// Routes
app.get("/", (req, res) => {
  res.json({ message: "Hello, World!" });
});

app.post("/products", async (req, res) => {
  const product = await Product.create(req.body);
  res.json(product);
});

// ✅ READ ALL
app.get("/products", async (req, res) => {
  const products = await Product.find();
  res.json(products);
});

// ✅ READ ONE
app.get("/products/:id", async (req, res) => {
  const product = await Product.findById(req.params.id);
  res.json(product);
});

// ✅ UPDATE
app.put("/products/:id", async (req, res) => {
  const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.json(product);
});

// ✅ DELETE
app.delete("/products/:id", async (req, res) => {
  await Product.findByIdAndDelete(req.params.id);
  res.json({ message: "Deleted" });
});

// ✅ CREATE
app.post("/products", async (req, res) => {
  try {
    const { title, description, category, price, rating, stock } = req.body;

    // simple validation
    if (!title || !price) {
      return res.status(400).json({
        message: "Title and price are required",
      });
    }

    const product = await Product.create({
      title,
      description,
      category,
      price,
      rating,
      stock,
    });

    res.status(201).json({
      message: "Product created",
      data: product,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
