var express = require("express");
var router = express.Router();
var Game_Dev = require("../models/game_dev.js").Game_Dev;
var checkAuth = require("../middlewares/checkAuth.js");
/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("Новый маршрутизатор, для маршрутов, начинающихся с game_devs");
});

router.get("/:nick", checkAuth , async function(req, res, next) {
  var game_devs = await Game_Dev.find({ nick: req.params.nick });

  console.log(game_devs);

  if (!game_devs.length)
    return  res.send("Нет такого вида гейм дева");

  var game_dev = game_devs[0];

  res.render("game_dev", {
    title: game_dev.title,
    picture: game_dev.avatar,
    desc: game_dev.desc,
  });
});

module.exports = router;
