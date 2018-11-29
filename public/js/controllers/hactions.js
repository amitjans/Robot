movies.controller('hactions', ['$scope', '$http', function ($scope, $http) {
  $scope.listado = [];

  $scope.list = function () {
    $http.get('http://localhost:2000/robot/actions/').then(function successCallback(response) {
        $scope.listado = response.data;
        console.log(response.data);
    }, function errorCallback(response) {
    });
  }
  $scope.list();
}]);