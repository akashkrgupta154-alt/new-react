const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const config = require('./webpack.config.js');

const compiler = webpack(config);

console.log('starting server with options', config.devServer);

const server = new WebpackDevServer(config.devServer, compiler);

server.startCallback(() => {
  console.log('Dev server started');
});
