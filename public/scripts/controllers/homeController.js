angular.module('eCart').controller('homeCtrl',function($scope, $state, dataService){

	dataService.fetchData().then(function(response){

		$scope.products = response;
		console.log($scope.products);
	})

	$scope.loopArray = [0,4,8,12];
	console.log($scope.loopArray)

	$scope.descriptionRedirect = function(index){

	dataService.setId(index);
	console.log("index");
	$state.go('mobileDetails');
}
})