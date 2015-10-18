app.directive('slider', function() {
  	return {
	    restrict: 'AE',
	    scope: { min: '@',
	  		max: '@',
	  		value: '=',
	  		title: '@'
	  		},
	    templateUrl: 'slider/slider.html'
	    // template: '<label>{{title}}</label><input type="range" min="{{min}}" max="{{max}}" ng-model="value"/><input type="text" onkeydown="return ( event.ctrlKey || event.altKey || (47<event.keyCode && event.keyCode<58 && event.shiftKey==false) || (95<event.keyCode && event.keyCode<106)|| (event.keyCode==8) || (event.keyCode==9) || (event.keyCode>34 && event.keyCode<40) || (event.keyCode==46) )" ng-model="value"/>'
  	};
});