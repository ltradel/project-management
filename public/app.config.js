angular.
  module('pmApp').
  config(['$locationProvider' ,'$routeProvider', 
    function config($locationProvider, $routeProvider) {
	  console.log('app.config');
	  console.log($routeProvider);
	  console.log($locationProvider);
			
      $locationProvider.hashPrefix('!');

      $routeProvider.
        when('/projects/basic', {
		template: '<basic-info></basic-info>'
        }). 
		when('/projects/summary', {
		template: '<project-detail></project-detail>'
        }).
		when('/projects/areas', {
          template: '<areas-special></areas-special>'
        }).
		when('/projects/seminar', {
          template: '<seminar-training></seminar-training>'
        }).
		when('/projects/career', {
          template: '<career-synopsis></career-synopsis>'
        }).
		when('/projects/view', {
          template: '<view-proj></view-proj>'
        }).
		when('/projects/exp', {
          template: '<project-experience></project-experience>'
        }).
		when('/wsor/register', {
          template: '<project-registration></project-registration>'
        }).
		when('/init', {
          template: '<project-login></project-login>'
        }).
		when('/view', {
          template: '<document-view></document-view>'
        }).
        otherwise('/index');

    }
	]);
	
	
angular.
  module('pmApp').run(function($rootScope, $cookies, $location) {
	  
  $rootScope.$on('$routeChangeStart', function(next, current) { 
	 $rootScope.scempid = $cookies.get('scempid');
	 
	 console.log('user:'+$rootScope.scempid);
	if ($rootScope.scempid==null) {
		$rootScope.navbar = true;
		console.log('user:'+$rootScope.scempid);
		$location.path('/init');
	} else {
		$rootScope.navbar = false;			
		if ($location.$$path=='/init') {
			$location.path('/projects/view');
		}
		if ($location.$$path=='/logout'){
		$location.path('/init');
			$cookies.remove('scempid');
		}
	
	}
		

  });  

});

