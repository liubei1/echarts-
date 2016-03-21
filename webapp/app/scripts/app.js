var bdcos = angular.module("bdcos",["ngProgress","ui.router","translate","config",/*"echarts",*/"charts","datasources"/*"header", "topNav" */])
    .config(['$stateProvider', '$urlRouterProvider', function($stateProvider,$urlRouterProvider) {
    	$stateProvider
        .state('layout', {
        	url: '/layout',
            templateUrl: 'app/views/layout/layout.html'
        })
        .state('dashboardv2', {
            url: '/dashboardv2',
            templateUrl: 'app/views/dashboard/dashboardv2.html'
        })
        .state('charts', {
            url: '/charts',
            templateUrl: 'app/views/widget/charts.html'
        })
        .state('drawCharts', {
        	url: '/drawCharts?c&type',
            templateUrl: 'app/views/echart/drawCharts.html'
        })
        .state('form.profile', {
            url: '/profile',
            templateUrl: 'form-profile.html'
        })
        .state('form.interests', {
            url: '/interests',
            templateUrl: 'form-interests.html'
        })
        .state('form.payment', {
            url: '/payment',
            templateUrl: 'form-payment.html'
        });
//    	$urlRouterProvider.otherwise('/charts');
    	$urlRouterProvider.when("", "/charts");
    }]);

bdcos.run(['$rootScope', '$window', '$location', '$log','$state','ngProgressFactory', function ($rootScope, $window, $location, $log ,$state,ngProgressFactory) {
    /*var locationChangeStartOff = $rootScope.$on('$locationChangeStart', locationChangeStart);
     var locationChangeSuccessOff = $rootScope.$on('$locationChangeSuccess', locationChangeSuccess);  */
    $rootScope.name = 'Lars';
    $rootScope.show = false;
    $rootScope.color = 'firebrick';
    $rootScope.height = '2px';
    $rootScope.contained_progressbar = ngProgressFactory.createInstance();
    $rootScope.contained_progressbar.setParent(document
        .getElementById('ngProcess'));
    $rootScope.contained_progressbar.setAbsolute();

    //	$rootScope.contained_progressbar.start();
    //	$timeout(function() {
    //		$scope.progressbar.complete();
    //		$scope.show = true;
    //	}, 2000);

    /*$rootScope.setWidth = function(new_width, $event) {
     $scope.progressbar.set(new_width);
     $event.preventDefault();
     }

     $rootScope.startProgress = function($event) {
     $event.preventDefault();
     $scope.progressbar.start();
     }

     $rootScope.increment = function($event) {
     $event.preventDefault();
     $scope.progressbar.set($scope.progressbar.status() + 9);
     }

     $rootScope.new_color = function($event, color) {
     $event.preventDefault();
     $scope.progressbar.setColor(color);
     }

     $rootScope.new_height = function($event, new_height) {
     $event.preventDefault();
     $scope.progressbar.setHeight(new_height);
     }

     $rootScope.completeProgress = function($event) {
     $event.preventDefault();
     $scope.progressbar.complete();
     }

     $rootScope.stopProgress = function($event) {
     $event.preventDefault();
     $scope.progressbar.stop();
     }

     $rootScope.resetProgress = function($event) {
     $scope.progressbar.reset();
     $event.preventDefault();
     }

     $rootScope.start_contained = function($event) {
     debugger;
     $scope.contained_progressbar.start();
     $event.preventDefault();
     }

     $rootScope.complete_contained = function($event) {
     $scope.contained_progressbar.complete();
     $event.preventDefault();
     }

     $rootScope.reset_contained = function($event) {
     $scope.contained_progressbar.reset();
     $event.preventDefault();
     }*/

    var routeChangeStartOff = $rootScope.$on('$stateChangeStart', routeChangeStart);
    var routeChangeSuccessOff = $rootScope.$on('$stateChangeSuccess', routeChangeSuccess);

    function locationChangeStart(event) {
        //$log.log('locationChangeStart');
        //$log.log(arguments);
    }

    function locationChangeSuccess(event) {
        //$log.log('locationChangeSuccess');
        //$log.log(arguments);
    }

    function routeChangeStart(event) {
        $rootScope.contained_progressbar.start();
    }

    function routeChangeSuccess(event) {
        $rootScope.contained_progressbar.complete();
        //$log.log(arguments);
    }
}]);

bdcos.controller("mainCtrl", [
    '$scope',
    '$timeout',
    /*'ngProgressFactory',*/
    function($scope, $timeout/*, ngProgressFactory*/) {
        /*$scope.barData = false;
        $scope.$on("topSilderDataChange",function (event, msg) {

            $scope.barData = true;
        });

        $scope.dashboard1 = function(){
            alert('fda');
        }

        $scope.topbar = [{
            title:'系统首页',
            cssClass:'heading',
            href:'javascript:void(0);'
        },{
            title:'系统首页V1',
            cssClass:'hidden-sm hidden-xs',
            href:'#/dashboardv1'
        },{
            title:'系统首页V2',
            cssClass:'hidden-sm hidden-xs',
            href:'#/dashboardv2'
        },{
            title:'系统首页V3',
            cssClass:'hidden-sm hidden-xs',
            href:'#/dashboardv3'
        }];

        $scope.$on("topSilderParentChange",function (event, msg) {
            if(msg.data.child){
                event.stopPropagation();
                event.preventDefault();
                if(!$scope.childCheck){
                    $scope.topbar = msg.data.child;
                }
            }else{
                $scope.topbar = [{
                    title:msg.data.title,
                    cssClass:'heading',
                    href:'javascript:void(0);'
                }]
            }
        });

        $scope.$on("topSilderChange",function (event, msg) {
            if(msg.data.child){
                debugger;
                event.stopPropagation();
                event.preventDefault();
                $scope.topbar = msg.data.child;
                $scope.childCheck = true;
                for(var i=0;i<msg.data.child.length;i++){
                    if(msg.data.child[i].title == msg.link.title){
                        msg.data.child[i].cssClass = 'selected';
                    }else{
                        msg.data.child[i].cssClass = '';
                    }
                }
                console.log(msg.link);
            }else{
                $scope.topbar = [{
                    title:msg.data.title,
                    cssClass:'heading',
                    href:'javascript:void(0);'
                }];
                $scope.childCheck = true;
            }
        });

        $scope.$on("topSilderChildChange",function (event, msg) {
            if(msg.data.child){
                debugger;
                event.stopPropagation();
                event.preventDefault();
                if(msg.link.child&&msg.child){
                    $scope.topbar = msg.link.child;
                    for(var i=0;i<msg.link.child.length;i++){
                        if(msg.link.child[i].title == msg.child.title){
                            msg.link.child[i].cssClass = 'selected';
                        }else{
                            msg.link.child[i].cssClass = '';
                        }
                    }
                    $scope.childCheck = true;
                }
            }
        });*/
    }
]);

/*
var titlebar = angular.module("header", []);
titlebar.directive('appHeader', function() {
    return {
        templateUrl : 'app/views/global/header.html',
    }
});

var topNav = angular.module("topNav", []);
topNav.directive('topNav', function() {
    return {
        templateUrl : 'app/views/global/topNav.html',
    }
});

topNav.controller("topNavCtrl", [
    '$scope', '$timeout','$http',
    function($scope, $timeout,$http) {
        $scope.changeClass = function(item,link,child){
            var title = item.title;
            for(var i=0;i<$scope.data.length;i++){
                if(title == $scope.data[i].title){
                    $scope.data[i].active = true;
                    var obj = {
                        data:$scope.data[i],
                        link:link,
                        child:child
                    };
                    if(link){
                        if(link.child){
                            $scope.$emit("topSilderChildChange", obj);
                        }else{
                            $scope.$emit("topSilderChange", obj);
                        }
                    }else{
                        $scope.$emit("topSilderParentChange", obj);
                    }
                }else{
                    $scope.data[i].active = false;
                }
            }
        }
        $scope.data = [];
        $http({
            method: 'GET',
            url:'app/data/topBarData.js',
        }).success(function(data,status,headers,config) {
            console.log(data);
            $scope.data = eval(data);
            $scope.$emit("topSilderDataChange", data);
        }).error(function(data,status,headers,config) {
            // 当响应以错误状态返回时调用
        });
    }
]);*/
