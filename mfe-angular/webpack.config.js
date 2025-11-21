const {
  withModuleFederationPlugin,
} = require("@angular-architects/module-federation/webpack");

module.exports = withModuleFederationPlugin({
  name: "mfeAngular",
  filename: "remoteEntry.js",
  exposes: {
    "./angular-card": "./src/app/features/angular-card/angular-card-element.ts",
  },
  shared: {},
});
