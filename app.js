/**
 * Created by michaelbyrne on 9/28/16.
 */

(function () {
    'use strict';
    angular.module('LunchChecker',[]).controller('CheckerController',CheckerController);
    CheckerController.$inject = ['$scope'];
    function CheckerController($scope) {
        $scope.list = "";
        $scope.count = 0;
        $scope.message = "";
        $scope.countItems = function () {
            //var listArr = $scope.list.split(",");
            var reSpaces = /(,\s*,)+/g;
            var reTrail =  /,\s*$/;
            $scope.list = $scope.list.replace(reSpaces,",");
            var listArr = $scope.list.replace(reTrail,"").split(",");
            $scope.count = listArr.length;
        };
        $scope.checkCount = function() {
            console.log($scope.count);
            if($scope.count <= 3){
                $scope.message = "enjoy!";
            }
            else if ($scope.count == 0){
                $scope.message = "enter data first!";
            }
            else{
                $scope.message = "too much!";
            }
        }
    }


})();
