angular.module('mainApp').controller('editMovieController', function (movieService, $routeParams, $location, $filter) {
    var vm = this;
    vm.label = "Edit Movie";
    vm.id = $routeParams.id;
    vm.newshow = {};
    if (vm.id) {
        movieService.getMovieById(vm.id).then(function (response) {
            if (response.status === 200)
                vm.newshow = response.data;
        });
    }
    vm.updateShow = function (form, show) {
        form.submitted = true;
        if (form.$valid) {
            movieService.updateMovie(show).then(function (response) {
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