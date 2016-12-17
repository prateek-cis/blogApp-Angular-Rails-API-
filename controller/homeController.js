blogApp.controller('homeController', ['$scope', '$localStorage', '$state', '$http', '$rootScope', function($scope, $localStorage, $state, $http, $rootScope) {
    $scope.numOfBlogs = 3;
    $scope.selectTag = [];

    /*get all the tags*/
    $http.get($rootScope.apiBaseURL + '/api/tags.json').success(function(data) {
        $scope.allTags = data;
    }).error(function(error) {
        console.log(error)
    });
    /*END get all the tags*/


    $scope.nextPosts = function() { $scope.numOfBlogs += 3; } /*function for getting the next three blogs*/

    /*select/un-select the tags*/
    $scope.selectDeselect = function(tagName) {

            if ($scope.selectTag.indexOf(tagName) !== -1) {
                $scope.message = 'artNr already exists!';
                $scope.selectTag.splice($scope.selectTag.indexOf(tagName), 1);
            } else {
                $scope.selectTag.push(tagName);
            }
        }
        /*END select/un-select the tags*/

    /*check if the tag is selected*/
    $scope.checkIsSelect = function(tagName) {
            return ($scope.selectTag.indexOf(tagName) !== -1) ? "active" : "";
        }
        /*END check if the tag is selected*/

    /*called when the tags status gets changed*/
    $scope.$watch('selectTag', function(newVal, oldVal) {
        var config = {
            params: { "tag_name[]": $scope.selectTag },
            headers: { 'Accept': 'application/json' }
        };

        if ($scope.selectTag.length > 0) {
            $rootScope.loading = true;
            $http.get($rootScope.apiBaseURL + '/api/tags/tagged_blogs.json', config).success(function(data) {
                $rootScope.loading = false;
                $scope.blogList = data;
            }).error(function(error) {
                console.log(error)
                $rootScope.loading = false;
            });
        } else {
            $rootScope.loading = true;
            $http.get($rootScope.apiBaseURL + '/api/blogs/all_posts').success(function(data) {
                $scope.blogList = data;
                $rootScope.loading = false;
            }).error(function() {
                $rootScope.loading = false;
            });
        }
    }, true);
    /*END called when the tags status gets changed*/
}]);
