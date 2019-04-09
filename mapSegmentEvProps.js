const mapSegmentEvProps = name => {
  switch(name) {
    case 'category':
      return 'product_category';
    case 'cart_id':
      return 'order_id';
    case 'product_id':
      return 'product_id';
    case 'quantity':
      return 'product_quantity';
    case 'name':
      return 'product_name';
    case 'brand':
      return 'product_brand';
    case 'coupon':
      return 'promo_code';
    case 'variant':
      return 'product_variant';
    case 'price':
      return 'product_price';
    default:
      return name;
  }
};

module.exports = mapSegmentEvProps;