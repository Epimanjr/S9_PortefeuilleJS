angular.module("shop.search").controller('SearchController',
        [
            '$scope', '$http', function ($scope, $http) {
                $scope.search = search;
                
                function search() {
                    $http.get('http://localhost:3000/search/' + $scope.inputsearch).then(function (response) {
                        $scope.actions = [];
                        console.log(response);
                        
                        var action = {
                            "name": response.data.query.results.quote.Symbol,
                            "price": response.data.query.results.quote.PriceSales,
                            "description": response.data.query.results.quote.Name
                        }
                        
                        
                        $scope.buy = function() {
                            console.log("Tu viens d'acheter 1 action " + action.name);
                            $http.post('', action).then(function(response) {
                                console.log("OK, achat sauvegardé");
                            }, function(error) {
                                console.log("Erreur, achat non sauvegardé");
                            });
                        }
                        
                        $scope.action = action;
                    }, function (error) {
                        console.log(error);
                    });
                }
            }
        ]);