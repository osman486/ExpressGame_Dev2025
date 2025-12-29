var mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/game_dev2025");

var User = require("./models/user").User


var first_user = new User({
   username: "Vasya",
   password: "qwerty"
})

first_user.save();