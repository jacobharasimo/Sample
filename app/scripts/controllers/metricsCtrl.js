'use strict';

/**
 * @ngdoc function
 * @name sampleApp.controller:MetricsCtrl
 * @description
 * # MetricsCtrl
 * Controller of the sampleApp
 */

function metricsCtrl($log) {
  var vm = {};

  var options = [
    {name: 'Time', value: 'time'},
    {name: 'Cost', value: 'cost'},
    {name: 'Quality', value: 'quality'},
    {name: 'Feedback', value: 'feedback'},
    {name: 'Quantity', value: 'quantity'},
    {name: 'Variance', value: 'variance'}
  ];

  vm.metricModel = {
    name: null,
    type: null
  };

  vm.metricFields = [
    {
      key: 'type',
      type: 'radio',
      templateOptions: {
        label: 'Select how your output will be measured',
        options: options,
        required: true,
        valueProp: 'name',
        labelProp: 'value',
        requiredValidationMessage: 'Metric type Required'
      }
    },
    {
      key: 'name',
      type: 'input',
      templateOptions: {
        type: 'text',
        label: 'describe your metric',
        placeholder: 'Enter the metric...',
        required: true
      },
      modelOptions: {
        debounce: 0
      }
    }
  ];

  vm.outputs = angular.copy(vm.metricFields);

  vm.onSubmit = function (form) {
    form.$setSubmitted();
    $log.debug(form);
  };

  vm.updateMetric = function updateOutput(output) {
    $log.debug('update ', output);
  };

  vm.removeMetric = function removeOutput(output) {
    $log.debug('remove output ', output);
  };

  return vm;
}

angular.module('sampleApp')
  .controller('metricsCtrl', metricsCtrl);
