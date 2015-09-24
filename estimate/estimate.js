app.directive('estimate', function() {
  	return {
	    restrict: 'AE',
	    scope: {sessions: '=',
				percent: '=' },
	    templateUrl: 'estimate/estimate.html'
	    // template: '<div class="row-header"><slider min="50" max="5000" value="value" title="{{title}}" calculate="calculate"></slider><slider min="0" max="100" value="value1" title="{{title1}}"></slider></div>'
  	};
});