import { getDiscountedPrice } from "./getDiscountedPrice";

export function getTotalMRP(products) {
  return products.reduce((a, c) => Number(a) + Number(c.productId.price), 0);
}

export function getTotalDiscount(products) {
  return products.reduce(
    (a, c) =>
      Number(a) + Number((c.productId.price * c.productId.discount) / 100),
    0
  );
}
export function getTotalPaidAmount(products) {
  return products.reduce(
    (a, c) => Number(a) + getDiscountedPrice(c.productId),
    0
  );
}
