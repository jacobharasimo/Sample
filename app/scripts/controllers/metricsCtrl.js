'use strict';

/**
 * @ngdoc function
 * @name sampleApp.controller:MetricsCtrl
 * @description
 * # MetricsCtrl
 * Controller of the sampleApp
 */

function metricsCtrl($log){
  var vm={};

  var options =[{name:'Time',value:'Time'},
    {name:'Cost',value:'Cost'}];

  vm.metricModel={
    name:null,
    type:null
  };

  vm.metricFields=[
    {
      key: 'type',
      type: 'radio',
      templateOptions: {
        label: 'Educator\'s New School',
        placeholder: 'Choose a Institution',
        options: options,
        required: true,
        valueProp: 'name',
        labelProp: 'value',
        requiredValidationMessage: 'Institution Name Required'
      }
    },
    {
      key:'name',
      type:'input',
      templateOptions:{
        type:'text',
        label:'describe your metric',
        placeholder:'Enter the metric...',
        required: true
      },
      modelOptions: {
        debounce: 0
      }
    }
  ];

  vm.outputs=[
    {
      name:'SampleOutput1',
      isInsertMode:false,
      toggleInsertMode:function toggleInsertMode(){
        vm.newMetric={};
        this.isInsertMode = !this.isInsertMode;
      },
      addMetric:function addMetric(metric){
        this.metrics.push(metric);
        this.toggleInsertMode();
      },
      metrics:[{name:'test1',type:'time'}],
      removeMetric:function removeMetric(metric){

      }
    }
  ];

  vm.onSubmit = function(form){
    $log.debug(form);
  };

  vm.updateMetric = function updateOutput(output){
    $log.debug('update ',output);
  };

  vm.removeMetric = function removeOutput(output){
    $log.debug('remove output ', output);
  };

  return vm;
}

angular.module('sampleApp')
  .controller('metricsCtrl', metricsCtrl);
