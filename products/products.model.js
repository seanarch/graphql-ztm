const products = [
  {
    id: "redshoe",
    description: "Red Shoe",
    price: 42.12,
  },
  {
    id: "bluejean",
    description: "Blue Jeans",
    price: 55.55,
  },
];

function getAllProducts() {
  return products;
}

function getProductsByPrice(minPrice, maxPrice) {
  return products.filter((product) => {
    return product.price >= min && product.price <= max;
  });
}

function getProductById(productId) {
  return products.filter((product) => {
    return product.id === productId;
  });
}

module.exports = {
  getAllProducts,
  getProductsByPrice,
  getProductById,
};
