const {
  withModuleFederationPlugin,
} = require("@angular-architects/module-federation/webpack");

module.exports = {
  ...withModuleFederationPlugin({
    name: "mfe_angular",
    exposes: {
      "./angular-card":
        "./src/app/features/angular-card/angular-card-register.ts",
    },
  }),
};
