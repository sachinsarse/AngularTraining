angular.module('mainApp').directive('showLabel', function () {
    return {
        restrict: 'E',  
        scope:{
            label: '@'
        },    
        templateUrl: 'src/directive/showLabel/showLabel.html'      
    };    
});