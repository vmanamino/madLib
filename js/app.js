angular.module("myApp", [])
    .controller("myCtrl", function($scope){
        $scope.name = '';
        $scope.job_title = '';
        $scope.tedious_task = '';
        $scope.dirty_task = '';
        $scope.celebrity = '';
        $scope.useless_skill = '';
        $scope.adjective = '';
        $scope.obnoxious_celebrity = '';
        $scope.huge_number = '';
        $scope.gender = '';
        $scope.pronounNominative = "nominative";
        // $scope.setNominative = function(){
        //     if ($scope.gender == 'female'){
        //         // return "she"; // $scope.pronounNominative
        //         $scope.pronounNominative = "she";
        //     }
        //     if ($scope.gender == 'male'){
        //         return "he";
        //     }
        // };
        // $scope.setInflected = function(){
        //     if ($scope.gender == 'female'){
        //         return "her";
        //     }
        //     if ($scope.gender == 'male'){
        //         return "his";
        //     }
        // };
        // $scope.setObject = function(){
        //     if ($scope.gender == 'female'){
        //         return "her";
        //     }
        //     if ($scope.gender == 'male'){
        //         return "him";
        //     }
        // };
        
    })