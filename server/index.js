//index.js
const express = require('express');
const app = express();
const PORT = 4000;

//New imports
const http = require('http').Server(app);
const cors = require('cors');
const socketIO = require('socket.io')(http, {
	cors: {
		origin: "http://localhost:3000"
	}
});

users = [];
//Add this before the app.get() block
socketIO.on('connection', (socket) => {
	console.log(`⚡: ${socket.id} user just connected!`);
	socket.on('message', (data) => {
		socketIO.emit('messageResponse', data);
	});

	socket.on("newUser", (data) => {
		users.push(data)
		socketIO.emit("newUserResponse", users)
	})
	socket.on('disconnect', () => {
		users = users.filter((user) => user.socketID !== socket.id);
		// console.log(users);
		//Sends the list of users to the client
		socketIO.emit('newUserResponse', users);
		console.log('🔥: A user disconnected');
	});
});

app.use(cors());


app.get('/api', (req, res) => {
	res.json({
		message: 'Hello world',
	});
});

http.listen(PORT, () => {
	console.log(`Server listening on ${PORT}`);
});