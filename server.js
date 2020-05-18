const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const port = process.env.PORT || 5001;

app.use(bodyParser.json());
app.use(cors());
app.use(
    bodyParser.urlencoded({ extended: false })
);

let Users = require("./routes/Users");
let Admins = require("./routes/Admins");

app.use("/users", Users);
app.use("/admins", Admins);

app.listen(port, function() {
    console.log("Server is running on port " + port)
});

