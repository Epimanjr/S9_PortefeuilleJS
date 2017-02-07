angular.module("shop.search").controller('SearchController',
        [
            '$scope', '$http', 'Product', function ($scope, $http, Product) {
                $http.get('localhost:3000/stocks').then(function (response) {
                    $scope.actions = [];
                    response.data.actions.forEach(function (data) {
                        var newAction = new Action(data);
                        $scope.actions.push(newAction);
                    });
                }, function (error) {
                    console.log(error);
                });
            }
        ]);