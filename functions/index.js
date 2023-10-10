// netlify-functions/hello.js
exports.handler = async (event, context) => {
  // console.log('🚀 ~ file: hello.js:3 ~ exports.handler= ~ context:', context);
  console.log('🚀 ~ file: hello.js:3 ~ exports.handler= ~ event:', {
    event,
    context,
  });
  // const headers = {
  //   'Access-Control-Allow-Origin': '*', // Set the appropriate origin or '*' for any origin
  //   'Content-Type': 'application/json',
  //   'X-Testing': 'hello testing',
  //   'Access-Control-Allow-Credentials': true,

  // };

  let ACAO = '*';
  const requestOrigin = event.headers.origin;
  if (requestOrigin && requestOrigin.endsWith('.netlify.app')) {
    ACAO = requestOrigin;
  }
  return {
    statusCode: 200,
    body: JSON.stringify({ message: 'Index, World!' }),
    headers: {
      'Access-Control-Allow-Origin': ACAO,
      'Access-Control-Allow-Methods': 'GET, POST, DELETE, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Allow-Credentials': true,
    },
  };
};
