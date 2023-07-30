var modifiedHeaders = $request.headers;
var operationName = modifiedHeaders['X-APOLLO-OPERATION-NAME'];

if (operationName == "GetCurrentUser"||operationName == "GetUserById") {
  var body = $response.body.replace(/"premium":false/g, '"premium":true');
  $done({ body: body });
} else {
  $done({});
}
