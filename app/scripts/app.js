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
    'ui.router'
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
          templateUrl: 'app/dashboard/dashboard.html',
          controller: 'DashboardCtrl'
        },
        'tasks': {
          templateUrl: 'app/dashboard/tasks.html',
          controller: 'DashboardCtrl'
        },
        'score': {
          templateUrl: 'app/dashboard/score.html',
          controller: 'DashboardCtrl'
        },
        'analytics': {
          templateUrl: 'app/dashboard/analytics.html',
          controller: 'DashboardCtrl'
        },
        'achievements': {
          templateUrl: 'app/dashboard/achievements.html',
          controller: 'DashboardCtrl'
        },
        'social': {
          templateUrl: 'app/dashboard/social.html',
          controller: 'DashboardCtrl'
        }
      }
    })

    // ********************** User Profile **********************
    .state('profile', {
      url: '/profile',
      views: {
        '': {
          templateUrl: 'app/profile/profile.html',
          controller: 'ProfileCtrl'
        }
      }
    })

    // ********************** Job Page **********************
    .state('job', {
      url: '/job',
      views: {
        '': {
          templateUrl: 'app/job/job.html',
          controller: 'ProfileCtrl'
        }
      }
    })

    // ********************** Authentication **********************
    .state('signup', {
      url: '/signup',
      views: {
        '': {
          templateUrl: 'app/auth/signup.html',
          controller: 'AuthCtrl'
        }
      }
    })

    .state('signin', {
      url: '/signin',
      views: {
        '': {
          templateUrl: 'app/auth/signin.html',
          controller: 'AuthCtrl'
        }
      }
    })

    // ********************** Onboarding **********************
    .state('onboard', {
      url: '/onboard',
      views: {
        '': {
          templateUrl: 'app/onboard/onboard.html',
          controller: 'OnboardCtrl'
        },
        'dream': {
          templateUrl: 'app/onboard/dream.html',
          controller: 'OnboardCtrl'
        },
        'upload': {
          templateUrl: 'app/onboard/upload.html',
          controller: 'OnboardCtrl'
        },
        'goal': {
          templateUrl: 'app/onboard/goal.html',
          controller: 'OnboardCtrl'
        },
        'install': {
          templateUrl: 'app/onboardinstall.html',
          controller: 'OnboardCtrl'
        }
      }
    });
});
