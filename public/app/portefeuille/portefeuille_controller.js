angular.module('shop.portefeuille').controller('PortefeuilleController', ['$scope', '$http', function ($scope, $http) {

    $scope.$on('updateStocks', updateStocks);

    function updateStocks(event, value) {
        console.log("Mise à jour du portefeuille");
        $http.get('http://localhost:3000/stocks')
            .then(function (response) {
                $scope.actions = [];
                console.log(response.data);
                response.data.forEach(function (data) {
                    var newStock = {
                        "name": data.name,
                        "description": data.description,
                        "price": data.price
                    }
                    console.log(newStock);
                    $scope.actions.push(newStock);
                });
            }, function (error) {
                console.log(error);
            });
    }

    updateStocks();

}]);