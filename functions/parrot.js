const querystring = require("querystring");

exports.handler = async function (event, context, callback) {
  const requestBody = JSON.parse(event.body);
  const message = requestBody.message;
  let body = event.queryStringParameters;

  if (!(body.name === "" || !body.name)) {
    return callback(null, {
      statusCode: 200,
      body: JSON.stringify({ message: body.name }),
    });
  } else {
    return callback(null, {
      statusCode: 200,
      body: JSON.stringify({ message: "hello" }),
    });
  }
};
