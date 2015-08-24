var ponte = require("ponte");
var opts = {
  logger: {
    level: 'info'
  },
  http: {
    port: 3002 // tcp
  },
  mqtt: {
    port: 3001 // tcp
  },
  coap: {
    port: 3000 // udp
  },
  persistence: {
    type: 'level',
    path: './db'
  }
};

var server = ponte(opts);

server.on("updated", function(resource, buffer) {
  console.log("Resource Updated", resource, buffer);
});

// Stop the server after 1 minute
setTimeout(function() {
  server.close(function() {
    console.log("server stopped");
  });
}, 60 * 1000);
