(function() {
  'use strict';

  angular.module('app.dashboard', [])
    .controller('DashboardCtrl', ['$scope', 'Data', function($scope, Data) {
      $scope.user = {};

      $scope.signup = function() {
        Data.signup($scope.user.email, $scope.user.password);
      };

      $scope.signin = function() {
        Data.signin($scope.user.email, $scope.user.password, function() {
          $scope.employers = Data.getEmployers($scope);
        });
      };

      $scope.tasks = Data.getTasks('current');
      $scope.achievements = Data.getTasks('completed');
      var sync = Data.checkAuth(function() {
        console.log('no login detected');
      }, $scope);
      $scope.employers = sync.employers;
      // Data.getEmployers($scope);
    }]);

})();
