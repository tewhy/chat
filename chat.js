var express = require('express');
var http    = require('http');
var bodyp   = require('body-parser');
var app     = express();
app.use(bodyp.urlencoded({extended: false}));
app.use(bodyp.json());


app.get('/keyboard',function(req,res){
var data = {'type':'buttons','buttons':['과일','채소']};
res.json(data);
});// end of /tw get


app.post('/message',function(req,res){
  var msg = req.body.content;
  console.log('kakao'+msg);

  var sendmsg = {};
  sendmsg = msg + "kakao";
  res.json(sendmsg);
});



http.createServer(app).listen(9090,function(){
  console.log('listen9090');
});
