var movies = angular.module('robot', ['ngRoute']);
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
        when('/actions/logs', {
            templateUrl: '/plantillas/hactions/index.html',
        }).
        when('/emotions/logs', {
            templateUrl: '/plantillas/hemotions/index.html',
        }).
        when('/emotions', {
            templateUrl: '/plantillas/emotions/index.html',
        }).
        when('/eemotions', {
            templateUrl: '/plantillas/eemotions/index.html',
        }).
        when('/eactions', {
            templateUrl: '/plantillas/eactions/index.html'
        }).
        otherwise('/inicio');
    }
]);