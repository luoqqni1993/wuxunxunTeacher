var myApp=angular.module("myModule",[]);
myApp.controller("myController",function($scope){
	var employees=[
		{
			firstName:"Fang",
			lastName:"vane",
			gender:"Male",
			salary:12333.476,
			birthday:new Date("2007-7-11")
		},
		{
			firstName:"Sara",
			lastName:"rose",
			gender:"Female",
			salary:15333.476,
			birthday:new Date("1997-2-3")
		},
		{
			firstName:"Mark",
			lastName:"bear",
			gender:"Male",
			salary:62333.476,
			birthday:new Date("2003-7-11")
		},
		{
			firstName:"Pam",
			lastName:"hot",
			gender:"Male",
			salary:42333.476,
			birthday:new Date("1986-7-11")
		}
	]
	$scope.employees=employees;
	$scope.rowLimit=3;
});
