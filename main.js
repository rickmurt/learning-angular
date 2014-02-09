var myApp = angular.module('myApp', []);

myApp.factory('Avengers',
	function() {
		var Avengers = {};
		Avengers.cast = [
			{
				name: "Robert Downey Jr.",
				character: "Tony Stark / Iron Man"
			},
			{
				name: "Chris Evans",
				character: "Steve Rogers / Captain America"
			},
			{
				name: "Mark Ruffalo",
				character: "Bruce Banner / The Hulk"
			}
		];

		return Avengers;
	}
);

function AvengersCtrl($scope, Avengers) {
	$scope.avengers = Avengers;
}