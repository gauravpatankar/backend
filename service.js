var express = require('express');
var cors = require('cors');
var mysql = require('mysql')
var bodyparser = require('body-parser');
const { json } = require('body-parser');
var app = express();


app.use(cors());
app.use(bodyparser.json());

var sql = mysql.createConnection({ host: "localhost", user: "root", password: "root", database: "dashboard" });

app.get("/data", function(request, response) {

    sql.query("SELECT criminalcomplains FROM socialsecurity", (err, res) => {
        if (err) {
            console.log("error: ", err);
            return;
        }
        response.end(JSON.stringify(res));

    });

});

app.listen(9898);