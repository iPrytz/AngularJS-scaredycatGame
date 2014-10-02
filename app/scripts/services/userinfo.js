'use strict';

/**
 * @ngdoc service
 * @name scaredycatApp.userInfo
 * @description
 * # userInfo
 * Factory in the scaredycatApp.
 */
angular.module('scaredycatApp')
  .factory('userInfo', function () {
    // Service logic
    // ...

    var username = '';

    // Public API here
    return {
      setUsername: function (name) {
        username = name;
      },
      getUsername: function () {
        return username;
      }
    };
  });