blogApp.controller('myBlogListController', ['$rootScope', '$scope', '$state', '$http', function($rootScope, $scope, $state, $http) {
    $scope.editVisible = true;
    $scope.numOfBlogs = 3;


    $scope.fileNameChanged = function(t) {
        if (t.files && t.files[0]) {
            var reader = new FileReader();
            reader.onload = function(e) {
                $('#blogimageView').attr('src', e.target.result);
            }
            reader.readAsDataURL(t.files[0]);
        }
    }

    /*gets the all the logged-in user's blogs*/
    $http.get($rootScope.apiBaseURL + '/api/blogs').success(function(data) {
        $scope.blogList = data;
        $scope.$emit("sendLoading");
        $rootScope.loading = false;
    }).error(function(error) {
        $rootScope.loading = false;
    });
    /*END gets the all the logged-in user's blogs*/

    /*delete the blog*/
    $scope.deleteSingleBlog = function(item) {
        $rootScope.loading = true;
        $http.delete($rootScope.apiBaseURL + '/api/blogs/' + item.id).success(function(data) {
            var index = $scope.blogList.indexOf(item);
            $rootScope.loading = false;
            $scope.blogList.splice(index, 1);
        }).error(function(error) {
            $rootScope.loading = false;
        })
    }
    /*END delete the blog*/

    $scope.nextPosts = function() { $scope.numOfBlogs += 3;} /*get the next three blogs*/

}]);
