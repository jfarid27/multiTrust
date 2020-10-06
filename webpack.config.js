const path = require('path');
const webpack = require('webpack');

module.exports = function(env, argv) {
  const _env = env || {};
  return {
    entry: './src/index.tsx',
    mode: _env.production ? 'production' : 'development',
    devtool: _env.production ? 'source-maps' : 'eval',
    output: {
      filename: 'main.js',
      path: path.resolve(__dirname, 'dist'),
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx']
    },
    module: {
      rules: [
        {
            test: /\.ts(x?)$/,
            exclude: /node_modules/,
            use: [
                {
                    loader: "ts-loader"
                },
            ]
        },
        {
            enforce: "pre",
            test: /\.js$/,
            loader: "source-map-loader"
        },
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader"
          }
        },
        {
          test: /\.s[ac]ss$/i,
          use: [
            // Creates `style` nodes from JS strings
            'style-loader',
            // Translates CSS into CommonJS
            'css-loader',
            // Compiles Sass to CSS
            'sass-loader',
          ],
        }
      ]
    },
    plugins: [
      new webpack.DefinePlugin({
        "env.MODE": _env.production ? '"production"' : '"development"'
      })
    ]
  };
};
