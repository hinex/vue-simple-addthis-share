const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
    entry: './src/AddThis.vue',
    mode: 'production',
    output: {
        path: path.resolve(__dirname, './dist'),
        publicPath: '/dist/',
        filename: 'addthis.js'
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
            }
        ]
    },
    plugins: [
        new VueLoaderPlugin({
            productionMode: true
        })
    ]
}
