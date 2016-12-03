/**
 * http://usejsdoc.org/
 */
var express = require("express");
var mongos = require("mongoose");
var todocontroller = require("./controllers/todocontroller");
var app = express();
// connect to db
// setup template
//mongos.connect('mongodb://user1:user1@ds050879.mlab.com:50879/todo');
//var todoSchema = new mongos.Schema({
//	item : String
//});
//var Todo = mongos.model("Todo", todoSchema);
//var itemOne = Todo({
//	item : "get Flowers"
//}).save(function(err) {
//	if (err) {
//		throw err;
//	}
//});
app.set('view engine', 'ejs');
app.use(express.static("./public"));
// app.use("/assets",express.static("./public/assets"));
// fire the controller
todocontroller(app);

app.listen(3000);