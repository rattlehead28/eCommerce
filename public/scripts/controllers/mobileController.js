angular.module('eCart').controller('mobileCtrl', function($scope, $state, dataService) {
    $scope.val=[];
    $scope.mobileBrands = ['samsung', 'apple', 'htc'];

    dataService.fetchData().then(function(response) {
        $scope.products = response;
        $scope.mobiles = $scope.products.mobiles;
        $scope.filteredMobiles = $scope.products.mobiles;
        console.log(response);
    })
// $scope.checkboxFilter = function(){
	
// 	$scope.filteredMobiles=[];
	
// 	if($scope.val1=='samsung'){

// 		for(var i=0;i<$scope.mobiles.length;i++){

// 			if($scope.mobiles[i].brand=='samsung'){

// 				$scope.filteredMobiles.push($scope.mobiles[i]);
// 			}
// 		}

// 	}

// 	if($scope.val2=='apple'){
		
// 		for(var i=0;i<$scope.mobiles.length;i++){

// 			if($scope.mobiles[i].brand=='apple'){

// 				$scope.filteredMobiles.push($scope.mobiles[i]);
// 			}
// 		}
// 	}

// 	if($scope.val3=='htc'){

// 		for(var i=0;i<$scope.mobiles.length;i++){

// 			if($scope.mobiles[i].brand=='htc'){

// 				$scope.filteredMobiles.push($scope.mobiles[i]);
// 			}
// 		}
// 	}

// 	if($scope.filteredMobiles==0){
// 		$scope.filteredMobiles=$scope.mobiles;
// 	}



// }

 $scope.minSlider = {
        value: 10
    };
$scope.minRangeSlider = {
        minValue: 5000,
        maxValue: 68000,
        options: {
            floor: 0,
            ceil: 70000,
            step: 1
        }
    };



$scope.descriptionRedirect = function(index){

	dataService.setId(index);
	console.log("index");
	$state.go('mobileDetails');
}

$scope.priceFilter = function(item){

	return(item.price>=$scope.minRangeSlider.minValue&&item.price<=$scope.minRangeSlider.maxValue)
}
})


// $scope.checkboxFilter = function() {

//     return (
//         for (var i = 0; i < $scope.val.length; i++) {
//             $scope.val[i]
//         }
        
//         );
    
// }

angular.module('eCart')
.filter('brandFilter', function() {

    return function(filteredMobiles, val) {
    	if(val.length==0||(val[0]==false||val[1]==false||val[2]==false)){
    		return filteredMobiles;
    	}
        return filteredMobiles.filter(function(filteredMobiles) {
            for (var i in filteredMobiles) {
                if (val.indexOf(filteredMobiles.brand) != -1) {
                    return true;
                }
            }
            return false;

        });
    };
})