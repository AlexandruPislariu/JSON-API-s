const bodyParser = require("body-parser");
require('dotenv').config();
const   express     = require("express");
        app         = express();

        todoRoutes  = require("./routes/todos");

// support parsing of application/json type post data
app.use(bodyParser.json());

//support parsing of application/x-www-form-urlencoded post data
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api/todos", todoRoutes);
app.listen(process.env.PORT, () =>
{
    console.log(process.env.PORT);
});