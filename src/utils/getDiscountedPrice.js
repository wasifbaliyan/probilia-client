export function getDiscountedPrice(product) {
  if (product.discount) {
    return ((100 - product.discount) * product.price) / 100;
  }
  return product.price;
}
