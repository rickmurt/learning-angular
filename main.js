var app = angular.module('app', ['ngRoute']);
 
app.config(function ($routeProvider) {
  $routeProvider
    .when('/',
    {
      templateUrl: "app.html",
      controller: "ViewCtrl",
      resolve: {
        loadData: viewCtrl.loadData
      }
    }
  )
});
app.controller("AppCtrl", function () {
});

app.directive("error", function ($rootScope) {
  return {
    restrict: "E",
    template: '<div class="alert-box alert" ng-show="isError">' +
              'Error!!!!!</div>',
    link: function (scope) {
      $rootScope.$on("$routeChangeError", 
                     function (event, current, previous, rejection) {
        scope.isError = true;
      });
    }
  }
});
 
var viewCtrl = app.controller("ViewCtrl", function ($scope) {
  $scope.model = {
    message: "I'm a great app!"
  }
});
 
viewCtrl.loadData = function ($q, $timeout) {
  var defer = $q.defer();
  $timeout(function () {
    defer.reject("loadData"); 
    // defer.resolve();
  }, 2000);
  return defer.promise;
};