app.directive('pricing', function() {
  	return {
	    restrict: 'AE',
	    scope: { monthlyData: '=',
				 yearlyData: '=',
				 sessions: '=',
				 server: '='},
	    templateUrl: 'pricing/pricing.html'
  	};
});