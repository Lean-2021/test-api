import { v4 as uuid } from "uuid";
import Products from "../daos/product.js";

class ProductService {
  constructor() {
    this.product = new Products();
  }
  async listProducts() {
    try {
      const list = await this.product.getALLProduct();
      return list;
    } catch (error) {
      console.log(error);
    }
  }
  async newProduct(product) {
    try {
      const newProduct = { id: uuid(), ...product };
      await this.product.createProduct(newProduct);
      return newProduct;
    } catch (error) {
      console.log(error);
    }
  }
}

export default ProductService;
