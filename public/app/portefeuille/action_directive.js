angular.module("shop.portefeuille").directive('action', [
    function () {
        return {
            restrict: 'A',
            replace: true,
            templateUrl: 'app/portefeuille/action.html',
            link: function (scope, element, attrs) {
                scope.vendre = function () {
                    scope.action.vendre();
                }
            }

        };
    }
]);