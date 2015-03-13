(function() {
  'use strict';

  angular.module('app.dashboard', [])
    .controller('DashboardCtrl', ['$scope', function($scope) {
        $scope.tasks = {};
        $scope.achievements = {};
    }]);



})();
