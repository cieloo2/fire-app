module.exports = {
    proxy: "localhost:7000",
    files: ["**/*.css", "**/*.ejs","**/*.html", "**/*.js"],
    ignore: ["node_modules"],
    reloadDelay: 10,
    ui: false,
    notify: false,
    port: 3000,
  };