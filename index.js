'use strict'

const express = require('expres')
const bodyParser = require('body-parser')
const request = require('request')

const app = express()

app.se('port', (process.env.PORT || 5000))

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.get('/', function(req, res) {
	res.send("Hi Iam am a chatbot")
})

app.get('/webhook/', function(req, res) {
	if (req.query['hub.verify_token'] === "Amiel") 
	{
		res.send(req.query['hub.challenge'])
}
	res.send("Wrong token")
})

app.listen(app.get('port'), function() {
	console.log("running: port")
})

