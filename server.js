const webpack = require("webpack");
const config = require("./webpack.config");
const WebpackDevServer = require("webpack-dev-server");

const server = new WebpackDevServer(webpack(config));

server.listen(3200,'localhost',function(error){
    if(error){
        return console.log(error);
    }
    console.log("Server run @ http://localhost:3200");
});