blogApp.controller('forgotPasswordController', ['$scope', '$http', '$rootScope', 'toastr', function($scope, $http, $rootScope, toastr) {
    $rootScope.loading = false;
    $scope.notification = {};

    /*function for sending the email at the provided email-id*/
    $scope.getPassword = function() {
        $scope.isBusy = true;
        var data = {
            email: $scope.email,
            redirect_url: $rootScope.projectPageURL
        }
        $http.post($rootScope.apiBaseURL + '/auth/password', data)
            .success(function(data, status, headers, config) {
                $scope.isBusy = false;
                $scope.notification.status = "show";
                $scope.notification.message = data.message;
                $scope.notification.type = "success";
                $scope.email = "";
            })
            .error(function(error, status, header, config) {
                $scope.isBusy = false;
                toastr.warning(error.errors[0], 'Warning');
                console.log("e", error)
            });
    }
    /*END function for sending the email at the provided email-id*/

}]);
