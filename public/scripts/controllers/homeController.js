angular.module('eCart').controller('homeCtrl',function($scope, $state, dataService){

	dataService.fetchData().then(function(response){

		$scope.products = response;
		console.log($scope.products);
	})

	$scope.loopArray = [0,4,8,12];
	console.log($scope.loopArray)

	$scope.descriptionRedirectMobiles = function(index){

	dataService.setId(index);
	console.log("index");
	$state.go('mobileDetails');
}

$scope.descriptionRedirectFashion = function(index){

	dataService.setId(index);
	console.log("index");
	$state.go('fashionDetails');
}
$scope.descriptionRedirectSports = function(index){

	dataService.setId(index);
	console.log("index");
	$state.go('sportsDetails');
}

})