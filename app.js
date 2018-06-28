
// Serve only the static files form the dist directory
/*app.use(express.static(__dirname + '/dist'));

app.get('/*', function(req,res) {
    
res.sendFile(path.join(__dirname+'/dist/index.html'));
});*/
// Start the app by listening on the default Heroku port
var express = require('express');  
var path = require("path");   
var bodyParser = require('body-parser');  
var mongoose = require("mongoose");
var Promise = mongoose.Promise = require('bluebird');

/*const options = {
  useMongoClient: true
};*/
var db = mongoose.connect('mongodb://dinesh:admin123@ds119161.mlab.com:19161/mogodata');  
  
   
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

 /*var User = mongoose.model("test", new Schema({
    name: String,
    address: String
}))
 var dummyUser = {
    name: "test",
    address: "new"
}
function saveData() {
    var user = new User(dummyUser);
    user.save(function (err) {
      if (err) console.log(err);
      // saved!
    });
}*/
var UsersLogin = new Schema({    
 email:{ type: String, required: true },
 password: { type: String}
}); 

var UsersSchema = new Schema({ 
 name: { type: String },  
 email:{ type: String, required: true },
 password: { type: String},
 projectname: { type: String},
 date: { type: String},
 starttime: { type: String},
 endtime: { type: String}
});  

var model = mongoose.model('login', UsersSchema);  
var admin = mongoose.model('admin', UsersLogin); 

app.post("/api/Match",function(req,res){ 
    model.find().where({"email": req.body.email,"password": req.body.password})
          .count(function(err,count, data){  
      if(err){  
         res.send(err);                
      }  
      else{    
      	if(count == "1")
      	{
      		res.send({data:"Matching"}); 
      	}   
      	else{
      		res.send({data:"Invalide Username Or Password"}); 
      	}  
      } 
 });
 })  
app.post("/api/MatchAdmin",function(req,res){ 
    admin.find().where({"email": req.body.email,"password": req.body.password})
          .count(function(err,count, data){  
      if(err){  
         res.send(err);                
      }  
      else{    
      	if(count == "1")
      	{
      		res.send({data:"Matching"}); 
      	}   
      	else{
      		res.send({data:"Invalide Username Or Password"}); 
      	}  
      } 
 });
 })  

app.post("/api/SaveUser",function(req,res){
model.update({"email": req.body.email }, {$set:{"projectname": req.body.projectname,"date": req.body.date,"starttime": req.body.starttime,"endtime": req.body.endtime}}, function(err, result){
    if (err) {
        res.send({err});
    } else {
        res.send({data:"Record has been Inserted..!!"});
    }
});
})

app.post("/api/createnewEmp",function(req,res){
  var mod = new model(req.body); 
 mod.save(function(err,data){  
      if(err){  
         res.send(err);                
      }  
      else{        
          res.send({data:"Record has been Inserted..!!"});  
      }  
 });
})
 /*var mod = new model(req.body);  
 if(req.body.mode =="Save")  
 {  
    mod.save(function(err,data){  
      if(err){  
         res.send(err);                
      }  
      else{        
          res.send({data:"Record has been Inserted..!!"});  
      }  
 });  
}  
else   
{}*/ 

 /*model.findByIdAndUpdate(req.body.email, { name: req.body.name, address: req.body.address},  
   function(err,data) {  
   if (err) {  
   res.send(err);         
   }  
   else{        
          res.send({data:"Record has been Updated..!!"});  
     }  
 });*/
 app.post("/api/getbyid",function(req,res){     
       model.find().where({ email : req.body.emailid}).
          exec(function(err, data){ 
   if (err) {  
   res.send(err);         
   }  
   else{        
          res.send(data);  
     } 
   });
  })

  app.post("/api/update",function(req,res){     
       model.findByIdAndUpdate(req.body.id, { name: req.body.name, email: req.body.email, password: req.body.password},  
   function(err,data) {  
   if (err) {  
   res.send(err);         
   }  
   else{        
          res.send({data:"Record has been Updated..!!"});  
     } 
   });
     })
 app.post("/api/deleteUser",function(req,res){     
    model.remove({ _id: req.body.id }, function(err) {    
     if(err){    
         res.send(err);    
     }    
     else{      
            res.send({data:"Record has been Deleted..!!"});               
        }    
 });    
   })  

 app.get("/api/GetEmpData/",function(req,res){  
    model.find({},function(err,data){  
              if(err){  
                  res.send(err);  
              }  
              else{                
                  res.send(data);  
                  }  
          });  
  })  
  
  
app.listen(8080, function () {  
    
 console.log('Example app listening on port 8080!')  
})  
