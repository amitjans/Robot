movies.controller('actions', ['$scope', '$http', function ($scope, $http) {
  $scope.listado = [];
  $scope.accion = 'Agregar';
  $scope.icon = true;
  $scope.updateid;

  $scope.list = function () {
    $http.get('http://localhost:2000/robot/actions/types').then(function successCallback(response) {
        $scope.listado = response.data;
        console.log(response.data);
    }, function errorCallback(response) {
    });
  }

  $scope.create = function () {
    $http.post('http://localhost:2000/robot/actions/types', '{ "name": "' + $scope.name + '", "command": "' + $scope.command + '" }').then(function successCallback(response) {
      $scope.name = '';
      $scope.command = '';
      $scope.list();
    }, function errorCallback(response) {
    });
  }

  $scope.update = function (l) {
    $scope.name = l.name;
    $scope.command = l.command;
    $scope.updateid = l._id;
    $scope.icon = false;
    $scope.accion = 'Editar';
    up();
  }

  $scope.updatesend = function () {
    $http.put('http://localhost:2000/robot/actions/types/' + $scope.updateid, '{ "name": "' + $scope.name + '", "command": "' + $scope.command + '" }').then(function successCallback(response) {
      $scope.updateid = '';
      $scope.accion = 'Agregar';
      $scope.icon = true;
      $scope.name = '';
      $scope.command = '';
      $scope.list();
    }, function errorCallback(response) {
    });
  }

  $scope.delete = function (id) {
    $http.delete('http://localhost:2000/robot/actions/types/' + id).then(function successCallback(response) {
      notify(response.data.mensaje);
      $scope.list();
      up();
    }, function errorCallback(response) {
      notify(response.data.mensaje);
    });;
  }

  $scope.list();
}]);