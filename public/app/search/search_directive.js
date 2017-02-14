angular.module("shop.search").directive('search',
        [
            function () {
                return {
                    restrict: 'E',
                    templateUrl: 'app/search/search.html'
                };
            }
        ]);