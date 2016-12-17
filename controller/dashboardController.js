blogApp.controller('dashboardController', ['$scope', '$rootScope', '$timeout', '$localStorage', '$http', 'toastr', function($scope, $rootScope, $timeout, $localStorage, $http, toastr) {
    $scope.data = [];
    $scope.data[1] = "active";
    $rootScope.loading = false;

    $scope.firstName = $localStorage.loginUser.first_name;
    $scope.lastName = $localStorage.loginUser.last_name;
    $scope.thumbnail = $localStorage.loginUser.image;

    /*setting the active tab in profile*/
    $scope.setActiveTab = function(tabNum) {
        $scope.data = [];
        $scope.data[tabNum] = "active";
    };
    /*END setting the active tab in profile*/

    /*getting the image in base64*/
    $scope.fileNameChanged = function(t) {
        if (t.files && t.files[0] && t.files[0].type.indexOf('image') > -1) {
            $timeout(function() {
                var fileReader = new FileReader();
                fileReader.readAsDataURL(t.files[0]);
                fileReader.onload = function(e) {
                    $timeout(function() {
                        $scope.thumbnail = e.target.result;
                    });
                }
            });
        }
    }
    /*END getting the image in base64*/

    /*update the profile*/
    $scope.submitprofileUpdationForm = function(){
        $scope.isBusy = true;
        var data = {
            email: $localStorage.loginUser.uid,
            first_name: $scope.firstName,
            last_name: $scope.lastName,
            image: $scope.thumbnail
        }

        $http.put($rootScope.apiBaseURL + "/auth", data)
            .success(function(data) {
                $scope.isBusy = false;
                $localStorage.loginUser = data.data;
                toastr.success('Profile updated successfully', 'Success');
            })
            .error(function(error) {
                $scope.isBusy = false;
                console.log(error)
            });
    }
    /*END update the profile*/

    /*change password*/
    $scope.submitchangePasswordForm = function() {
        $scope.isBusy = true;
        var data = {
            password: $scope.nPassword, 
            password_confirmation: $scope.cPassword
        }

        $http.put($rootScope.apiBaseURL + "/auth/password", data)
            .success(function(data) {
                $scope.isBusy = false;
                toastr.success(data.message, 'Success');
                $scope.nPassword = "";
                $scope.cPassword = "";
            })
            .error(function(error) {
                $scope.isBusy = false;
                toastr.warning(error.errors[0], 'Warning');
                console.log(error)
            });
    }
    /*END change password*/

}]);
