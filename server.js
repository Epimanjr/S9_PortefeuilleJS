var express = require('express');
var app = express();

var bodyParser = require('body-parser');
app.use(bodyParser.json());

var mongoose= require('mongoose');
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

app.route('/stocks').get(function(req, res, next) {
    Stock.find({}, function(err, stocks) {
        if(err) {
            return next(err);
        } else {
            res.json(stocks);
        }
    })
})
.post(function(req, res, next) {
    var stock = new Stock(req.body);
    stock.save(function(err) {
        if(err) {
            return next(err);
        } else {
            res.json(stock);
        }
    })
});

app.listen(3000);
console.log('Server is running;...');