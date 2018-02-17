angular.module('eCart').controller('homeCtrl',function($scope,dataService){

	dataService.fetchData().then(function(response){

		$scope.products = response;
		console.log($scope.products);
	})

	$scope.loopArray = [0,4,8,12];
	console.log($scope.loopArray)
})