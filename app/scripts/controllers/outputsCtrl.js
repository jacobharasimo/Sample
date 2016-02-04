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
  vm.list = [{name:'test1'}];
  vm.addOutput = function addOutput(output){
    vm.list.push(output);
    $log.debug('add output ', output);
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
