export function getDiscountedPrice(product) {
  if (product.discount) {
    return (product.discount * product.price) / 100;
  }
  return product.price;
}
