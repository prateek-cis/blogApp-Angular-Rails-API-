blogApp.controller('newBlogController', ['$scope', '$state', '$localStorage', '$http', '$rootScope', '$timeout', 'toastr', function($scope, $state, $localStorage, $http, $rootScope, $timeout, toastr) {
    $scope.blogimageView = "";
    $scope.notification = {};
    $rootScope.loading = false;

    /*for getting all tag list*/
    $http.get($rootScope.apiBaseURL + '/api/tags.json').success(function(data) {
            $scope.tagsAutoComplete2 = data;
        }).error(function() {
            $scope.tagsAutoComplete2 = [];
        })
        /* END for getting all tag list*/

    /*gets the image in base64*/
    $scope.fileNameChanged = function(t) {
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
                            if (height < 500 && width < 1200) {
                                toastr.warning('Image should be 1200x500px or more.', 'Warning'); /*validation for image resolution*/
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
        /*END gets the image in base64*/

    /*add the new blog*/
    $scope.submitFormBlog = function() {

            $scope.isBusy = true;
            $scope.blog.avatar = $scope.thumbnail;
            var data = $scope.blog;

            var tags = $scope.tags.map(function(item) {
                return item['name'];
            });

            data.tag_list = tags;

            $http.post($rootScope.apiBaseURL + '/api/blogs.json', data)
                .success(function(data, status) {
                    $scope.isBusy = false;
                    toastr.success('Blog successfully added.', 'Success');
                    $timeout(function() {
                        $state.go("my-blog")
                    }, 3000);
                })
                .error(function(data, status) {
                    $scope.isBusy = false;
                    toastr.error(data.error, 'Error');
                });
        }
        /*END add the new blog*/

    /*auto-complete for the tags*/
    $scope.loadTags = function(query) {
        return $scope.tagsAutoComplete2.filter(function(tag) {
            return tag.name.indexOf(query) > -1;
        });
    };
    /*END auto-complete for the tags*/

}]);
