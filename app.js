const express = require("express");
const app = express();
const exphbs = require("express-handlebars");
const Score_keeper = require("./function/score-keeper");
const PORT = process.env.PORT || 5000;

let instance = Score_keeper();
app.use(express.static("public"));
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const handlebarSetup = exphbs({
  partialsDir: "./views/partials",
  viewPath: "./views",
  layoutsDir: "./views/layouts"
});

app.engine("handlebars", handlebarSetup);
app.set("view engine", "handlebars");

app.get("/", function(req, res) {
  res.render("index", {
    score: instance.getTotal(),
    overs: instance.displayOver(),
    wickets: instance.displayWickets()
  });
});

app.post("/current_score", function(req, res) {
  instance.addScore(req.body.score);
  res.redirect("/");
});
app.listen(PORT, function() {
  console.log("App started at port:", PORT);
});
