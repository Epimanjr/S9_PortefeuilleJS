angular.module("shop.recap").directive('recap',
        [
            function () {
                return {
                    restrict: 'E',
                    templateUrl: 'app/recap/recap.html'
                };
            }
        ]);