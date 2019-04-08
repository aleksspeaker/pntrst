const fetch = require('node-fetch');
const product  = require('./ProductAdded');
const hashIt = require('./hashIt.js')
const mapSegmentEvent = require('./mapSegmentEvent.js')

const email = 'aleksspeaker@gmail.com';
const emailHash = email => hashIt(email.toLowerCase())

const mapSegmentEvProps = name => {
  switch(name) {
    case 'cart_id':
      return 'order_id';
    case 'product_id':
      return 'product_id';
    default:
      return segmentEvent;
  }
}

const baseUrl = 'https://ct.pinterest.com/v3';
const tagID = product.receivedObject.obj.userId;
const event = mapSegmentEvent(product.receivedObject.obj.event);

console.log('====================================');
console.log(Object.keys(product.receivedObject.obj.properties));
console.log('====================================');

fetch(`${baseUrl}/?tid=${tagID}&event=${event}&ed[order_quantity]=2&ed[currency]=USD&ed[list_items][0][product_name]=Parker+Boots&[list_items][0][product_id]='1414'&ed[list_items][0][product_price]=5.00&ed[list_items][0][product_quantity]=1&ed[list_items][1][product_name]=Parker+Sandals&ed[list_items][1][product_id]='ABC'&ed[list_items][1][product_price]=5.00&ed[list_items][1][product_quantity]=1&pd[em]=${emailHash(email)}&noscript=1`)
	// .then(response => console.log(response))
	.catch(e => console.error(e));

// value	100.00	Number (integer or floating point)	✔	✔
// order_quantity	1	Integer	✔	✔
// currency	USD	One of the following: USD, GBP, CAD, EUR, AUD or NZD	✔	
// product_name	Parker Boots	line_items array	✔	
// product_id	1414	line_items array	✔	
// product_category	Shoes	line_items array	✔	
// product_variant_id	1414-Red	line_items array	✔	
// product_variant	Red	line_items array	✔	
// product_price	99.99	Number (integer or floating point), line_items array	✔	
// product_quantity	1	Integer, line_items array	✔	
// product_brand	Parker	line_items array	✔	
// promo_code	WINTER10	String	✔	
// property	Athleta	String	✔	
// search_query	boots	String	✔	
// video_title	How to style your Parker Boots	String	✔	
// lead_type	Newsletter	String	✔
