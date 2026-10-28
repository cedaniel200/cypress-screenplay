module.exports = {
  INVENTORY_LIST: '.inventory_list',
  CART_LINK: '.shopping_cart_link',
  CART_BADGE: '.shopping_cart_badge',
  ADD_TO_CART: (product) => `[data-test="add-to-cart-${product}"]`,
}
