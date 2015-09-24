app.directive('estimate', function() {
  	return {
	    restrict: 'AE',
	    scope: {sessions: '=',
				percent: '=' },
	    templateUrl: 'estimate/estimate.html'
  	};
});