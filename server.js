var express = require('express');
var app = express();

var request = require("request")

var bodyParser = require('body-parser');
app.use(bodyParser.json());

var mongoose = require('mongoose');
var db = mongoose.connect('mongodb://localhost/server');

var Schema = mongoose.Schema;
var StockSchema = new Schema({
    name: String,
    symbol: String,
    price: Number
});
var Stock = mongoose.model('Stock', StockSchema);

app.use(express.static(__dirname + "/public"));
app.use('/bower_components', express.static(__dirname + '/bower_components'));

app.route('/search/:symbol').get(function (req, res, next) {
    // Récupération du paramètre
    var symbol = req.params.symbol;

    // Construction de l'URL pour contacter l'API
    var query = encodeURIComponent('select * from yahoo.finance.quotes where symbol = "' + symbol + '"');
    var url = "https://query.yahooapis.com/v1/public/yql?q=env%20'store%3A%2F%2Fdatatables.org%2Falltableswithkeys'%3B%20" + query + "&format=json";

    // Contact l'API
    request({
        url: url,
        json: true
    }, function (error, response, body) {
        if (!error && response.statusCode === 200) {
            // console.log(body) // Print the json response
            res.json(body);
        }
    })
});

app.route('/stocks').get(function (req, res, next) {
    Stock.find({}, function (err, stocks) {
        if (err) {
            return next(err);
        } else {
            res.json(stocks);
        }
    })
})
        .post(function (req, res, next) {
            var stock = new Stock(req.body);
            stock.save(function (err) {
                if (err) {
                    return next(err);
                } else {
                    res.json(stock);
                }
            })
        });

app.listen(3000);
console.log('Server is running;...');