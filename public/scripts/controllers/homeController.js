angular.module('eCart').controller('homeCtrl',function($scope,dataService){

	dataService.fetchData().then(function(response){

		$scope.products = response;
		console.log($scope.products);
	})
})