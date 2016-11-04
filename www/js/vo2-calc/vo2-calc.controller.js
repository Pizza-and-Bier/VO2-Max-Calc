(function () {
    angular.module("vo2-max.vo2-calc")
        .controller("Vo2CalcController", Vo2CalcController);
    
    function Vo2CalcController() {
        var self = this;
        
        var max_hr = 220;
        
        self.calculate = function() {
            return max(self.speed1, self.speed2, self.grade, self.age, self.hr1, self.hr2);
        };
        
        function vo2_predict (speed, grade) {
            return (0.1 * speed) + (1.8 * grade * speed) + 3.5;
        }
        
        function max (speed_1, speed_2, grade, age, hr_1, hr_2) {
            
            var vo_1 = vo2_predict(speed_1, grade),
                vo_2 = vo2_predict(speed_2, grade),
                top = (220 - age) * (vo_2 - vo_1) + (hr_2 * vo_1) - (hr_1 * vo_2),
                bottom = hr_2 - hr_1;
            
            return (top / bottom).toFixed(5);
        }
    }
})();