var myApp = angular.module('myApp', []);
 
myApp.factory('Data', function () {
  return { message: "I'm data from a service" }
});
 
myApp.filter('reverse', function () {
  return function (text) {
    return text.split("").reverse().join("");
  }
});
 
function FirstCtrl($scope, Data) {
  $scope.data = Data;
}
 
function SecondCtrl($scope, Data) {
  $scope.data = Data;
} 

describe('filter', function () {
  beforeEach(module('myApp'));
 
  describe('reverse', function () {
    it('should reverse a string', inject(function (reverseFilter) {
      expect(reverseFilter('ABCD')).toEqual('DCBA');
      expect(reverseFilter('John')).toEqual('nhoJ');
    }))
  })
})