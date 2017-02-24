angular.module('shop.portefeuille').controller('PortefeuilleController', ['$scope', '$http', 'Action', function ($scope, $http, Action) {

    $scope.$on('updateStocks', updateStocks);

    function updateStocks(event, value) {
        console.log("Mise à jour du portefeuille");
        $http.get('http://localhost:3000/stocks')
            .then(function (response) {
                $scope.actions = [];
                console.log(response.data);
                response.data.forEach(function (data) {
                    var newStock = new Action(data);
                    newStock.id = data._id;

                    console.log(newStock);
                    $scope.actions.push(newStock);
                });
            }, function (error) {
                console.log(error);
            });
    }

    updateStocks();

}]);