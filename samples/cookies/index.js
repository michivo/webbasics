const app = require('express')();

app.post("/login", (req, res) => {
	const cookie="loggedin=true; samesite=strict";
	res.setHeader("Set-Cookie", cookie);
	res.send("ok");
});

app.get("/", (req, res) => {
	res.sendFile(`${__dirname}/index.html`);
});

app.get("/img", (req, res) => {
	const cookie = req.headers.cookie;
	if (cookie && cookie.includes('loggedin=true')) {
		res.sendFile(`${__dirname}/cookie.jpg`);
	} else {
		res.sendStatus(403);
		res.end();
	}
});

app.listen(10080, () => console.log('listening on port 10080'));
