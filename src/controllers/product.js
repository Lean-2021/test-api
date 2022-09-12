import ProductService from "../services/products.js";

const product = new ProductService();

export const getProduct = async (req, res) => {
  try {
    const list = await product.listProducts();
    res.status(200).json(list);
  } catch (error) {
    console.log(error);
  }
};

export const createProduct = async (req, res) => {
  try {
    const newProduct = await product.newProduct(req.body);
    res.status(200).json(newProduct);
  } catch (error) {
    console.log(error);
  }
};
