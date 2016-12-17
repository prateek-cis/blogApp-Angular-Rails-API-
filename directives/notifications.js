blogApp.directive('notification', ['$timeout', function($timeout) {
    return {
        restrict: 'E',
        templateUrl: 'view/notification.html',
        replace: true,
        scope: {
            alertData: "="
        },
    };
}]);
