var express = require('express'),
  app = express(),
  server = require('http').Server(app),
  io = require('socket.io').listen(server);

server.listen(80);

app.use(express.static(__dirname + '/.'));
app.get('/', function (req, res) {
  res.sendfile(__dirname + '/index.html');
});


io.sockets.on('connection', function (socket) {
  socket.emit('news', { hello: 'world' });
  socket.on('my other event', function (data) {
    console.log(data);
  });
});