angular.module("shop").controller('ActionsController',
        [
            '$scope', '$http', 'Product', function ($scope, $http, Product) {
                $http.get('url').then(function (response) {
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