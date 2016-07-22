angular.
  module('documentView').
  component('documentView', {
    templateUrl: 'document-view/document-view.template.html',
    controller: ['$scope', '$http', '$location',
      function documentViewController($scope, $http, $location) {
		  var self = this;
		  console.log('view document here');;
		  
		  $http.get('/view').then(function(response) {
			 console.log('xxxx');
			 //console.log(response.data);
			 //self.projects = response.data; 
		  });
		}]
  });
