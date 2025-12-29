const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/testMongoose2024');

const Game_Dev = mongoose.model('game_dev', { name: String });

var game_devs = new Game_Dev({ name: 'aaa' });
game_devs.save().then(() => console.log('gameeeeeee'));