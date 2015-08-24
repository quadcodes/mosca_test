var mosca = require('mosca');

var settings = {
  port: process.env.PORT || 1883,
};

var server = new mosca.Server(settings, function() {
  console.log('Mosca server is up and running')
});

var message = {
  topic: '/hello/world',
  payload: 'abcde', // or a Buffer
  qos: 0, // 0, 1, or 2
  retain: false // or true
};

server.publish(message, function() {
  console.log('done!');
});
