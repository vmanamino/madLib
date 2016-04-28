angular.module("myApp", ['ngAnimate'])
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
        $scope.nominative = '';
        $scope.inflected = '';
        $scope.object = '';
        $scope.setGender = function(gender) {
            if (gender == 'female'){
                $scope.nominative = "she";
                $scope.inflected = 'her';
                $scope.object = 'her';
                $scope.gender = 'female';
            }  
            if (gender == 'male'){
                $scope.nominative = 'he';
                $scope.inflected = 'his';
                $scope.object = 'him';
                $scope.gender = 'male';
                
            }
            
        };
        $scope.displayText = false;
        $scope.displayForm = true;
        $scope.displayErrors = 'no';
        $scope.displayValidationError = 'no';
        // $scope.huge_number_isNaN = '';
        $scope.errors = 'You did not fill out: ';
        $scope.submit = function(){
            if ($scope.myForm.$error.required || !$scope.gender) {
                $scope.displayErrors = '';
            }
            if (isNaN($scope.myForm.huge_number)){
                $scope.displayValidationError = '';
                
            }
            if (((!$scope.myForm.$error.required) && $scope.myForm.huge_number.$valid)  && $scope.gender) {
                $scope.displayText = true;
                $scope.displayErrors = 'no';
                $scope.displayForm = false;
                $scope.displayValidationError = 'no';
            }
        };
        $scope.anew = function(){
            $scope.displayText = false;
            $scope.displayForm = true;
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
            $scope.nominative = '';
            $scope.inflected = '';
            $scope.object = '';
        };
    })