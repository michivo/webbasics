var express = require('express');
var app = express();

app.get('/', sendHtml)

app.get('/index.txt', sendTxt);

app.get('/index.html', sendHtml);

app.get('/nonsense.html', sendTxt);

app.get('/nonsense.txt', sendHtml);

app.get('/some.json', sendJson);

app.get('/some.txt', sendSomeText);

app.get('/xml.xml', sendXml);

app.get('/xml.foobar', sendXmlText);

app.get('/svg.xml', sendSvgXml);

app.get('/svg.txt', sendSvgText);

app.get('/svg.svg', sendSvg);

function sendHtml(req, res) {
    res.setHeader('content-type', 'text/html');
    res.setHeader('x-c02-webbasics', 'Hello class!');
    sendSampleContent(res);
}

function sendTxt(req, res) {
    res.setHeader('content-type', 'text/plain');
    res.setHeader('x-c02-webbasics', 'Hello class!');
    sendSampleContent(res);
}

function sendSampleContent(res) {
    res.send('<!doctype html>\r\n<html>\r\n<head>\r\n<title>Web Basics Test</title>\r\n</head>\r\n' +
        '<body><h1>Hello Web Basics!</h1></body>\r\n</html>');
}

function sendJson(req, res) {
    res.setHeader('content-type', 'application/json');
    res.setHeader('x-c02-webbasics', 'Hello class!');
    res.send(JSON.stringify(req.headers));
}

function sendSomeText(req, res) {
    res.setHeader('content-type', 'text/plain');
    res.setHeader('x-c02-webbasics', 'Hello class!');
    res.send(JSON.stringify(req.headers));
}

function sendXml(req, res) {
    res.setHeader('content-type', 'text/xml');
    res.setHeader('x-c02-webbasics', 'Hello class!');
    sendSampleXml(res);
}

function sendXmlText(req, res) {
    res.setHeader('content-type', 'text/plain');
    res.setHeader('x-c02-webbasics', 'Hello class!');
    sendSampleXml(res);
}

function sendSampleXml(res) {
    res.send('<?xml version="1.0" encoding="UTF-8"?>\r\n' +
    '<note>\r\n' +
    '  <to>Class</to>\r\n' +
    '  <from>Michael Faschinger</from>\r\n' +
    '  <heading>Howdie</heading>\r\n' +
    '  <body>How is class today?</body>\r\n' +
    '</note>');
}

function sendSvgXml(req, res) {
    res.setHeader('content-type', 'text/xml');
    res.setHeader('x-c02-webbasics', 'Hello class!');
    sendSampleSvg(res);
}

function sendSvgText(req, res) {
    res.setHeader('content-type', 'text/plain');
    res.setHeader('x-c02-webbasics', 'Hello class!');
    sendSampleSvg(res);
}

function sendSvg(req, res) {
    res.setHeader('content-type', 'image/svg+xml');
    res.setHeader('x-c02-webbasics', 'Hello class!');
    sendSampleSvg(res);
}

function sendSampleSvg(res) {
    res.send('<?xml version="1.0" encoding="UTF-8"?>\r\n' + 
    '<svg  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">\r\n' + 
    '<rect x="10" y="10" height="100" width="100" style="stroke:#12345678; fill: #abcdef80"/>\r\n' + 
    '<circle cx="80" cy="80" r="42" stroke="#ffaa8744" stroke-width="3" fill="#ff88aa87"/>\r\n' + 
    '</svg>');
}

var server = app.listen(10080, function () {
    var host = server.address().address
    var port = server.address().port

    console.log("Example app listening at http://%s:%s", host, port)
})