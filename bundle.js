var path = require("lib");
module.exports = {
  entry: {
    app: ["./lib/jszimbra.js"]
  },
  output: {
    path: path.resolve(__dirname, "test"),
    publicPath: "/",
    filename: "jszimbra.js"
  },
  resolve: {
    modules: [
        'node_modules',
        path.resolve(__dirname)
    ]
  }
};
