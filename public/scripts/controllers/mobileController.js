angular.module('eCart').controller('mobileCtrl',function($scope,dataService){

	dataService.fetchData().then(function(response){
		$scope.products = response.data;
		console.log(response);
	})



})