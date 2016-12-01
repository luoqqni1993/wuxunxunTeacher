var myApp=angular.module("myModule",[]);

myApp.controller("myController",function($scope){
	var employees=[
		{
			firstName:"Fang",
			lastName:"vane",
			gender:"Male",
			salary:"23908.333",
			birthday:new Date("2007-7-11")
		},
		{
			firstName:"Sara",
			lastName:"rose",
			gender:"Female",
			salary:"24908.333",
			birthday:new Date("2005-7-11")
		},
		{
			firstName:"Mark",
			lastName:"bear",
			gender:"Male",
			salary:"26908.333",
			birthday:new Date("2004-7-11")
		},
		{
			firstName:"Aam",
			lastName:"hot",
			gender:"Male",
			salary:"35608.333",
			birthday:new Date("2000-7-11")
		}
	]
	$scope.employees=employees;
	$scope.sortColumn="firstName";
	$scope.reverseSort=false;
	
	$scope.sortData=function(column){
		$scope.reverseSort=($scope.sortColumn==column) ? !$scope.reverseSort : false;
		$scope.sortColumn=column;
		
	}
	
	$scope.getSortClass=function(column){
		if($scope.sortColumn==column){
			return $scope.reverseSort ? "arrow-down" : "arrow-up";
		}
	}
});
