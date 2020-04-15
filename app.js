var express = require ("express"),
    port = process.env.PORT || 5000,
    methodOverride = require("method-override"),
    cookieParser        = require("cookie-parser"),
    flash      = require("connect-flash"),
    bodyParser = require("body-parser");

app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + "/public"));
app.set("view engine", "ejs");


app.get("/", function(req, res) {
    
    res.render("index")
});



app.listen(port, function(){
    console.log("server just started")
});