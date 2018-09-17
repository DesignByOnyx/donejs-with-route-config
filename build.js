var stealTools = require("steal-tools");
var { modules } = require('./src/route-config');

var buildPromise = stealTools.build({
  config: __dirname + "/package.json!npm",
  bundle: Object.keys(modules).map(name => modules[name])
}, {
  bundleAssets: true
});
