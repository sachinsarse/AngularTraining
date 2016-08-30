angular.module('mainApp').controller('moviesController', function (movieService, $location,$cacheFactory, $timeout) {
    var vm = this;
    vm.gridItems = [];
    vm.searchInput = '';
    vm.label = "List of Movies";

    vm.getMovies = function () {
        movieService.getMovies().then(function (response) {
            if (response.status === 200)
                vm.gridItems = response.data;
        }, function (error) { 
            console.log('error', error);          
        });
    };
    vm.getMovies();

    vm.deleteMovie = function (item) {
        movieService.deleteMovie(item.id).then(function (response) {
            if (response.status === 200) {
                vm.gridItems = response.data;
            }
        }, function (error) {
            console.log('error', error);
        });
    };
});
