angular.
  module('sydView').
  component('sydView', {
    templateUrl: 'syd-view/syd-view.template.html',
    controller: ['$scope', '$http', '$location',
      function sydViewController($scope, $http, $location) {
		  var self = this;
		  console.log('view document here');;
		  
		  $http.get('/sview').then(function(response) {
			 console.log('xxxx');
			 //console.log(response.data);
			 //self.projects = response.data; 
		  });



		}]
  });

  
