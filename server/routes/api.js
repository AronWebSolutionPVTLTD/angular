var express = require('express');  
var path = require("path"); 
const router = express.Router();
const http = require('http');  
var bodyParser = require('body-parser');  
var mongoose = require("mongoose");
var Promise = mongoose.Promise = require('bluebird');

/*const options = {
  useMongoClient: true
};*/
var db = mongoose.connect('mongodb://dinesh:admin123@ds119161.mlab.com:19161/mogodata', () => {
	console.log("conected");
});  
  
   
var app = express();  
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })) 
   
  
app.use(function (req, res, next) {        
     res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');    
     res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');    
     res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');      
     res.setHeader('Access-Control-Allow-Credentials', true);       
     next();  
 });  
  
 var Schema = mongoose.Schema; 
 
 var UsersSchema = new Schema({    
 email:{ type: String, required: true },
 password: { type: String}  
});  

var model = mongoose.model('user', UsersSchema); 

app.get("/getUser",function(req,res){  
    model.find({},function(err,data){  
              if(err){  
                  res.send(err);  
              }  
              else{  
              console.log(data);              
                  res.send(data);  
                  }  
          });  
  }) 

module.exports = router;








 