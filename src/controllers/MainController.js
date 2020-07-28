// Code goes here
(function () {

    var app = angular.module("benson", ['ngSanitize']);

    var MainController = function ($scope, wpjson) {

      var onDataComplete = function(data){
        if(window.location.href.includes('online-courses')) {
          console.log(data)
        }
        $scope.data = data;
      }

      var onError = function (response) {
        $scope.error = 'Could not fetch data because "' + response + '"';
      };

      wpjson.getData().then(onDataComplete, onError);

    };

    app.controller("MainController", ["$scope", "wpjson", MainController]);

}());