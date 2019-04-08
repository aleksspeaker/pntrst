const mapSegmentEvent = name => {
  switch(name) {
    case 'Product Added':
      return 'addtocart';
    case 'Checkout Step Completed':
      return 'checkout';
    case 'Product Viewed':
      return 'pagevisit';
    case 'Products Searched':
      return 'search';
    case 'Product List Viewed':
      return 'viewcategory';
    default:
      return segmentEvent;
  }
}

module.exports = mapSegmentEvent;


// Signup
// WatchVideo
// Lead
// Search
// ViewCategory
// Custom
// [Partner-defined event]
