app.directive('pricing', function() {
  	return {
	    restrict: 'AE',
	    scope: { monthlyData: '=',
				 yearlyData: '=',
				 sessions: '='},
	    templateUrl: 'pricing/pricing.html'
  	};
});