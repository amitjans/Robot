movies.controller('eemotions', ['$scope', '$http', function ($scope, $http) {

  $scope.listado = [];
  $scope.line = 1;

  $scope.list = function () {
    $http.get('http://localhost:2000/robot/emotions/types').then(function successCallback(response) {
        $scope.listado = response.data;
    }, function errorCallback(response) {
    });
  }

  $scope.execute = function () {
    $http.post('http://localhost:2000/robot/emotions/types/' + $scope.actions,).then(function successCallback(response) {
      console.log(response.data.message);
      $('#console').append($scope.line + '. ' + response.data.message + '\n');
      $scope.line = $scope.line + 1;
    }, function errorCallback(response) {
    });
  }
  $scope.list();
}]);