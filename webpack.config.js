const webpack = require("webpack");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanPlugin = require('clean-webpack-plugin');
const PATH = require('./path');
const path = require('path');

const fs = require('fs');
const entryFiles = fs.readdirSync(PATH.ENTRY_PATH);

const files = [];
const entries = {};

entryFiles.filter(function(file){
	return file.split(".")[0] && file.split(".").slice(-1)[0] === "js";
}).forEach(function(file){
	const filename = file.split('.')[0];
    const filepath = path.join(PATH.ENTRY_PATH, file);
    entries[filename] = filepath;
});



module.exports = {
	"entry" : {
		"index" : "./src/js/index.js"
	},
	"output" : {
		filename: '[name].bundle.js',
    	path: PATH.BUILD_PATH
	},
	module:{
		"rules" : [
			{
				"test": require.resolve("jquery"), 
				"loader": "expose-loader?jQuery"
			},
			{
				"test": require.resolve("jquery"), 
				"loader": "expose-loader?$"
			},						
			{
				"test": /\.css$/, 								
				"use": ['style-loader', 'css-loader']
			},
			{
				"test" : /\.woff2?$|\.ttf$|\.eot$|\.svg$/,
				"use" : [{
					"loader" : "file-loader"
				}]
			},
			{
				"test": /\.js$/,
		        "exclude": /(node_modules)/,
		        "loader": "babel-loader",
		        "query": {
		        	"presets": ["es2015"]
		        }
			}
		]
	},
	resolve: {
    	"extensions": ['.js','.jsx','.css']
  	},  	
  	plugins: [  		
	    new webpack.ProvidePlugin({
	      	"$": "jquery",
	      	"jQuery": "jquery",
	      	"window.jQuery": "jquery"
	    }),
	    new CleanPlugin.CleanWebpackPlugin({
	    	"cleanOnceBeforeBuildPatterns" : [ PATH.BUILD_PATH ],
	      	"root": PATH.ROOT_PATH,
	      	"verbose": true
	    }),
	    new HtmlWebpackPlugin({
		    "filename": 'index.html',
		    "template": 'src/index.html',
		    "chunks": ['index']
	    })		
  	],  	
  	devtool: "cheap-module-eval-source-map"
}