angular.module('mainApp').run(function ($httpBackend,$timeout) { 
     var movies = [
        {
            id: 0,
            title: "Game of Thrones",
            year: 2011,
            favorite: true
        },
        {
            id: 1,
            title: 'Walking Dead',
            year: 2010,
            favorite: false
        },
        {
            id: 2,
            title: 'Firefly',
            year: 2002,
            favorite: true
        },
        {
            id: 3,
            title: 'Banshee',
            year: 2013,
            favorite: true
        },
        {
            id: 4,
            title: 'Greys Anatomy',
            year: 2005,
            favorite: false
        }
    ];

     this.search = function (nameKey, movieArray) {
         for (var count = 0; count < movieArray.length; count++) {
             if (movieArray[count].id === parseInt(nameKey)) {
                 return movieArray[count];
             }
         }
     }; 

    $httpBackend.whenGET('api/controller/getMovies').respond(function (method, url, data) {
         return [200, movies, {}];
        // return [300, {}];
    });

    $httpBackend.whenPOST('api/controller/getMovieById').respond(function (method, url, data) {
        var movie = search(angular.fromJson(data).id, movies);
        return [200, movie, {}];
        // return [300, {}];
    });

    $httpBackend.whenPOST('api/controller/addMovie').respond(function (method, url, data, headers) {   
        var movie = angular.fromJson(data);
        movie.id = movies.length;
        movies.push(movie);
        return [200, {}, {}];
    });

    $httpBackend.whenPOST('api/controller/updateMovie').respond(function (method, url, data, headers) {
        var rec = angular.fromJson(data);
        var movie = search(rec.id, movies);
        movie.title = rec.title;
        movie.year = rec.year;
        movie.favorite = rec.favorite;
        return [200, movie, {}];
    });

    $httpBackend.whenPOST('api/controller/deleteMovie').respond(function (method, url, data, headers) {
        var count = 0;
        var movie = angular.fromJson(data)
        movies.forEach(function (element) {
            if (element.id === movie.id) {
                movies.splice(count, 1);
            }
            count = ++count;
        }, this);
        return [200, movies, {}];
    });

    $httpBackend.whenGET(/\.html$/).passThrough();
});