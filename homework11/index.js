var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
    res.sendFile(__dirname + '/view/index.html');
});

io.on('connection', function(socket){
    socket.on('message', function(msg, user, avatar){
        io.emit('message', msg, user, avatar);
    });
});

http.listen(3000, function(){
    console.log('Братик, слушаем 3000 порт! Просто попробуй localhost:3000');
});