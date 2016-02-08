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

  vm.outputFields=[
    {
      key:'text',
      type:'foundationInput',
      className:'columns small-9',
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

  vm.outputEditFields=[
    {
      key:'text',
      type:'foundationInput',
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

  vm.list = [];

  vm.addOutput = function addOutput(output){
    var newOutput=angular.copy(output);
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
