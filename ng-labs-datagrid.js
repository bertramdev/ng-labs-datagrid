/**
* labsDatagrid Module
*
* An ext-like datagrid directive
*/
angular.module('labsDatagrid', []).
	directive('labsDatagrid', ['$parse', function ($parse) {
		// Runs during compile
		return {
			// name: '',
			// priority: 1,
			// terminal: true,
			scope: {
			 	'columns': '=',
			 	'pageFn': '&',
			 	'rowTemplateUrl': '=',
			 	'sort' : '=',
			 	'filter': '=',
			 	'rows': '='
			}, // {} = isolate, true = child, false/undefined = no change
			controller: function($scope, $element, $attrs, $transclude) {
				$scope.sort = $scope.sort || {};
				$scope.setSort = function (col) {
					var dir = 'asc';
					if ($scope.sort.column === col.column && $scope.sort.direction === 'asc') {
						dir = 'desc'
					}
					$scope.sort.column = col.column;
					$scope.sort.direction = 'desc';
				}
			},
			// require: 'ngModel', // Array = multiple requires, ? = optional, ^ = check parent elements
			restrict: 'E', // E = Element, A = Attribute, C = Class, M = Comment
			// template: '',
			templateUrl: 'datagrid.html',
			replace: false,
			transclude: true,
			compile: function (tElement, tAttrs) {
				var rpt = document.createAttribute('ng-repeat');
				rpt.nodeValue = 'row in rows';
				tElement.find('tbody tr')[0].attributes.setNamedItem(rpt);
				return function (scope, element, attr) {
				}        
			}
		};
	}])
.run (['$templateCache', function ($templateCache) {
	$templateCache.put('datagrid.html', '<div class="datagrid">' +
	'<div class="header"></div>' +
	'<div class="filter-bar"></div>' +
	'<table class="table">' +
	'	<thead>' +
	'		<tr>' +
	'			<th ng-repeat="col in columns" ng-click="setSort(col)">{{col.name}}</th>' +
	'		</tr>' +
	'	</thead>' +
	'	<tbody>' +
	'		<tr class="labs-datagrid" ng-transclude>' +			
	'		</tr>' +
	'	</tbody>' +
	'</table>' +
	'<div class="footer"></div>' +
	'</div>' +
	'<style>' +
	'tr.labs-datagrid div {' +
	'	display:table-cell;' +
	'}' +
	'</style>');
}]);