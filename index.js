const fetch = require('node-fetch');
const { URL } = require('url')
const product  = require('./ProductAdded');
const hashIt = require('./hashIt');
const mapSegmentEvent = require('./mapSegmentEvent');
const mapSegmentEvProps = require('./mapSegmentEvProps');

const email = 'aleksspeaker@gmail.com';
const emailHash = email => hashIt(email.replace(/\s/g,'').toLowerCase());

const baseUrl = 'https://ct.pinterest.com/v3';
const tagID = product.receivedObject.obj.userId;

const event = mapSegmentEvent(product.receivedObject.obj.event);
const props = product.receivedObject.obj.properties;
const evData = Object.keys(props).map(key => `[${mapSegmentEvProps(key)}]=${props[key]}`);
const productsList = evData.filter(item => item.includes('product_'))
const evDataList = evData.filter(item => !item.includes('product_'))
const evDataListString = evDataList.map(evDataItem => `&ed${evDataItem}`)
const productsListString = productsList.map(product => `&ed[list_items][0]${product}`)

const normalizedUrl = new URL (`${baseUrl}/?tid=${tagID}&event=${event}${evDataListString}${productsListString}&pd[em]=${emailHash(email)}&noscript=1`)

fetch(normalizedUrl)
  .then(response => console.log(response))
  .catch(e => console.error(e));
