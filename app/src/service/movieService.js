angular.module('mainApp').service('movieService', function ($q, $http) {

   // *** Using $q *** //

    // this.movies = [
    //     {
    //         id: 0,
    //         title: "Game of Thrones",
    //         year: 2011,
    //         favorite: true
    //     },
    //     {
    //         id: 1,
    //         title: 'Walking Dead',
    //         year: 2010,
    //         favorite: false
    //     },
    //     {
    //         id: 2,
    //         title: 'Firefly',
    //         year: 2002,
    //         favorite: true
    //     },
    //     {
    //         id: 3,
    //         title: 'Banshee',
    //         year: 2013,
    //         favorite: true
    //     },
    //     {
    //         id: 4,
    //         title: 'Greys Anatomy',
    //         year: 2005,
    //         favorite: false
    //     }
    // ];
    // this.search =  function (nameKey, myArray) {
    //     for (var i = 0; i < myArray.length; i++) {
    //         if (myArray[i].id ===parseInt(nameKey) ) {
    //             return myArray[i];
    //         }
    //     }
    // };

    // this.getMovieById = function(id) {
    //     var deferral = $q.defer();
    //     var rec = this.search(id, this.movies);
    //     deferral.resolve(rec);
    //     return deferral.promise;
    // };
    // this.addMovie = function (movie) {
    //     var deferral = $q.defer();
    //     movie.id = this.movies.length;
    //     deferral.resolve(this.movies.push(movie));
    //     return deferral.promise;
    // };
    // this.getMovies = function () {
    //     var deferral = $q.defer();
    //     deferral.resolve(this.movies);
    //     return deferral.promise;
    // };
    // this.deleteRecord = function (id) {
    //     var i = 0;
    //     this.movies.forEach(function (element) {         
    //         if (element.id === id) {
    //             this.movies.splice(i, 1);
    //         }
    //         i = ++i;
    //     }, this);
    //     return this.movies;
    // };
    // this.deleteMovie =function (id){
    //      var deferral = $q.defer();
    //     deferral.resolve(this.deleteRecord(id));
    //     return deferral.promise;
    // };

    // this.updateMovie = function (show){
    //     var deferral = $q.defer();
    //     var rec = this.search(show.id,this.movies);
    //     rec.title = show.title;
    //     rec.year = show.year;
    //     rec.favorite = show.favorite;
    //     deferral.resolve(rec);
    //     return deferral.promise;
    // };

    // *** Using $http *** //

    this.getMovies = function () {
        return $http.get('api/controller/getMovies').then(
            function (response) {
                return response;
            },
            function (error) {
                return $q.reject(error);
            }
        );
    }

    this.getMovieById = function (id) {
        var data = {
            id: id
        };
        return $http.post('api/controller/getMovieById', data).then(
            function (response) {
                return response;
            },
            function (error) {
                return $q.reject(error);
            }
        );
    }

    this.addMovie = function (movie) {
        return $http.post('api/controller/addMovie', movie).then(
            function (response) {
                return response;
            },
            function (error) {
                return $q.reject(error);
            }
        );
    };

    this.updateMovie = function (movie) {
        return $http.post('api/controller/updateMovie', movie).then(
            function (response) {
                return response;
            },
            function (error) {
                return $q.reject(error);
            }
        );
    };

    this.deleteMovie = function (id) {
        return $http.post('api/controller/deleteMovie', { id: id }).then(
            function (response) {
                return response;
            },
            function (error) {
                return $q.reject(error);
            }
        );
    };
});