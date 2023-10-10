// netlify-functions/hello.js
exports.handler = async (event, context) => {
  // console.log('🚀 ~ file: hello.js:3 ~ exports.handler= ~ context:', context);
  // console.log('🚀 ~ file: hello.js:3 ~ exports.handler= ~ event:', event);
  // const headers = {
  //   'Access-Control-Allow-Origin': '*', // Set the appropriate origin or '*' for any origin
  //   'Content-Type': 'application/json',
  //   'X-Testing': 'hello testing',
  //   'Access-Control-Allow-Credentials': true,
  // };

  return {
    statusCode: 200,
    body: JSON.stringify({ message: 'Index jss' }),
    headers: {
      'Access-Control-Allow-Origin': '*.netlify.app',
      'Access-Control-Allow-Methods': 'GET, POST, DELETE, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Allow-Credentials': true,
    },
  };
};
