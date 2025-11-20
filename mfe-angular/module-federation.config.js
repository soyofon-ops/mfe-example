module.exports = {
  name: "mfeAngular",
  filename: "remoteEntry.js",
  exposes: {
    "./angular-card": "./src/app/features/angular-card/angular-card-element.ts",
  },
};
