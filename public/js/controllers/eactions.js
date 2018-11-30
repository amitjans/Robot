movies.controller('eactions', ['$scope', '$http', function ($scope, $http) {

  $scope.listado = [];
  $scope.line = 1;

  $scope.list = function () {
    $http.get('http://localhost:2000/robot/actions/types').then(function successCallback(response) {
        $scope.listado = response.data;
    }, function errorCallback(response) {
    });
  }

  $scope.execute = function () {
    $http.post('http://localhost:2000/robot/actions/types/' + $scope.actions,).then(function successCallback(response) {
      $('#console').append($scope.line + '. ' + response.data.message + '\n');
      $scope.line = $scope.line + 1;
    }, function errorCallback(response) {
    });
  }
  $scope.list();

  var joysticks = { dynamic: { zone: document.querySelector('.dynamic'), color: 'blue', multitouch: false } };
  var joystick;
  createNipple('dynamic');
  
  function bindNipple () {
    joystick.on('move', function (evt, data) {
        if (!!data.direction) {
          console.log(data.direction.angle + ' ' + data.direction.x + ' ' + data.direction.y);
          console.log(data.direction.angle === data.direction.y);
          if (data.direction.angle === data.direction.y) {
            if (data.direction.y === 'up') {
              $scope.actions = '5bfdea5417657820c0cf8132';              
            }
            if (data.direction.y === 'down') {
              $scope.actions = '5bf47a548882680a25f1444e';
            }
          } else if (data.direction.angle === data.direction.x) {
            if (data.direction.x === 'right') {
              $scope.actions = '5bf20229eb188a35bab8dba0';              
            } if (data.direction.x === 'left') {
              $scope.actions = '5bf2021ceb188a35bab8db9f';
            }
          }            
          $scope.execute();
        }
    });
  }
  
  function createNipple (evt) {
    if (joystick) {
        joystick.destroy();
    }
    joystick = nipplejs.create(joysticks[evt]);
    bindNipple();
  }
}]);