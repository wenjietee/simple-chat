require('dotenv').config();
const express = require('express');
const app = express();
app.use(express.static('public'));

// CONFIG
const PORT = process.env.PORT || 3000;

// ROUTES
app.get('/', (req, res) => {
	res.sendFile(__dirname + '/index.html');
});

// LISTEN
app.listen(PORT, () => {
	console.log(`simple-chat listening on port: ${PORT}`);
});
