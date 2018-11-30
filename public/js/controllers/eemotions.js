var line = 1;

movies.controller('eemotions', ['$scope', '$http', function ($scope, $http) {

  $scope.listado = [];

  $scope.list = function () {
    $http.get('http://localhost:2000/robot/emotions/types').then(function successCallback(response) {
      $scope.listado = response.data;
      $scope.listado.forEach(element => {
        if (element.command == 'happy' || element.command == 'sad' || element.command == 'angry' || element.command == 'worried') {
          var append = "<span onclick=\"executeemojin('" + element._id + "')\">";
          if (element.command == 'happy') {
            append += "&#x1F600";
          } else if (element.command == 'sad') {
            append += "&#x1F625";
          } else if (element.command == 'angry') {
            append += "&#x1F620";
          } else if (element.command == 'worried') {
            append += "&#x1F61F";
          }
          append += "</span> ";
          $("#emojins").append(append);
        }
      });
    }, function errorCallback(response) {});
  }

  $scope.executeemojin = function (id) {
    $http.post('http://localhost:2000/robot/emotions/types/' + id).then(function successCallback(response) {
      $('#console').append(line + '. ' + response.data.message + '\n');
      line++;
    }, function errorCallback(response) {
    });
  }

  $scope.execute = function () {
    $http.post('http://localhost:2000/robot/emotions/types/' + $scope.actions).then(function successCallback(response) {
      console.log(response.data.message);
      $('#console').append(line + '. ' + response.data.message + '\n');
      line++;
    }, function errorCallback(response) {
    });
  }
  $scope.list();
}]);

function executeemojin (id) {
  console.log(id);
  $.ajax({
    url: 'http://localhost:2000/robot/emotions/types/' + id,
    method: 'POST'
  }).done(function(data) {
    $('#console').append(line + '. ' + data.message + '\n');
    line++;
  });
}