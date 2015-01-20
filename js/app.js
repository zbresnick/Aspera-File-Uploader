var app = angular.module('app', []);

app.controller('MainCtrl', function($scope, aspera) {

  $scope.name = 'World';
  $scope.logo = "http://www.bikepeddler.com/blog/wp-content/uploads/2011/06/logo_red_S_PC.jpg";
  $scope.selectedFiles = ["fileA", "fileB"];
  $scope.completedFiles = ["file1", "file2"];
  $scope.test = "";

  $scope.removeFile = function(index) {
    $scope.selectedFiles.splice(index, 1);
  };

  $scope.selectFiles = function() {
    var text = prompt("enter text","");
    $scope.selectedFiles.push(text);
  }

});