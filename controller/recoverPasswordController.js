blogApp.controller('recoverPasswordController', ['$scope', '$http', '$rootScope', 'toastr', '$timeout', '$state', function($scope, $http, $rootScope, toastr, $timeout, $state) {
    $rootScope.loading = false;

    /*changing the password after requesting for forgot passowrd*/
    $scope.recoverPassword = function() {
            $scope.isBusy = true;
            var data = {
                password: $scope.nPassword,
                password_confirmation: $scope.cPassword
            }
            $http.put($rootScope.apiBaseURL + '/auth/password', data)
                .success(function(data, status, headers, config) {
                    $scope.isBusy = false;
                    toastr.success(data.message, 'Success');
                    $timeout(function() {
                        location.href = "http://localhost/teamBlog/#/login";
                    }, 3000);
                    console.log("s", data)
                })
                .error(function(error, status, header, config) {
                    $scope.isBusy = false;
                    console.log("e", error)
                });
        }
        /*END changing the password after requesting for forgot passowrd*/

}]);
