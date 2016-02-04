'use strict';

angular.module('sampleApp')
  .directive('output', function ($log) {
    return {
      template: null,
      templateUrl: 'scripts/directive/outputDirective.html',
      restrict: 'E',
      replace: false,
      scope: true,
      controller: function ($scope) {
        this.$scope = $scope;
        this.oldName = '';
        this.isEditMode = false;

        this.save = function saveOutput(form) {
          form.$setSubmitted();
          if (form.$valid) {
            this.update();
            this.isEditMode = false;
          }
        };

        this.clearValidation = function clearValidation(form, output) {
          if (form.$invalid) {
            angular.forEach(output.$error, function (value, key) {
              output.$setValidity(key, value);
            });
          }
        };

        this.edit = function editOutput() {
          this.oldName = angular.copy(this.name);
          $log.debug('enter edit mode');
          this.isEditMode = true;
        };

        this.cancel = function cancelOutput() {
          this.name = angular.copy(this.oldName);
          this.isEditMode = false;
        };

      },
      controllerAs: 'output',
      bindToController: {
        name: '=',
        edit: '&',
        delete: '&',
        cancel: '&',
        update:'&'
      }
    };
  });



