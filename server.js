const express = require('express');
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 8080;
const passport = require("passport");
const users = require("./routes/api/users");
const posts = require("./routes/api/posts");
const cors = require('cors');

const app = express();

app.use(cors());

// Bodyparser middleware
app.use(
    bodyParser.urlencoded({
      extended: false
    })
);
app.use(bodyParser.json());

// DB Config
const db = require("./config/keys").mongoURI;

// Connect to MongoDB
mongoose
  .connect(
    db,
    { useNewUrlParser: true }
  )
  .then(() => console.log("MongoDB successfully connected"))
  .catch(err => console.log(err)
  );

// Passport middleware
app.use(passport.initialize());
// Passport config
require("./config/passport")(passport);

// Routes
app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.use("/api/users", users);
app.use("/api/post", posts);
 
app.listen(PORT, () => {
    console.log(`Server is running on ${PORT} `)});