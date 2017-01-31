angular.module("shop").directive('product',
        [
            function () {
                return {
                    restrict: 'E',
                    templateUrl: 'template/action.html',
                    link: function (scope, element, attrs) {
                        scope.buy = function () {
                            scope.product.buy();
                        }
                    }
                };
            }
        ]);