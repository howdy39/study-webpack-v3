const path = require('path');

module.exports = {
    entry: './src/js/app.js',
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, 'public'),
    },
    devServer: {
        contentBase: path.resolve(__dirname, 'public'), // このディレクトリとoutput.pathは同じじゃないとダメらしい
        port: 3000,
    },
};
