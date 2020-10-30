var express = require ('express');
var path = require ('path');

const port = 8123;
var app = express();


app.use(express.static(path.join(__dirname, "public")));

app.get("/", function (req,res) {
    res
        .status(200)
        .sendFile(path.join(__dirname, "public", "index.html"));
});

app.listen(port, function() {
    console.log ("server is listening at " + port)
});
