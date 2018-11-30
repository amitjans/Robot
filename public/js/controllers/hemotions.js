movies.controller('hemotions', ['$scope', '$http', function ($scope, $http) {
  $scope.listado = [];
  
  $scope.list = function () {
    $http.get('http://localhost:2000/robot/emotions/').then(function successCallback(response) {
        $scope.listado = response.data;
    }, function errorCallback(response) {
    });
  }

  $scope.list();
}]);