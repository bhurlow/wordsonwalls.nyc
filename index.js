

var express = require('express')
var app = express()
var knox = require('knox')

var client = knox.createClient({
    key: process.env.AWS_ACCESS_KEY_ID
  , secret: process.env.AWS_SECRET_ACCESS_KEY
  , bucket: 'wordsonwalls.nyc'
});

app.get('/imgs', function(req, res) {
  client.list({}, function(err, list) {
    res.end(JSON.stringify(list))
  })
})

app.use(express.static(__dirname + '/public'))
app.listen(3000)
