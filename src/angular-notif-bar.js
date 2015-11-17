(function() {
  'use strict';

  angular
    .module('bgn.NotifBar')
    .provider('notifBar', notifBarProvider);

    function notifBarProvider() {

      this.options = {
        delay: 5000
      };

      this.setOptions = function(options) {
        if (!angular.isObject(options)) throw new Error('Options format should be an object');
        this.options = angular.extend({}, this.options, options);
      };

      this.$get = notifBar;

      function notifBar() {
        var service = {

        };

        return service;

        var options = this.options;

        $http.get(args.template, {cache: $templateCache}).success(function(template) {

        });
      }
    }

})();
