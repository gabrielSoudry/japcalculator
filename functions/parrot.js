const querystring = require("querystring");

exports.handler = async function (event, context) {
  const requestBody = JSON.parse(event.body);
  const message = requestBody.message;
  let body = event.queryStringParameters;

  if (body) {
    return {
      statusCode: 200,
      body: JSON.stringify({ message: body.name }),
    };
  } else {
    return {
      statusCode: 418,
      body: JSON.stringify({ message: "Hello" }),
    };
  }
};
