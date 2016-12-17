blogApp.controller('blogDetailController', ['$rootScope', '$scope', '$stateParams', '$http', 'toastr', function($rootScope, $scope, $stateParams, $http, toastr) {
    $scope.notification = {};

    /*get blog details according to id*/
    $http.get($rootScope.apiBaseURL + '/api/blogs/' + $stateParams.blogId).success(function(data) {

        $scope.singleBlog = {
            "name": data.title,
            "detail": data.body,
            "postedBy": data.user.first_name +" "+ data.user.last_name,
            "postedAt": data.created_at,
            "avatar": data.avatar,
            "tags": data.tags
        }
        $scope.singleBlogComment = data.comments;
        $rootScope.loading = false;
    }).error(function() {
        $scope.loading = false;
    });
    /*END get blog details according to id*/

    /*add comments*/
    $scope.submitCommentForm = function() {
        $scope.isBusy = true;
        $http.post($rootScope.apiBaseURL + '/api/comments', {
                "blog_id": $stateParams.blogId,
                "body": $scope.$$childHead.commentText
            })
            .success(function(data, status) {
                $scope.isBusy = false;
                $scope.singleBlogComment.push(data);
                toastr.success('Comment successfull added.', 'Success');
                $scope.$$childHead.commentText = "";
            })
            .error(function(data, status) {
                $scope.isBusy = false;
                toastr.warning(data.errors.full_messages[0], 'Warning');
            });
    }
    /*END add comments*/
}]);
