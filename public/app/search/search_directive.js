angular.module("shop.search").directive('search',
        [
            function () {
                return {
                    restrict: 'E',
                    templateUrl: 'app/search/search.html',
                    link: function (scope, element, attrs) {
                        scope.buy = function () {
                            scope.product.buy();
                        }
                    }
                };
            }
        ]);