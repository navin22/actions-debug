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

var jsonPayload = parseJwt(token)

console.log(jsonPayload)

function parseJwt (token) {
    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    var jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));

    return JSON.parse(jsonPayload);
};
