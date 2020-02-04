let express = require('express');
let app = express();
app.get('/*',function(req,res){
    res.send(`URL: ${req.url}`)
});
app.listen(80,function(){});