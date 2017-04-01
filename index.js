const express = require('express');
const path = require('path');
const open = require('open');
const port = process.env.PORT || 3000;
const app = express();
app.listen(port, function() {
	console.log('Listening on port %d', port);
	if(process.send) {
		process.send({event: 'online', url: 'http://localhost:' + port});
	} else {
		open('http://localhost:' + port);
	}
});

app.use(express.static(__dirname + '/public'));

app.get('*', function (request, response) {
	// console.log(request);
	response.sendFile(path.resolve(__dirname, 'public', 'index.html'));
});

// console.log('Server started on port ' + port);
