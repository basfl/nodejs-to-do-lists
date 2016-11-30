/**
 * http://usejsdoc.org/
 */
var express=require("express");
var todocontroller=require("./controllers/todocontroller");
var app=express();
//setup template
app.set('view engine', 'ejs');
app.use(express.static("./public"));
//app.use("/assets",express.static("./public/assets"));
// fire the controller
todocontroller(app);



app.listen(3000);