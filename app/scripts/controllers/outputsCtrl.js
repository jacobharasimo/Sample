'use strict';

/**
 * @ngdoc function
 * @name sampleApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the sampleApp
 */

function outputsCtrl($log){
  var vm={};

  vm.editFields=[
    {
      key:'name',
      type:'input',
      templateOptions:{
        type:'text',
        label:'output name',
        placeholder:'Enter your Output',
        required: true
      },
      modelOptions: {
        debounce: 0
      }
    }
  ];

  vm.outputFields=[
    {
      key:'name',
      type:'input',
      templateOptions:{
        type:'text',
        label:'output name',
        placeholder:'Enter your Output',
        required: true
      },
      modelOptions: {
        debounce: 0
      }
    }
  ];

  vm.list = [{model:{name:'test'},fields:angular.copy(vm.outputFields)}];

  vm.addOutput = function addOutput(output){
    var newOutput={model:angular.copy(output),fields:angular.copy(vm.outputFields)};
    vm.list.push(newOutput);
    this.options.resetModel();
    $log.debug('add output ', newOutput);
  };
  vm.updateOutput = function updateOutput(output){
    $log.debug('update ',output);
  };
  vm.removeOutput = function removeOutput(output){
    $log.debug('remove output ', output);
  };
  return vm;
}

angular.module('sampleApp')
  .controller('outputsCtrl', outputsCtrl);
