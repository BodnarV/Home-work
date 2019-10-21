let express = require('express')
let app = express();

var request = require('request');
var bodyParser = require('body-parser');
var cors = require('cors');



app.use(bodyParser.json());
bodyParser.urlencoded({ extended: true });

app.use(cors()); 


app.get('/all',(req,res)=>{
    var text = req.query.obj;
    var num = req.query.obj2;
    


        
    request(`http://www.omdbapi.com/?apikey=c7c4011c&s=${text}&page=${num}`, function (error, response, body1) {
        res.send(body1);
     });
})

app.listen(3000, () => {
    console.log(`started on port: 3000`);
});

