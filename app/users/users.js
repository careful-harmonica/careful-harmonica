(function() {
  'use strict';
  angular
  .module('app.users', ['app.dictionary', 'firebase'])
  .controller('UsersCtrl', UsersCtrl);

  UsersCtrl.$inject = ['$scope', 'Data', 'Dictionary', '$firebaseObject'];

  function UsersCtrl($scope, Data, Dictionary, $firebaseObject) {
    var refURL = 'https://careful-harmonica.firebaseio.com/';
    var ref = new Firebase(refURL);
    var getUsers = $firebaseObject(ref);
    getUsers.$bindTo($scope, 'users');

    $scope.init = function() {
      $scope.scores = [];

      angular.forEach($scope.users.users, function(user) {
        if (user && typeof user === 'object') {
          var rank = Dictionary.getRank(user.score);
          user.rank = rank;
          $scope.scores.push(user);
        }
      });
    };

    getUsers.$loaded().then(function() {
      $scope.init();
      getUsers.$watch(function() {
        $scope.init();
      });
    });

  }
})();
