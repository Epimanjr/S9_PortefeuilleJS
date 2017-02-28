angular.module('shop').factory('Action',   
['$rootScope', '$http', function($rootScope, $http) {
        var Action = function(data) {
            this.name = data.name;
            this.description = data.description;
            this.price = data.price;
            this.sellprice = Math.floor((Math.random() * 10) + 1);
        }
        
        /*Action.prototype.buy = function() {
            console.log("lapin");
        }*/

        Action.prototype.vendre = function() {
            console.log("Action de vendre");

            $http.delete('http://localhost:3000/stocks/' + this.id);
            $rootScope.$broadcast('updateStocks');
        }
        
        return Action;
    }
]);
