blogApp.controller('loginController', ['$scope', '$localStorage', '$state', '$http', '$rootScope', 'toastr', function($scope, $localStorage, $state, $http, $rootScope, toastr) {
    $scope.notification = {};
    $rootScope.loading = false;

    /*login function*/
    $scope.submitForm = function() {
        $scope.isBusy = true;
        var data = $scope.user;

        $http.post($rootScope.apiBaseURL + '/auth/sign_in', data)
            .success(function(data, status, headers, config) {
                $scope.isBusy = false;
                $localStorage.isLogin = true;
                $localStorage.loginUser = data.data;

                // changing the menu
                $scope.$emit("sendLoginInfo");
                $state.go("dashboard");
            })
            .error(function(data, status, header, config) {
                $scope.isBusy = false;
                toastr.error(data.errors[0], 'Error');
            });
    }
}]);
