require('dotenv').config();
const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require('socket.io');
const io = new Server(server);

// STATIC
app.use(express.static('public'));

// CONFIG
const PORT = process.env.PORT || 3000;

// ROUTES
app.get('/', (req, res) => {
	res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {
	console.log('a user connected...');
	socket.on('chat message', (msg) => {
		io.emit('chat message', msg);
	});
	socket.on('disconnect', () => {
		console.log('user disconnected...');
	});
});

// LISTEN
server.listen(PORT, () => {
	console.log(`simple-chat listening on port: ${PORT}`);
});
