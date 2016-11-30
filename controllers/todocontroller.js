/**
 * http://usejsdoc.org/
 */
var bodyParser=require("body-parser");
var urlencodedParser = bodyParser.urlencoded({ extended: false })
module.exports=function(app){
  var data=[{item:"get milk"},{item:"get bread"},{item:"get butter"}];
	app.get("/todo",function(req,res){
		console.log("inside"+req.url);
	//	res.render("todo");
		res.render("todo",{todos:data});
	});
	app.post("/todo",urlencodedParser, function (req, res) {
		console.log("post"+req.body);
		data.push(req.body);
	//	res.json(data);
		res.render("todo",{todos:data});
	//	res.JSON(data);
		
		
	});
//	app.delete('/todo', function (req, res) {
//		  res.send('DELETE request to homepage');
//		});
	
};