var express 	= require('express'),
	app 		= express(),
	bodyParser 	= require('body-parser')

  app.set("view engine", "ejs");
  app.use(express.static("public"));
  app.use(bodyParser.urlencoded({extended: true}));
  // app.use(expressSanitizer()); //has to be after bodyparser
//   app.use(methodOverride("_method"));

  app.get("/", function(req, res){
  	res.render("index1");
  });



  app.get("/ownhyd", function(req, res){
    res.render("ownhyd");
  });
  app.get("/ownvij", function(req, res){
  	res.render("ownvij");
  });
  app.get("/ownvizag", function(req, res){
  	res.render("ownvizag");
  });


  app.get("/hyd", function(req, res){
  	res.render("hyd");
  });
  app.get("/vij", function(req, res){
  	res.render("vij");
  });
  app.get("/vizag", function(req, res){
    res.render("vizag");
  });


app.get("/contactus", function(req, res){
  res.render("contactus");
});
  // for localhost ports
   var port = process.env.port || 3000;
  app.listen(port);
                                                                  //app.listen("8000", function(){
  console.log("Running on server 3000");
                                                                                 //});
