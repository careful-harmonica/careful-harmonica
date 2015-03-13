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

  $urlRouterProvider.otherwise('/')

  $stateProvider

    // ********************** Dashboard **********************
    .state('dashboard', {
      url: '/',
      views: {
        '': {
          templateUrl: 'app/views/dashboard/dashboard.html',
          controller: 'DashboardCtrl'
        },
        'tasks': {
          templateUrl: 'app/views/dashboard/tasks.html',
          controller: 'TaskCtrl'
        },
        'score': {
          templateUrl: 'app/views/dashboard/score.html',
          controller: 'ScoreCtrl'
        },
        'analytics': {
          templateUrl: 'app/views/dashboard/analytics.html',
          controller: 'AnalyticsCtrl'
        },
        'achievements': {
          templateUrl: 'app/views/dashboard/achievements.html',
          controller: 'AchievementsCtrl'
        },
        'social': {
          templateUrl: 'app/views/dashboard/social.html',
          controller: 'SocialCtrl'
        }
      }
    })

    // ********************** User Profile **********************
    .state('profile', {
      url: '/profile',
      views: {
        '': {
          templateUrl: 'app/views/profile/profile.html',
          controller: 'ProfileCtrl'
        }
      }
    })

    // ********************** Job Page **********************
    .state('job', {
      url: '/job',
      views: {
        '': {
          templateUrl: 'app/views/job/job.html',
          controller: 'ProfileCtrl'
        }
      }
    })

    // ********************** Authentication **********************
    .state('signup', {
      url: '/signup',
      views: {
        '': {
          templateUrl: 'app/views/auth/signup.html',
          controller: 'SignupCtrl'
        }
      }
    })

    .state('signin', {
      url: '/signin',
      views: {
        '': {
          templateUrl: 'app/views/auth/signin.html',
          controller: 'SigninCtrl'
        }
      }
    })

    // ********************** Onboarding **********************
    .state('onboard', {
      url: '/onboard',
      views: {
        '': {
          templateUrl: 'app/views/onboard/onboard.html',
          controller: 'OnboardCtrl'
        },
        'dream': {
          templateUrl: 'app/views/onboard/dream.html',
          controller: 'OnboardCtrl'
        },
        'upload': {
          templateUrl: 'app/views/onboard/upload.html',
          controller: 'OnboardCtrl'
        },
        'goal': {
          templateUrl: 'app/views/onboard/goal.html',
          controller: 'OnboardCtrl'
        },
        'install': {
          templateUrl: 'app/views/onboardinstall.html',
          controller: 'OnboardCtrl'
        }
      }
    })
});
