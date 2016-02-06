'use strict';

angular.module('sampleApp')
  .config(function config(formlyConfigProvider) {
    formlyConfigProvider.extras.removeChromeAutoComplete = false;

    /*error message wrapper*/
    formlyConfigProvider.setWrapper({
      name: 'foundationLabel',
      templateUrl: 'formly/label.html',
      types: ['foundationInput', 'foundationRadio'],
      apiCheck: function (check) {
        return ({
          templateOptions: {
            label: check.string.optional,
            required: check.bool.optional,
            labelSrOnly: check.bool.optional
          }
        });
      },
      overwriteOk: true
    });

    formlyConfigProvider.setWrapper({
      name: 'foundationValidation',
      types: ['foundationInput', 'foundationRadio'],
      templateUrl: 'formly/validation.html',
      overwriteOk: true
    });

    formlyConfigProvider.setType({
      name: 'foundationInput',
      templateUrl: 'formly/input.html',
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
      name: 'foundationRadio',
      overwriteOk: true,
      templateUrl: 'formly/radio.html',
      defaultOptions: {
        noFormControl: false
      },
      apiCheck: function (check) {
        return ({
          templateOptions: {
            options: check.arrayOf(check.object),
            labelProp: check.string.optional,
            valueProp: check.string.optional
          }
        });
      }
    });

  })
  .run(function (formlyValidationMessages) {
    formlyValidationMessages.addTemplateOptionValueMessage('required', 'requiredValidationMessage', '', '', 'This field is required');
  });

