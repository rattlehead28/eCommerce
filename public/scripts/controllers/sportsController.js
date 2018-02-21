angular.module('eCart').controller('sportsCtrl',function($scope,dataService){

	dataService.fetchData().then(function(response){
		$scope.products = response;
		$scope.sports = $scope.products.sports;
		console.log(response);
	})



})