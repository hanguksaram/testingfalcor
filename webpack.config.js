
const path = require('path')

module.exports = (env) => {

    const isProduction = env === "production"
  
  
  
    return {
      entry: ['babel-polyfill', './src/app.js'],
     output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js'
  
    },
    module:{
      rules: [
        {
          loader: 'babel-loader',
          test:/\.js$/,
          exclude: path.resolve(__dirname, 'node_modules')
        }
      ]
      
    },
 
    devtool: isProduction ? 'source-map' : 'inline-source-map',
    devServer:{
      port: 4200,
      contentBase: path.join(__dirname, 'dist'),
      historyApiFallback: true,
      publicPath: '/'
    } 
    }
  }