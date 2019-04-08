const crypto = require('crypto');

const hashIt = input =>
  crypto.createHash('sha256', '')
    .update(input)
    .digest('hex');

module.exports = hashIt;