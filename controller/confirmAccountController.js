blogApp.controller('confirmAccountController', ['$rootScope', '$scope', 'toastr', '$timeout', function($rootScope, $scope, toastr, $timeout) {
    $rootScope.loading = false;
    $scope.notification = {};
    $scope.notification.status = "show";
    $scope.notification.message = "Your account has been confirmed, you'll be shortly redirected to the login page.";
    $scope.notification.type = "success";

    $timeout(function() {
        // location.href = "http://teamblog.esy.es/teamBlog/#/login";
        location.href = "http://localhost/teamBlog/#/login";
    }, 3000);
}]);
