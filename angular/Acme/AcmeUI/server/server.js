var connect = require('connect');
connect.createServer(
  connect.static('../src/main/js/sixtyish')
).listen(9091);