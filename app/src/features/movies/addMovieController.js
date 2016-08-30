angular.module('mainApp').controller('addMovieController', function(movieService, $location, $filter) {
    var vm = this; 
    vm.label = "Add Movies";      
    vm.addShow = function (form, show) {
        form.submitted = true;
        if (form.$valid) {
            movieService.addMovie(show).then(function (response) {
                if (response.status === 200) {
                    vm.newshow = {};
                    $location.path('/Movies');
                }
            }, function (error) {
                console.log('error', error);
            });
        }
    };
});