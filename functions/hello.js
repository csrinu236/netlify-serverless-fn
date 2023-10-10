// netlify-functions/hello.js
exports.handler = async (event, context) => {
  // console.log('🚀 ~ file: hello.js:3 ~ exports.handler= ~ context:', context);
  // console.log('🚀 ~ file: hello.js:3 ~ exports.handler= ~ event:', event);

  let ACAO = '*';
  const requestOrigin = event.headers.origin;
  console.log(
    '🚀 ~ file: hello.js:8 ~ exports.handler= ~ requestOrigin:',
    requestOrigin
  );
  if (requestOrigin && requestOrigin.endsWith('.netlify.app')) {
    ACAO = requestOrigin;
  }
  return {
    statusCode: 200,
    body: JSON.stringify({ message: 'Hello, World!' }),
    headers: {
      'Access-Control-Allow-Origin': ACAO,
      'Access-Control-Allow-Methods': 'GET, POST, DELETE, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Allow-Credentials': true,
    },
  };
};
