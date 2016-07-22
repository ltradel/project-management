angular.
  module('projectQualifications').
  component('projectQualifications', {
    templateUrl: 'project-qualifications/project-qualifications.template.html',
    controller: ['$scope', '$http', '$location', '$filter', 
      function QualificationsController($scope, $http, $location, $filter) {
		  
		  $scope.qualifications = [{ id:1, selected : false}];
   
			$scope.addNewQualification = function() { 
			var newItemNo = $scope.qualifications.length+1; 
			$scope.qualifications.push({'id': newItemNo, 'selected' : false}); 
		  }; 
     
		  $scope.removeQualification = function(id) {
		    $scope.qualifications[id-1].selected = true;
			console.log(id-1);
			$scope.qualifications = $filter('filter')($scope.qualifications, {selected: false});
			//$qualifications = array_values($qualifications); 
		  };
		  
		  $scope.submt = function() {
			console.log('yyyy');
			var data = $scope.$$childHead.employee; 
			console.log(data);
			$http.post('/projects/qualifications', data).then(function successCallback(response) {
				console.log('eh di ok');
			}, function errorCallback(response) {
				console.log('di ok');
			});
		  }
		  
		  $scope.cancel = function() {
			$location.path('/index');
		  }
		 
		  
		}]
  });
