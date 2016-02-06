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

  vm.newOutputFields=[
    {
      key:'name',
      type:'input',
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

  vm.outputFields=[
    {
      key:'name',
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
    var newOutput={model:angular.copy(output),fields:angular.copy(vm.outputFields)};
    /*need to seed the items with a unique id as names are unique thus how to delete the item?*/
    newOutput.$id = Math.random().toString(36).substring(7);
    vm.list.push(newOutput);
    this.options.resetModel();
    $log.debug('add output ', newOutput);
  };
  vm.updateOutput = function updateOutput(output){
    $log.debug('update ',output);
  };
  vm.removeOutput = function removeOutput(output){
    $log.debug('remove output ', output);
    _.remove(vm.list,function(item){
      return item.$id==output.$id;
    });
  };
  return vm;
}

angular.module('sampleApp')
  .controller('outputsCtrl', outputsCtrl);
