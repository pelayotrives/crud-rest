const products = require("../api/data.json");

exports.getProducts = (req, res) => {
  res.json(products);
}

exports.getProductById = (req, res) => {
  const product = products.find((product) => product.id === req.params.id);
  if (product) {
    res.json(product);
  } else {
    res.status(404).json({ message: "Product not found" });
  }
}