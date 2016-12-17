blogApp.controller('signUpController', ['$scope', '$state', '$http', '$rootScope', 'toastr', '$timeout', '$state', function($scope, $state, $http, $rootScope, toastr, $timeout, $state) {
    $scope.notification = {};
    $rootScope.loading = false;

    /*for signing-up the user*/
    $scope.submitSignUpForm = function() {
            $scope.isBusy = true;

            var data = {
                "email": $scope.email,
                "password": $scope.password,
                "password_confirmation": $scope.password,
                "first_name": $scope.fname,
                "last_name": $scope.lname,
                "redirect_url": "http://teamblog.esy.es/teamBlog/#/confirm-account" /*not useful yet*/
            };

            $http.post($rootScope.apiBaseURL + '/auth', data)
                .success(function(data, status, headers, config) {
                    $scope.isBusy = false;
                    toastr.success('You\'re successfull signed-up', 'Success');
                    $timeout(function() {
                        $state.go("login")
                    }, 3000);
                })
                .error(function(data, status, header, config) {
                    $scope.isBusy = false;
                    toastr.error(data.errors.full_messages[0], 'Error');
                });
        }
        /*END for signing-up the user*/
}]);
