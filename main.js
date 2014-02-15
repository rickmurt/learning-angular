var app = angular.module("app", ['ngRoute']);

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
 
app.controller("AppCtrl", function ($rootScope) {
  $rootScope.$on("$routeChangeError", function () {
    console.log("failed to change routes");
  });
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
  }, 2000);
  return defer.promise;
};