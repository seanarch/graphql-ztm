const productsModel = require("./products.model");

module.exports = {
  Query: {
    products: (parent) => {
      return productsModel.getAllProducts();
    },
    productsByPrice: (parent, args) => {
      return productsModel.getProductsByPrice(args.min, args.max);
    },
    productById: (parent, args) => {
      return productsModel.getProductById(args.productId);
    },
  },
};
