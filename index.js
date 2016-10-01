

var express = require('express')
var app = express()
var knox = require('knox')
var request = require('request')

process.env.AWS_ACCESS_KEY_ID = 'AKIAISOHBJGBRTU3GGXQ'
process.env.AWS_SECRET_ACCESS_KEY = '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'
process.env.AWS_REGION = 'us-east-1'
process.env.AWS_DEFAULT_REGION = 'us-east-1'

var client = knox.createClient({
    key: process.env.AWS_ACCESS_KEY_ID
  , secret: process.env.AWS_SECRET_ACCESS_KEY
  , bucket: 'wordsonwalls.nyc'
});

app.get('/imgs', function(req, res) {
  client.list({ prefix: 'processed' }, function(err, list) {
    let data = list.Contents.map(x => x.Key.replace('processed/', ''))
    res.end(JSON.stringify(data))
  })
})

app.get('/s3image/:key', function(req, res) {
  console.log(req.params.key)
  let url = 'http://wordsonwalls.nyc.s3.amazonaws.com/processed/' + req.params.key
  console.log(url)
  request(url)
    .pipe(res)
})

app.use(express.static(__dirname + '/public'))
app.listen(3000)
