var mosca = require('mosca')
var port= process.env.PORT || 1883;
 
var settings = {
  port: port,
  persistence: mosca.persistence.Memory
};
 
var server = new mosca.Server(settings, function() {
  console.log('Mosca server is up and running');
  console.log('listening on:' + port);
});
 
server.published = function(packet, client, cb) {
  if (packet.topic.indexOf('echo') === 0) {
    return cb();
  }
 
  var newPacket = {
    topic: 'echo/' + packet.topic,
    payload: packet.payload,
    retain: packet.retain,
    qos: packet.qos
  };
 
  console.log('newPacket', newPacket);
  
  server.publish(newPacket, cb);
}

