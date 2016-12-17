var blogApp = angular.module('blogApp', ['ui.router', 'ngStorage', 'ui.bootstrap', 'ng-token-auth', 'ngAnimate', 'toastr', 'ngTagsInput', 'textAngular']);

blogApp.config(function($stateProvider, $urlRouterProvider, $authProvider) {

    $urlRouterProvider.otherwise('/home');

    $stateProvider

    // HOME STATES AND NESTED VIEWS ========================================
        .state('home', {
        url: '/home',
        templateUrl: 'view/home.html',
        data: {
            requireLogin: false
        }
    })

    // nested list with custom controller
    .state('home.postlist', {
        url: '/list',
        templateUrl: 'view/partial-home-list.html',
        data: {
            requireLogin: false
        }
    })

    // ABOUT PAGE AND MULTIPLE NAMED VIEWS =================================
    .state('about', {
            url: '/about',
            templateUrl: 'view/about.html',
            data: {
                requireLogin: false
            }
        })
        .state('login', {
            url: '/login',
            templateUrl: 'view/login.html',
            data: {
                requireLogin: false
            }
        })
        .state('sign-up', {
            url: '/sign-up',
            templateUrl: 'view/sign-up.html',
            data: {
                requireLogin: false
            }
        })
        .state('blogDetail', {
            url: '/blog/:blogId',
            templateUrl: 'view/blogDetail.html',
            data: {
                requireLogin: false
            }
        })
        .state('dashboard', {
            url: '/dashboard',
            templateUrl: 'view/dashboard.html',
            data: {
                requireLogin: true
            }
        })
        .state('my-blog', {
            url: '/my-blog',
            templateUrl: 'view/myBlogList.html',
            data: {
                requireLogin: true
            }
        })
        .state('add-blog', {
            url: '/add-blog',
            templateUrl: 'view/newBlog.html',
            data: {
                requireLogin: true
            }
        })
        .state('edit-blog', {
            url: '/edit-blog/:blogId',
            templateUrl: 'view/editBlog.html',
            data: {
                requireLogin: true
            }
        })
        .state('forgot-password', {
            url: '/forgot-password',
            templateUrl: 'view/forgotPassword.html',
            data: {
                requireLogin: false
            }
        })
        .state('recover-password', {
            url: '/recover-password',
            templateUrl: 'view/recoverPassword.html',
            data: {
                requireLogin: false
            }
        })
        .state('confirm-account', {
            url: '/confirm-account',
            templateUrl: 'view/confirm-account.html',
            data: {
                requireLogin: false
            }
        });

    /*it will be used at the time of api calling for login user*/
    $authProvider.configure({
        apiUrl: 'https://knowledge-blogs.herokuapp.com',
        tokenFormat: {
            "access-token": "{{ token }}",
            "token-type": "Bearer",
            "client": "{{ clientId }}",
            "expiry": "{{ expiry }}",
            "uid": "{{ uid }}"
        }
    });

});

blogApp.run(['$rootScope', '$state', '$localStorage', function($rootScope, $state, $localStorage) {
    $rootScope.$on('$stateChangeStart', function(event, $stateProvider) {
        var requireLogin = $stateProvider.data.requireLogin;
        if (requireLogin && typeof $localStorage.isLogin === "undefined" && !$localStorage.isLogin) {
            event.preventDefault();
            $state.go("login");
        }
    });
    $rootScope.apiBaseURL = "https://knowledge-blogs.herokuapp.com";
    $rootScope.projectPageURL = "http://localhost/teamBlog/#/recover-password";
    $rootScope.$on("$stateChangeSuccess", function(event) {
        $rootScope.loading = true;
    });

}]);

blogApp.controller('blogAppController', ['$scope', '$localStorage', '$state', '$http', '$rootScope', '$location', function($scope, $localStorage, $state, $http, $rootScope, $location) {
    $scope.isLogin = (typeof $localStorage.isLogin !== "undefined" && $localStorage.isLogin == true) ? true : false;

    $scope.logoutUser = function() {
        delete $localStorage.isLogin;
        delete $localStorage.loginUser;
        $scope.isLogin = false;
        $state.go('login');
    }
    $scope.$on("sendLoginInfo", function(evt) {
        $scope.isLogin = (typeof $localStorage.isLogin !== "undefined" && $localStorage.isLogin == true) ? true : false;
    });

}]);
