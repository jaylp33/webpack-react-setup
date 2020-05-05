const path = require("path");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
	mode: "development",
	entry: path.join(__dirname, 'src', "index.js"),
	watch: true,
	output: {
		path: path.join(__dirname, "dist"),
		publicPath: "/dist/",
		filename: "bundle.js",
		chunkFilename: "all.js",
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: [path.resolve(__dirname, "node_modules")],
				loader: "babel-loader",
			},
			{
				test: /\.s(a|c)ss$/,
				use: [
					"style-loader",

					{
						loader: "css-loader",
						options: {
							sourceMap: true,
						},
					},
					{
						loader: "sass-loader",
						options: {
							sourceMap: true,
						},
					},
				],
			},
			{
				test: /\.html$/,
				use: [
					{
						loader: "html-loader",
					},
				],
			},
		],
	},
	resolve: {
		extensions: [".json", ".js", ".jsx"],
	},
	devtool: "source-map",
	devServer: {
		contentBase: path.join(__dirname, "/dist/"),
		inline: true,
		host: "localhost",
		port: 8080,
	},
	plugins: [
		new HtmlWebPackPlugin({
			template: "./index.html",
			filename: "./index.html",
		}),
	],
};
