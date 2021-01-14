var path = require('path');
module.exports = {
    output: {
        path: path.resolve(__dirname, 'public/src'),
        publicPath: '/',
        filename: 'bundle.js'
      },
}