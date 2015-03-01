var express = require('express'),
	app = express(),
	server = require('http').createServer(app),
	io = require('socket.io').listen(server);

    server.listen(1234);
    app.use('/public', express.static(__dirname + '/public'));
    app.get('/web', function(req, res){
    res.sendFile(__dirname + '/web.html');
    });
    app.get('/mobile', function(req, res){
    res.sendFile(__dirname + '/mobile.html');
    });
    app.get('/tetris', function(req, res){
    res.sendFile(__dirname + '/tetris.html');
    });

    app.get('/remote', function(req, res){
    res.sendFile(__dirname + '/remote.html');
    });

console.log("server start!");

// 連線
io.sockets.on('connection', function (socket) {
 
    // 偵聽 send 事件
    socket.on('send', function (data) {
       
        // 然後我們依據 data.act 做不同的動作
        switch ( data.act )
        {
            // 這個是使用者打開手機網頁後發生的事件
            case "enter":
            io.sockets.emit('get_response', data);
            console.log("Sending getEnter");
            break;
 
            // 這個是使用者在手機網頁中點擊按鈕，讓電腦網頁背景變色的事件
            case "changebg":
            io.sockets.emit('get_response', data);
            
            console.log("Sending changeBg");
            break;
            case "rotate":
            case "left":
            case "right":
            case "down":
            case "space":
            io.sockets.emit('get_response', data);
            
            console.log("act "+data.act);
            break

            default:

             console.log(data.msg);
        }
 
    });
 
});