ng-labs-datagrid
================

A datagrid directive for angular.

## Usage

include labsDatagrid in your app
```
angular.module('exampleApp', [labsDatagrid])
```

example controller:
```
angular.module('exampleApp').controller('exampleCtrl', function($scope) {
	$scope.columns = [{name:'First Name',column:'firstName'},{name:'Last Name',column: 'lastName'}];
    $scope.rows = [{
    	lastName:'Warner',
        firstName:'Andy
    },
    {
    	lastName: 'Doe',
        firstName: 'Jon'
    }];
    $scope.sort = {}
    $scope.filter = {}
    $scope.pageFn = function(page) {
    	//DO SOMETHING HERE
    }
})
```

adding a datagrid to your page

labs-datagrid expects you to write your own row markup. Due to some strange angular/browser things with TR we get to use the div tag for our cells (the datagrid includes a style that changes the display of the first level of divs to table-cell)

```
<labs-datagrid>
<div>{{row.firstName}}</div><div>{{row.lastName}}</div>
</labs-datagrid>
```

### Side Note:

Try using [labsCollection](https://github.com/bertramdev/ng-labs-collection) with labsDatagrid if you use labsCollection as the rows attribute you wont need to set sort, filter or pageFn
