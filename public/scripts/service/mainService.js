angular.module('eCart').service('dataService',function($http,$q){
	console.log("service reached");

	this.fetchData = function(){
		var defer = $q.defer();
	$http.get('../../assets/data/mock.json').then(function(res){
		
		// this.testData = res.data;
		// console.log(res.data);
		defer.resolve(res.data);
		this.dataTest = res.data;

	})
		
	return defer.promise;
}

this.setId = function(id){

	this.productId = id;
	localStorage.setItem("productId",this.productId);
}

this.getId = function(){

	return this.productId;
}

})


