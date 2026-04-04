import express from "express";
import { products } from "./data/products.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.json({ message: "Hello, World!" });
});

app.get("/products", (req, res) => {
  let { limit } = req.query;
  let final = products;

  if (limit) {
    limit = parseInt(limit);
    final = products.slice(0, limit);
  }

  res.json({ data: final, count: final.length });
});

app.get("/products/:id", (req, res) => {
  const { id } = req.params;
  const product = products.find((p) => p.id === parseInt(id));
  if (!product) {
    return res.status(404).json({ error: "Product not found" });
  }
  res.json({ data: product });
});

app.post("/create-product", (req, res) => {
  const { name, price } = req.body || {};
  if (!name || !price) {  
    final = products.slice(0, limit);
  }

  res.json({ data: final, count: final.length });
});


app.post("/create-product", (req, res) => {
  const { name, price } = req.body || {};
  if (!name || !price) {
    return res.status(400).json({ error: "Name and price are required" });
  }
  res.json({ message: "Product created successfully!" });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
