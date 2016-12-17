blogApp.controller('editBlogController', ['$scope', '$state', '$http', '$rootScope', '$timeout', '$stateParams', 'toastr', function($scope, $state, $http, $rootScope, $timeout, $stateParams, toastr) {
    $scope.blogimageView = "";
    $scope.notification2 = {};

    /*for getting all tag list*/
    $http.get($rootScope.apiBaseURL + '/api/tags.json').success(function(data) {
            console.log(data)
            $scope.tagsAutoComplete2 = data;
        }).error(function() {
            $scope.tagsAutoComplete2 = [];
        })
        /* END for getting all tag list*/

    /*get the image in base64*/
    $scope.fileNameChanged = function(t) {
            $scope.notification = {};
            if (t.files && t.files[0] && t.files[0].type.indexOf('image') > -1) {
                $timeout(function() {
                    var fileReader = new FileReader();
                    fileReader.readAsDataURL(t.files[0]);
                    fileReader.onload = function(e) {
                        var image = new Image();
                        image.src = e.target.result;
                        image.onload = function(e) {
                            var height = this.height;
                            var width = this.width;
                            if (height < 500 && width < 1200) { // validation for image resolution
                                toastr.warning('Image should be 1200x500px or more.', 'Warning');
                            } else {
                                $timeout(function() {
                                    $scope.thumbnail = image.src;
                                });
                            }
                        };
                    }
                });
            }
        }
        /*END get the image in base64*/

    /*get the blog details from id*/
    $http.get($rootScope.apiBaseURL + '/api/blogs/' + $stateParams.blogId).success(function(data) {

            var tags = [];

            // for (var i = 0; i < data.tags.length; i++) {
            //     tags.push({ "text": data.tags[i].name })
            // }
            console.log("49", data)
            $scope.tags = data.tags;

            $rootScope.loading = false;
            $scope.blog = {
                "title": data.title,
                "body": data.body,
                "avatar": (data.avatar) ? data.avatar : 'img/post-bg.jpg'
            };
            $scope.thumbnail = (data.avatar) ? data.avatar : '';

        }).error(function() {
            console.log("error", data)
        })
        /*END get the blog details from id*/

    /*edit form for updating the blog*/
    $scope.submitFormBlog = function() {

            $scope.isBusy = true;
            var data = $scope.blog;
            data.avatar = $scope.thumbnail;

            var tags = $scope.tags.map(function(item) {
                return item['name'];
            });

            data.tag_list = tags;

            $http.put($rootScope.apiBaseURL + '/api/blogs/' + $stateParams.blogId, data)
                .success(function(data, status) {
                    $scope.isBusy = false;
                    toastr.success('Blog is updated successfully', 'Success');
                    /*$scope.notification.status = "show";
                    $scope.notification.message = "Blog is updated successfully";
                    $scope.notification.type = "success";*/
                })
                .error(function(data, status) {
                    $scope.isBusy = false;
                });
        }
        /*edit form for updating the blog*/

    /*auto-complete for the tags*/
    $scope.loadTags = function(query) {
        return $scope.tagsAutoComplete2.filter(function(tag) {
            return tag.name.indexOf(query) > -1;
        });
    };
    /*END auto-complete for the tags*/

}]);
