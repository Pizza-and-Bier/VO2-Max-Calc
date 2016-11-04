(function () {
   
   angular.module("vo2-max.vo2-calc")
       .directive("vo2Calc", vo2Calc);
    
    function vo2Calc() {
        return {
            templateUrl: "js/vo2-calc/vo2-calc.html",
            restrict: "E",
            scope: {},
            controller: "Vo2CalcController",
            controllerAs: "vo2Ctrl",
            bindToController: true
        }
    }
    
})();