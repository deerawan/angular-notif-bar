(function() {
  'use strict';

  angular
    .module('bgn.NotifBar')
    .factory('notifBar', notifBar);

    function notifBar() {
      var service = {
        info: info,
        error: error,
        success: success,
        warning: warning
      };

      return service;
    }

})();
