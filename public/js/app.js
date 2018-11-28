var movies = angular.module('movies', ['ngRoute']);
movies.config(['$locationProvider', '$routeProvider',
    function config($locationProvider, $routeProvider) {
        $locationProvider.hashPrefix('!');
        $routeProvider.
        when('/inicio', {
            templateUrl: '/plantillas/inicio.html'
        }).
        when('/actions', {
            templateUrl: '/plantillas/actions/index.html',
        }).
        when('/emotions', {
            templateUrl: '/plantillas/emotions/index.html',
        }).
        when('/peliculas', {
            templateUrl: '/plantillas/pelicula/index.html'
        }).
        otherwise('/inicio');
    }
]);