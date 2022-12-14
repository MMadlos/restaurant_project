const path = require("path")

const ruleForStyles = {
	test: /\.css$/,
	use: ["style-loader", "css-loader"],
}

module.exports = {
	entry: "./src/index.js",
	output: {
		filename: "main.js",
		path: path.resolve(__dirname, "dist"),
	},
	module: {
		rules: [ruleForStyles],
	},
}
