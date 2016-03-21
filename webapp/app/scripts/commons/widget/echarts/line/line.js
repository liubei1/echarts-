/*
 *
 *  * line.js
 *  * Created on 16-2-25 上午11:04 by wuyufei
 *  *
 *  * Copyright (c) ByseeCloud 2011-2016.
 *  * All rights reserved.
 *  *
 *  * This software is furnished under a license. Use, duplication,
 *  * disclosure and all other uses are restricted to the rights
 *  * specified in the written license agreement.
 *
 */
var charts = angular.module("charts",['datasources']);

charts.directive('lineChart', function (DatasourceService) {
    return {
        restrict: 'EA',
        template: '<div style="width:100%;height:100%;">\
                        <a href="#" class="btn btn-black" ng-click="reload()" ng-hide="{{production}}"><span>Reload</span></a>\
                        <div style="width:100%;height:100%;"></div>\
                    </div>',
        scope: {
            production: "@",
            configKey: "@",
            dataKey: "@"
        },
        controllerAs:'lineChartController',
        controller:function($scope, $element, $attrs, $transclude) {
            console.log($element.find('div')[1]);
            // 控制器逻辑放在这里
            var chart = echarts.init($element.find('div')[1]);
            // 指定图表的配置项和数据
            var option = {
                title: {
                    text: 'ECharts 入门示例'
                },
                tooltip: {},
                legend: {
                    data: ['销量']
                },
                xAxis: {
                    data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
                },
                yAxis: {},
                series: [{
                    name: '销量',
                    type: 'bar',
                    data: [5, 20, 36, 10, 10, 20]
                }]
            };
            $scope.instance = chart;
            $scope.option = option;
            $scope.reload = function(){
                console.log(".............");
                option.xAxis = {
                    data: ["衬衫",  "雪纺衫",  "高跟鞋","羊毛衫", "袜子"]
                }
                $scope.instance.setOption($scope.option);
            }
        },
        compile: function compile(tElement, tAttrs, transclude) {
            return {
                pre: function preLink(scope, iElement, iAttrs, controller) {
                },
                post: function postLink(scope, iElement, iAttrs, controller) {
                    var result = DatasourceService.loadData('login');
                    console.log(result);
                    // 使用刚指定的配置项和数据显示图表。
                    scope.instance.setOption(scope.option);
                }
            }
        }
    }
});

/*charts.directive('lineChartCustomize', function (DatasourceService) {
    return {
        restrict: 'EA',
        template: '<div style="width:100%;height:100%;" class="row">\
                        <div class="col-md-6">\
                            <a href="#" class="btn btn-black" ng-click="reload()"><span>Reload</span></a>\
                        </div>\
                        <div class="col-md-6">\
                            <div line-chart production="false"></div>\
                        </div>\
                    </div>',
        scope: {
        },
        require:'^lineChart',
        compile: function compile(tElement, tAttrs, transclude) {
            return {
                pre: function preLink(scope, iElement, iAttrs, controller) {
                },
                post: function postLink(scope, iElement, iAttrs, lineChartController) {
                    console.log(lineChartController);
                    scope.reload = lineChartController.reload();
                }
            }
        }
    }
});*/
