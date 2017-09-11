var mongoose = require("mongoose");
var Schema = mongoose.Schema; // var { Schema } = mongoose;

var userSchema = new Schema({
    googleId: String
});

mongoose.model('users', userSchema);