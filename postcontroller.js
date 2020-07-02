app.controller('myController',['$scope',function($scope)
{
    //alert("hai");
    $scope.click = function(){
        alert('name=' + $scope.name + ',' + 'email=' + $scope.email);
    };
    

}]);