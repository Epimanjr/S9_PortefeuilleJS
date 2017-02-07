angular.module("shop").factory(
[
    function() {
        var Action = function(data) {
            this.name = data.name;
            this.description = data.description;
            this.price = data.price;
        }
        
        Action.prototype.buy = function() {
            console.log("lapin");
        }
        
        return Action;
    }
]);
