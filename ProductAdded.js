const { Track } = require('segmentio-facade');

const ProductAdded = {
	event: 'Product Added',
	userId: '2612699901529',
	properties: {
		cart_id: 'skdjsidjsdkdj29j',
		product_id: '507f1f77bcf86cd799439011',
		sku: 'G-32',
		category: 'Games',
		name: 'Monopoly: 3rd Edition',
		brand: 'Hasbro',
		variant: '200 pieces',
		price: 18.99,
		quantity: 1,
		coupon: 'MAYDEALS',
		position: 3,
		url: 'https://www.example.com/product/path',
		image_url: 'https://www.example.com/product/path.jpg'
	},
};

const receivedObject = new Track(ProductAdded, { type: 'event' });

exports.receivedObject = receivedObject;
