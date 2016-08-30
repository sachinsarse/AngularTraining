var sampleApp = angular.module('mainApp', ['ngRoute','ngMockE2E']);

sampleApp.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
           when('/Home', {
                templateUrl: 'src/features/home/home.html'               
            }).
            when('/Movies', {
                templateUrl: 'src/features/movies/movies.html',
                controller: 'moviesController',
                controllerAs: 'routeVM',
            }).
            when('/AddNewMovie', {
                templateUrl: 'src/features/movies/addEditMovie.html',
                controller: 'addMovieController',
                controllerAs: 'routeVM',
            }).
             when('/EditMovie/:id', {
                templateUrl: 'src/features/movies/addEditMovie.html',
                controller: 'editMovieController',
                controllerAs: 'routeVM',
            }).
            otherwise({
                redirectTo: '/Home'
            });
    }]);