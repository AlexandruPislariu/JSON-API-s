const   mongoose = require("mongoose");

mongoose.connect(process.env.DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('Connected to DB!'))
.catch(error => console.log(error.message));

mongoose.set("debug", true);
mongoose.Promise = Promise;

module.exports.Todo = require("./todo");