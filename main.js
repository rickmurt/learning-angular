var app = angular.module('phoneApp', []);
 
var phoneAppStuff = {}
phoneAppStuff.controllers = {};
phoneAppStuff.directives = {};

phoneAppStuff.controllers.AppCtrl = function ($scope) {
 this.sayHi = function () {
    alert("hi");
  };
 
  return $scope.AppCtrl = this;
};


phoneAppStuff.directives.panel = function () {
  return {
    restrict: "E"
  };
};
 
app.controller(phoneAppStuff.controllers);
app.directive(phoneAppStuff.directives);