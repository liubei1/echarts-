/*
 *
 *  * echarts.js
 *  * Created on 16-2-26 下午8:43 by wuyufei
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
        templateUrl: './app/scripts/commons/widget/echarts/echarts.html',
        scope: {
            production: "@",
            configKey: "@",
            dataKey: "@"
        },
        controllerAs:'lineChartController',
        controller:function($scope,$http, $element, $attrs, $transclude) {
            $scope.chart = {};
            $scope.chartSelectData = [{
				name:'测试数据一',
				id:'app/data/echarts/data/HK.json'
			}];
            $scope.chartDataChange = function(){
            	console.log($scope.selectChartDataModel);
            	$http({
                 	url:$scope.selectChartDataModel,
                 	method:'GET'
             	}).success(function(data,header,config,status){
             		$scope.chartSourceData = JSON.stringify(data);
             	}).error(function(data,header,config,status){
             	});
            }
            $scope.chartOption ='';
            $scope.$watch('chartOption',function(newValue,oldValue, $scope){
        		if(newValue!=''){
        			var myChart = $scope.instance;
        			eval($scope.chartOption);
        			$('#chartDesignTabs li:eq(1) a').tab('show')
        			$scope.instance.clear();
        			if($scope.chartOption.indexOf('myChart.setOption')<0){
        				$scope.instance.setOption(option);
        			}
        		}
        		
        	});
            $scope.selectChartType = function($event){
            	var name = $event.target.name;
            	 $http({
                 	url:'app/data/echarts/script/'+name+'.json',
                 	method:'GET'
             	}).success(function(data,header,config,status){
             		$scope.chartOption = data;
             	}).error(function(data,header,config,status){
             	});
            }
            
            // 控制器逻辑放在这里
            var chart = echarts.init($element.find('div#mainss')[0]);
            // 指定图表的配置项和数据
            var option = {
	        	    xAxis : [{
        	            type : 'category',
        	            data : ['周一','周二','周三','周四','周五','周六','周日']
        	        }],
        	        yAxis: [{
        	        	type : 'value'
        	        }],
	        	    series : [{
        	            type:'line',
        	            data:[120, 132, 101, 134, 90, 230, 210]
        	        }]
            };
            $scope.instance = chart;
            $scope.option = option;
            $scope.reload = function(){
                option.xAxis = {
                    data: ["衬衫", "裤子", "雪纺衫",  "高跟鞋","羊毛衫", "袜子"]
                }
                $scope.instance.setOption($scope.option);
            }
        },
        compile: function compile(tElement, tAttrs, transclude) {
            return {
                pre: function preLink(scope, iElement, iAttrs, controller) {
                },
                post: function postLink(scope, iElement, iAttrs, controller) {
                    //var result = DatasourceService.loadData('login');
                    //console.log(result);
                    // 使用刚指定的配置项和数据显示图表。
                    scope.instance.setOption(scope.option);
                    scope.$watch('chart',function(){
                        scope.option.title={
                            text: scope.chart.title,
                            backgroundColor:scope.chart.backgroundColor
                        }
                        scope.instance.setOption(scope.option);
                    },true)
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
