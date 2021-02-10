var path = require('path');

module.exports = {
    entry: './src/js/splide.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/bundle.js',
    }
};