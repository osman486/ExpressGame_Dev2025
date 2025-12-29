const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/testMongoose2025");
var Game_Dev = require("./models/game_dev.js").Game_Dev;

var game_dev = new Game_Dev({
  title: "AAA (Тройное А) геймдев",
  nick: "aaa",

});
game_dev.save();
