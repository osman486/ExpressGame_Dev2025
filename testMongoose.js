const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/testMongoose2024');

var schema = mongoose.Schema({ name: String })
schema.methods.game = function(){

   console.log(this.name + " это высококачественная игра")

}
const Game_Dev = mongoose.model('Game_Dev', schema);

const game = new Game_Dev({ name: 'aaa' });

game.save().then(() => game.game());