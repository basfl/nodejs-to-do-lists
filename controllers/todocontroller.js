/**
 * http://usejsdoc.org/
 */
var bodyParser=require("body-parser");
var mongos = require("mongoose");
var urlencodedParser = bodyParser.urlencoded({ extended: false })
module.exports=function(app){
//  var data=[{item:"get milk"},{item:"get bread"},{item:"get butter"}];
	mongos.connect('mongodb://user1:user1@ds050879.mlab.com:50879/todo');
	var todoSchema = new mongos.Schema({
		item : String
	});
	var Todo = mongos.model("Todo", todoSchema);
//	var itemOne = Todo({
//		item : "get Flowers"
//	}).save(function(err) {
//		if (err) {
//			throw err;
//		}
//	});
	app.get("/todo",function(req,res){
		console.log("inside"+req.url);
	//	res.render("todo");
		/*
		 * get data from mongo and pass it to view
		 * 
		 */
		Todo.find({},function(err,data){
			if(err){
				throw err;
			}else{
				res.render("todo",{todos:data});
			}
		});
		
	//	res.render("todo",{todos:data});
	});
	app.post("/todo",urlencodedParser, function (req, res) {
//		console.log("post"+req.body);
//		data.push(req.body);
	//	res.json(data);
//		res.render("todo",{todos:data});
	//	res.JSON(data);
		/**************************************************************/
		var newTodo=Todo(req.body).save(function(err,data){
			if(err){
				throw err;
			}
				res.render("todo",{todos:data});
			
				});
		
		
	});
//	app.delete('/todo', function (req, res) {
//		  res.send('DELETE request to homepage');
//		});
	
};