const querystring = require("querystring");

exports.handler = async function (event, context) {
  const requestBody = JSON.parse(event.body);
  const message = requestBody.message;

  if (message) {
    return {
      statusCode: 200,
      body: JSON.stringify({ message: "je passe par ici" }),
    };
  } else {
    return {
      statusCode: 418,
      body: JSON.stringify({ message: "Hello" }),
    };
  }
};
