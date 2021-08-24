const jwt_decode = require("jwt-decode");
const fs = require("fs");

// Output environment variables. Secrets are automatically masked.
console.log("::group::Environment variables")
var token
for (const [key, value] of Object.entries(process.env).sort()) {
  console.log(`${key}=${value}`);
  if (key == 'ACTIONS_RUNTIME_TOKEN'){
    token = value
  }
}
console.log("::endgroup::")

console.log(token);

var decoded = jwt_decode(token);
console.log(decoded);
