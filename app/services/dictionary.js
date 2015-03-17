(function() {
  'use strict';

  angular.module('app.dictionary', [])
    .factory('Dictionary', function() {
      var priorities = [
        'researchNotes', 'resume', 'application',
        'emails', 'calls', 'followups'
      ];

      var findNextTask = function(job, num) {
        var results = [];

        for (var i = 0; i < priorities.length; i++) {
          if (!job[priorities[i]] && num) {
            results.push(priorities[i]);
            num--;
          }
        }

        return results;
      };

      var findRecentTask = function(job, num) {
        var results = [];

        for (var i = priorities.length; i >= 0; i--) {
          if (job[priorities[i]] && num) {
            results.push(priorities[i]);
            num--;
          }
        }

        return results;
      };

      var taskDetails = function(type) {
        var dictionary = {
          application: {
            title: 'Gather ye\' papers!',
            description: 'Send an application to',
            score: 20
          },
          resume: {
            title: 'Who goes there?',
            description: 'Send a resume to',
            score: 10
          },
          researchNotes: {
            title: 'Reconnaissance',
            description: 'Research',
            score: 5
          },
          emails: {
            title: 'Message in a bottle',
            description: 'Send an email to',
            score: 10
          },
          calls: {
            title: 'Ahoy, matey!',
            description: 'Make a call to',
            score: 25
          },
          interviews: {
            title: 'All hands on deck!',
            description:  'Interview with',
            score: 50
          },
          followups: {
            title: 'Don\'t forget',
            description: 'Follow up with',
            score: 30
          }
        };

        return dictionary[type];
      };

      var taskTitle = function(type) {
        var dictionary = {
          'application': 'Gather ye\' papers!',
          'resume': 'Who goes there?',
          'researchNotes': 'Reconnaissance',
          'emails': 'Message in a bottle',
          'calls': 'Ahoy, matey!',
          'interviews': 'All hands on deck!',
          'followups': 'Don\'t forget'
        };

        return dictionary[type];
      };

      var taskDescription = function(type) {
        var dictionary = {
          'application': 'Send an application to',
          'resume': 'Send a resume to',
          'researchNotes': 'Research',
          'emails': 'Send an email to',
          'calls': 'Make a call to',
          'interviews': 'Interview with',
          'followups': 'Follow up with'
        };

        return dictionary[type];
      };

      var taskScore = function(type) {
        var dictionary = {
          'application': 20,
          'resume': 10,
          'researchNotes': 5,
          'emails': 10,
          'calls': 25,
          'interviews': 50,
          'followups': 30
        };

        return dictionary[type];
      };

      return {
        findNextTask: findNextTask,
        findRecentTask: findRecentTask,
        taskTitle: taskTitle,
        taskDescription: taskDescription,
        taskScore: taskScore,
        taskDetails: taskDetails
      };
    });

})();
