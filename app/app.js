'use strict';

/**
 * @ngdoc overview
 * @name carefulHarmonicaApp
 * @description
 * # carefulHarmonicaApp
 *
 * Main module of the application.
 */
var app = angular
  .module('carefulHarmonicaApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngTouch',
    'ui.router',

    'app.dashboard'
  ]);

// ********************** Route Definitions **********************
app.config(function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/');

  $stateProvider

    // ********************** Dashboard **********************
    .state('dashboard', {
      url: '/',
      views: {
        '': {
          templateUrl: 'dashboard/dashboard.html',
          controller: 'DashboardCtrl'
        },
        'tasks@dashboard': {
          templateUrl: 'dashboard/tasks.html',
          controller: 'DashboardCtrl'
        },
        'score@dashboard': {
          templateUrl: 'dashboard/score.html',
          controller: 'DashboardCtrl'
        },
        'analytics@dashboard': {
          templateUrl: 'dashboard/analytics.html',
          controller: 'DashboardCtrl'
        },
        'achievements@dashboard': {
          templateUrl: 'dashboard/achievements.html',
          controller: 'DashboardCtrl'
        },
        'social@dashboard': {
          templateUrl: 'dashboard/social.html',
          controller: 'DashboardCtrl'
        }
      }
    })

    // ********************** User Profile **********************
    .state('profile', {
      url: '/profile',
      views: {
        '': {
          templateUrl: 'profile/profile.html',
          controller: 'ProfileCtrl'
        }
      }
    })

    // ********************** Job Page **********************
    .state('job', {
      url: '/job',
      views: {
        '': {
          templateUrl: 'employer/employer.html',
          controller: 'EmployerCtrl'
        }
      }
    })

    // ********************** Authentication **********************
    .state('signup', {
      url: '/signup',
      views: {
        '': {
          templateUrl: 'auth/signup.html',
          controller: 'AuthCtrl'
        }
      }
    })

    .state('signin', {
      url: '/signin',
      views: {
        '': {
          templateUrl: 'auth/signin.html',
          controller: 'AuthCtrl'
        }
      }
    })

    // ********************** Onboarding **********************
    .state('onboard', {
      url: '/onboard',
      views: {
        '': {
          templateUrl: 'onboard/onboard.html',
          controller: 'OnboardCtrl'
        },
        'dream': {
          templateUrl: 'onboard/dream.html',
          controller: 'OnboardCtrl'
        },
        'upload': {
          templateUrl: 'onboard/upload.html',
          controller: 'OnboardCtrl'
        },
        'goal': {
          templateUrl: 'onboard/goal.html',
          controller: 'OnboardCtrl'
        },
        'install': {
          templateUrl: 'onboard/install.html',
          controller: 'OnboardCtrl'
        }
      }
    });
});
