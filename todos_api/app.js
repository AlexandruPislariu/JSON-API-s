const bodyParser = require("body-parser");
require('dotenv').config();
const   express     = require("express");
        app         = express();
        todoRoutes  = require("./routes/todos");

// support parsing of application/json type post data
app.use(bodyParser.json());

//support parsing of application/x-www-form-urlencoded post data
app.use(bodyParser.urlencoded({ extended: true }));

// tell express where to find my files
app.use(express.static(__dirname + "/views"));
app.use(express.static(__dirname + "/public"));

app.get("/", (req, res) =>
{
    res.sendFile("views/index.html");
});

app.use("/api/todos", todoRoutes);
app.listen(process.env.PORT, () =>
{
    console.log(process.env.PORT);
});