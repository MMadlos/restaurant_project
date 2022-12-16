const path = require("path")

const ruleForStyles = {
	test: /\.css$/,
	use: ["style-loader", "css-loader"],
}

const ruleForImages = {
	test: /\.(png|svg|jpg|jpeg|gif|webp)$/i,
	type: "asset/resource",
}

module.exports = {
	entry: "./src/index.js",
	output: {
		filename: "main.js",
		path: path.resolve(__dirname, "dist"),
	},
	module: {
		rules: [ruleForStyles, ruleForImages],
	},
}
