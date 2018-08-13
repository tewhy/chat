var express = require('express');
var http    = require('http');
var app     = express();


app.get('/tw',function(req,res){

var data = {'type':'buttons','buttons':['과일','채소']};
res.json(data);

});


http.createServer(app).listen(9090,function(){
  console.log('listen9090');
});
