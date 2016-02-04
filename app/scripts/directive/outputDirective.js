'use strict';

angular.module('sampleApp')
  .directive('output', function ($log) {
    return {
      template: null,
      templateUrl: 'scripts/directive/outputDirective.html',
      restrict: 'E',
      replace: false,
      scope: true,
      controller: function () {
        this.isEditMode = false;

        this.model={
          name:this.name
        };
        this.fields=[
          {
            key:'name',
            type:'input',
            templateOptions:{
              type:'text',
              label:'output name',
              placeholder:'Enter your Output',
              required: true,
              requiredValidationMessage: 'FIRSTNAME_IS_REQUIRED'
            }
          }
        ];


        this.save = function saveOutput(form) {
          form.$setSubmitted();
          if (form.$valid) {
            this.update();
            this.isEditMode = false;
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



