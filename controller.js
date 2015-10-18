app.controller("cloudmeterController", function($scope) {

  $scope.sessions = 0;
  $scope.estimate_percent = 0;
  $scope.server = {cost: 100.0, sessions: 100, description: '4GB General Purpose (LIN)'};
  $scope.license_cost = 5.0;

  var monthly_calculate = function(sessions) {
    var data = {};
    data.servers_num = Math.ceil(sessions / $scope.server.sessions);
    data.servers_cost = parseFloat((data.servers_num * $scope.server.cost).toFixed(2));
    data.license_cost = parseFloat((sessions * $scope.license_cost).toFixed(2));
    data.total_cost = data.servers_cost + data.license_cost;
    return data;
  };

  var calculate = function() {
    $scope.monthly_data = monthly_calculate($scope.sessions);
    var sessions = $scope.sessions;
    $scope.yearly_data = {
      servers_cost: $scope.monthly_data.servers_cost,
      license_cost: $scope.monthly_data.license_cost,
      total_cost: $scope.monthly_data.total_cost
    };
    var monthly_data = {};
    for(var i = 1; i < 12; i++) {
      sessions = sessions * (1 + $scope.estimate_percent/100);
      monthly_data = monthly_calculate(sessions);
      $scope.yearly_data.servers_cost += monthly_data.servers_cost;
      $scope.yearly_data.license_cost += monthly_data.license_cost;
      $scope.yearly_data.total_cost += monthly_data.total_cost;
    }
    $scope.yearly_data.servers_num = monthly_data.servers_num;
    // var total_sessions = $scope.sessions * Math.pow($scope.estimate_percent/100 + 1,12);
    // $scope.yearly_data = monthly_calculate(total_sessions);
  };

  $scope.$watch('sessions', function(){ calculate();});
  $scope.$watch('estimate_percent', function(){ calculate();});

  $scope.$watch('monthly_data.servers_num', 
    function(new_val) { $scope.monthly_data.servers_cost = new_val * $scope.server.cost;}
  );

  $scope.generate_chart = function() {
    $scope.show_chart = true;
    $scope.data = [];
    $scope.old_cost = 0; 
    $scope.new_cost = 0;
    var sessions = $scope.sessions,
        old_sessions = $scope.sessions * Math.pow($scope.estimate_percent/100 + 1,2),
        x = 0,
        old_data = {total_cost: 0},
        new_data = {total_cost: 0};
    for (var i = 0; i < 12; i++) {
      $scope.data[$scope.data.length] = {x: i, val_0: new_data.total_cost, val_1: old_data.total_cost - new_data.total_cost};  
      new_data = monthly_calculate(sessions);
      $scope.new_cost += new_data.total_cost;
      sessions = sessions * ($scope.estimate_percent/100 + 1);    
      if (i%3 == 0) {
        old_data = monthly_calculate(old_sessions);
        old_sessions = old_sessions * Math.pow($scope.estimate_percent/100 + 1,3);
      }
      $scope.old_cost += old_data.total_cost;
      $scope.data[$scope.data.length] = {x: i, val_0: new_data.total_cost, val_1: old_data.total_cost - new_data.total_cost};
    };
    $scope.data[$scope.data.length] = {x: i, val_0: new_data.total_cost, val_1: old_data.total_cost - new_data.total_cost};
  };


  $scope.options = {
    stacks: [
      {
        axis: "y",
        series: [
          "id_0",
          "id_1"
        ]
      }
    ],
    series: [
      {
        id: "id_0",
        y: "val_0",
        color: "#288de2"
      },
      {
        id: "id_1",
        y: "val_1",
        type: "area",
        striped: true,
        color: "#7dbf02"
      }
    ],
    tooltip: {mode: 'none'}
  }

});