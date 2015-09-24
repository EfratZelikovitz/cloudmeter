app.directive('slider', function() {
  	return {
	    restrict: 'AE',
	    scope: { min: '@',
	  		max: '@',
	  		value: '=',
	  		title: '@'
	  		},
	    templateUrl: 'slider/slider.html',
	    link: function(scope, element, attrs) {
	    	// element.bind('change',scope.calculate());
	    }
  	};
});