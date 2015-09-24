app.directive('servers', function() {
  	return {
	    restrict: 'AE',
	    scope: { serversData: '=' },
	    templateUrl: 'servers/servers.html'
  	};
});