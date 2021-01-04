const app = require('express')();
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

const entries = [];

app.post("/addentry", (req, res) => {
	console.log('Neuer Kommentar ' + JSON.stringify(req.body));
	entries.push({ name: req.body.username, title: req.body.title, comment: req.body.comment });
	res.redirect('/');
});

app.get('/', (req, res) => {
	let result = '<!doctype html><title>Comments</title><div>';
	result += entries.reduce((acc, val) => `${acc}<h4>${val.title} (${val.name})</h4><p>${val.comment}</p><hr>`, '');
	result += '<form action="/addentry" method="post">';
	result += '<div><label for="username">Name:</label><input type="text" id="username" name="username"></div>';
	result += '<div><label for="title">Überschrift:</label><input type="text" id="title" name="title"></div>';
	result += '<div><label for="comment">Kommentar:</label><textarea id="comment" name="comment"></textarea></div>';
	result += '<div><button type="submit">Abschicken</button></div></form>';
	res.send(result);
});

app.listen(10080, () => console.log('listening on port 10080'));
