app.controller("cloudmeterController", function($scope) {

	$scope.sessions = 0;
	$scope.estimate_percent = 0;
	$scope.server = {cost: 100.0, sessions: 100};
    $scope.license_cost = 5.0;

    var monthly_calculate = function(sessions) {
    	var data = {};
        data.servers_num = Math.ceil(sessions / $scope.server.sessions);
        data.servers_cost = data.servers_num * $scope.server.cost;
        data.license_cost = sessions * $scope.license_cost;
        data.total_cost = data.servers_cost + data.license_cost;
        return data;
    };

    var calculate = function() {
    	$scope.monthly_data = monthly_calculate($scope.sessions);
    	var total_sessions = $scope.sessions * Math.pow($scope.estimate_percent/100 + 1,12);
    	$scope.yearly_data = monthly_calculate(total_sessions);
    };

    $scope.$watch('sessions', function(){ calculate();});

});