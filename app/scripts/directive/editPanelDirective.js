
'use strict';

angular.module('sampleApp')
  .directive('editPanel', function ($log) {
    return {
      template: null,
      templateUrl: 'directive/editPanelDirective.html',
      restrict: 'E',
      replace: false,
      scope: true,
      controller: function () {
        this.isEditMode = false;

        this.onSubmit = function onSubmit(postForm) {
          $log.debug('submit form');
          if (postForm.$valid) {
            $log.debug('form valid');
            this.save();
            this.isEditMode = false;
          }
        };

        this.edit = function editOutput() {
          $log.debug('enter edit mode');
          this.isEditMode = true;
        };

        this.onCancel = function onCancel() {
          $log.debug('cancel panel changes');
          this.options.resetModel();
          this.isEditMode = false;
        };

        this.onDelete = function onDelete(output){
          $log.debug('call delete function');
          this.remove();
          this.isEditMode = false;
        };

      },
      controllerAs: 'editPanel',
      transclude:true,
      bindToController: {
        fields:'=',
        model:'=',
        edit: '&',
        remove: '&',
        cancel: '&',
        save:'&'
      }
    };
  });



