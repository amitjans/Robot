movies.controller('emotions', ['$scope', '$http', function ($scope, $http) {
  $scope.listado = [];
  $scope.listactions = [];
  $scope.accion = 'Agregar';
  $scope.icon = true;
  $scope.updateid;

  $scope.list = function () {
    $http.get('http://localhost:2000/robot/emotions/types/').then(function successCallback(response) {
        $scope.listado = response.data;
    }, function errorCallback(response) {
    });
  }

  $scope.listcommnad = function () {
    $http.get('http://localhost:2000/robot/actions/types/').then(function successCallback(response) {
        $scope.listactions = response.data;
    }, function errorCallback(response) {
    });
  }

  function convert() {
    var json = '{ "name": "' + $scope.name + '", "command": "' + $scope.command + '", "actions": [';
    $scope.actions.forEach(element => { json += '"'+ element +'",'; });
    return json.substr(0, json.length - 1)+ '] }';
  }

  $scope.create = function () {
     
    $http.post('http://localhost:2000/robot/emotions/types/', convert()).then(function successCallback(response) {
      $scope.name = '';
      $scope.commnad = '';
      $scope.actions = '';
      $scope.list();
    }, function errorCallback(response) {
    });
  }

  $scope.update = function (l) {
    $scope.name = l.name;
    $scope.command = l.command;
    $scope.actions = l.actions;
    $scope.updateid = l._id;
    $scope.icon = false;
    $scope.accion = 'Editar';
    up();
  }

  $scope.updatesend = function () {
    $http.put('http://localhost:2000/robot/emotions/types/' + $scope.updateid, convert()).then(function successCallback(response) {
      $scope.updateid = '';
      $scope.accion = 'Agregar';
      $scope.icon = true;
      $scope.name = '';
      $scope.command = '';
      $scope.actions = '';
      $scope.list();
    }, function errorCallback(response) {
    });
  }

  $scope.delete = function (id) {
    $http.delete('http://localhost:2000/robot/emotions/types/' + id).then(function successCallback(response) {
      notify(response.data.mensaje);
      $scope.list();
      up();
    }, function errorCallback(response) {
      notify(response.data.mensaje);
    });;
  }

  $scope.list();
  $scope.listcommnad();
}]);