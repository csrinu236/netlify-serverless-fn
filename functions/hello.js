// netlify-functions/hello.js
exports.handler = async (event, context) => {
  // console.log('🚀 ~ file: hello.js:3 ~ exports.handler= ~ context:', context);
  // console.log('🚀 ~ file: hello.js:3 ~ exports.handler= ~ event:', event);
  return {
    statusCode: 200,
    body: JSON.stringify({ message: 'Hello, World!' }),
    headers: {
      'access-control-allow-origin': '*.netlify.app',
      'Access-Control-Allow-Methods': 'GET, POST, DELETE, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, ssotoken',
    },
  };
};
