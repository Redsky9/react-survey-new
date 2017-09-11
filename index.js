var express = require("express");
var mongoose = require("mongoose");
var cookieSession = require("cookie-session");
var passport = require("passport");
var keys = require("./config/keys");
require("./models/User");
require("./services/passport");

var app = express();

app.use(cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
}));
app.use(passport.initialize());
app.use(passport.session());

mongoose.connect(keys.mongoURI);

require("./routes/authRoutes")(app);

var PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log("Server has started on port " + PORT);
});