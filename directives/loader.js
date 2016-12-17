blogApp.directive('loading', function() {
    return {
        restrict: 'E',
        replace: true,
        template: '<div id="mydiv"><img src="img/loader.gif" class="ajax-loader"/></div>',
        link: function(scope, element, attr) {
            scope.$watch('loading', function(val) {
                if (val)
                    $(element).show();
                else
                    $(element).hide();
            });
        }
    }
})
