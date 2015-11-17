(function() {
  'use strict';

  angular
    .module('bgn.NotifBar')
    .provider('notifBar', notifBarProvider);

    function notifBarProvider() {

      var vm = this;

      vm.options = {
        delay: 5000
      };

      vm.setOptions = function(options) {
        if (!angular.isObject(options)) {
          throw new Error('Options format should be an object');
        }
        vm.options = angular.extend({}, vm.options, options);
      };

      vm.$get = notifBar;

      function notifBar($http, $templateCache, $compile, $rootScope) {
        var service = {
          show: show
        };

        return service;

        var options = vm.options;

        function show(args, type) {

          var scope = $rootScope.$new();

          $http.get(args.template, {cache: $templateCache}).success(function(template) {
            var templateElement = $compile(template)(scope);
            angular.element(document.getElementsByTagName('body')).append(templateElement);
          });
        }
      }
    }

})();
