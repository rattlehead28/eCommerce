angular.module('eCart').controller('mobileDetailsCtrl', function($scope, dataService) {
    $scope.mobileDesc = {};
    if (localStorage.getItem('productId')) {
        $scope.id = localStorage.getItem('productId');
    } else {
        $scope.id = dataService.getId();
    }
    console.log($scope.id);
    dataService.fetchData().then(function(response) {
        $scope.products = response;
        $scope.mobiles = $scope.products.mobiles;
        console.log($scope.mobiles);
        for (var i = 0; i < $scope.mobiles.length; i++) {

            if ($scope.id == $scope.mobiles[i].id) {

                $scope.mobileDesc = $scope.mobiles[i];
            } else {
                console.log("error")
            }
        }

        console.log($scope.mobileDesc);

    })



})