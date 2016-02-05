'use strict';

angular.module('sampleApp')
  .config(function config(formlyConfigProvider) {
    formlyConfigProvider.extras.removeChromeAutoComplete = false;

    /*error message wrapper*/
    formlyConfigProvider.setWrapper([
      {
        name: 'label',
        templateUrl: 'scripts/formly/label.html',
        types: ['input','radio'],
        apiCheck: function (check) {
          return ({
            templateOptions: {
              label: check.string,
              required: check.bool.optional
            }
          });
        },
        overwriteOk: true
      },
      {
        name: 'validation',
        types: ['input','radio'],
        templateUrl: 'scripts/formly/validation.html',
        overwriteOk: true
      }
    ]);

    formlyConfigProvider.setType({
      name: 'input',
      templateUrl: 'scripts/formly/input.html',
      overwriteOk: true,
      defaultOptions: function (options) {
        if (!options.templateOptions.onChange || !angular.isFunction(options.templateOptions.onChange)) {
          options.templateOptions.onChange = function () {
          };
        }
        return options;
      }
    });

    formlyConfigProvider.setType({
      name: 'radio',
      overwriteOk: true,
      templateUrl: 'scripts/formly/radio.html'
    });

  })
  .run(function (formlyValidationMessages){
    formlyValidationMessages.addTemplateOptionValueMessage('required', 'requiredValidationMessage', '', '', 'This field is required');
  });

