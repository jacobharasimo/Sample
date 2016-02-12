'use strict';

/**
 * @ngdoc function
 * @name sampleApp.controller:MetricsCtrl
 * @description
 * # MetricsCtrl
 * Controller of the sampleApp
 */

function metricsCtrl($log) {

  var Output = (function () {
    function Output(output, metricForm) {
      this.metricForm = angular.copy(metricForm);
      this.text = output.text;
      this.metrics = output.metrics;
      if (!angular.isArray(this.metrics)) {
        this.metrics = [];
      }
    }

    Output.prototype.removeMetric = function (metric) {
      $log.warn('remove metric ', metric);
      this.isInsertMode = false;
      this.metricForm.options.resetModel();
    };

    Output.prototype.toggleInsertMode = function () {
      this.metricForm = angular.copy(this.metricForm);
      this.isInsertMode = true;
    };

    Output.prototype.addMetric = function (metric) {
      var newMetric = angular.copy(metric);
      newMetric.$id = Math.random().toString(36).substring(7);
      newMetric.save = function saveMetric(metric) {
        $log.warn('save Metric ', metric);
      };
      this.metrics.push(newMetric);
      this.isInsertMode = false;
      this.metricForm.options.resetModel();
    };

    return Output;
  })();


  var vm = {};

  var options = [
    {name: 'Time', value: 'time'},
    {name: 'Cost', value: 'cost'},
    {name: 'Quality', value: 'quality'},
    {name: 'Feedback', value: 'feedback'},
    {name: 'Quantity', value: 'quantity'},
    {name: 'Variance', value: 'variance'}
  ];

  vm.metricForm = {
    model: {
      name: null,
      type: null
    },
    fields: [
      {
        key: 'type',
        type: 'foundationRadio',
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
        type: 'foundationInput',
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
    ]
  };


  vm.outputList = [];

  vm.outputList.push(new Output({text: 'test1'}, vm.metricForm));
  vm.outputList.push(new Output({text: 'test2'}, vm.metricForm));


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
