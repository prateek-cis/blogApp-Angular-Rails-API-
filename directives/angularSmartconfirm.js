blogApp.directive('angularSmartconfirm', ['$compile', function($compile){

		return{
			restrict: 'EA',
			scope:{
				"confirm": "&"
			},
			transclude: true,
			template:
			'<a ng-hide="show" ng-click="show=true"><ng-transclude/></a>' +
			'<div ng-show="show">' +
			'<a class="delete-blog-icon" href="javascript:void(0)" ng-click="confirm()"><span class="glyphicon glyphicon-ok"></span></a>' +
			'<a href="javascript:void(0)" ng-click="show=false"><span class="glyphicon glyphicon-remove"></span></a>' +
			'</div>',
			link: function(scope, element, attrs){
			}
		}

	}]);