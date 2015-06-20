(function() {
  'use strict';

  angular.module('app.auth', ['app.dictionary', 'app.employers', 'firebase'])
    .factory('Auth', function(Dictionary, Employers, $state, $firebaseObject, Data, $rootScope) {
      var refURL = 'https://careful-harmonica.firebaseio.com/';
      var ref = new Firebase(refURL);
      var userID = null;

      var OAuthSignin = function() {
        ref.authWithOAuthPopup('github', function(error, authData) {
          if (error) {
            console.log('Login Failed!', error);
          } else {
            console.log('Authenticated successfully with payload:', authData);
            ref.once('value', function(snapshot) {
              var isNew = !snapshot.child('users').child(authData.uid).exists();
              console.log(isNew);
              if (isNew) {
                  var profile = authData.github;
                  var newUser = {
                    name: profile.displayName ? profile.displayName : 'falsey',
                    email: profile.email ? profile.email : 'falsey',
                    repos: profile.cachedUserProfile.public_repos ? profile.cachedUserProfile.public_repos : 'falsey',
                    followers: profile.cachedUserProfile.followers,
                    signupDate: Firebase.ServerValue.TIMESTAMP,
                    lastLogin: Firebase.ServerValue.TIMESTAMP,
                    score: 0,
                    employers: Employers.data
                  };
                ref.child('users').child(authData.uid).set(newUser);
                $state.go('onboard.dream');
              } else {
                $state.go('dashboard');
                ref.child('users').child(authData.uid).update({
                  lastLogin: Firebase.ServerValue.TIMESTAMP
                });
              }
            });
          }
        });
      };

      var logout = function() {
        $state.go('land');
        $rootScope.isAuth = false;
        ref.unauth();
      };

      var checkAuth = function(cb, $scope) {
        var sync = {};

        ref.onAuth(function(authData) {
          if (authData === null) {
            cb();
          } else {
            userID = authData.uid;
            if ($scope) {
              sync.employers = Data.getEmployers($scope);
            }
          }
        });

        return sync;
      };

      return {
        OAuthSignin: OAuthSignin,
        logout: logout,
        checkAuth: checkAuth
      };
  });
})();
