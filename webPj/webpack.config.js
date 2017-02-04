var webpack = require('webpack')

module.exports = {
    entry: './app/index/entry.js',
    output: {
        path:'./app/index/',
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {test: /\.css$/, loader: 'style!css'},
            {
                test: /\.js$/,
                loader: 'babel',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015','stage-0'],
                    plugins: ['transform-runtime']
                }

            },
            {
                test: /\.vue$/,
                loader: 'vue'
            }
        ]
    },
    resolve: {
        /*extensions: ['', '.js', '.vue'],
        alias: {
            'vue$': 'vue/dist/vue.js'
        }*/

    },
    vue:{
        loaders:{
            js:'babel'
        }
    },

}

