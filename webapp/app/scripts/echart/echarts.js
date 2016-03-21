/**
 * echart绘制模块
 */
var echartsModel = angular.module("echarts",[]);

echartsModel.controller('drawChartsController', ['$scope','$stateParams','echartsService',  function($scope,$stateParams,echartsService) {
	var type = $stateParams.type;
	$scope.type = type;
	$scope.chartScript;
	echartsService.getChartScript($scope,type);
	$scope.$watch('chartScript',function(newValue,oldValue, $scope){
		if(typeof(newValue)!='undefined'){
			echartsService.drawChart($scope);
		}
	});
	$scope.drowChart = function(){
		echartsService.drawChart($scope);
	}
}]);

echartsModel.directive('drawChartContainer', function() {  
    return {  
        scope: {  
            id: "@",  
            legend: "=",  
            item: "=",  
            data: "="  
        },  
        restrict: 'E', // E = Element, A = Attribute, C = Class, M = Comment  
        template: '<div style="height:400px;width:100%;"></div>',  
        replace: true
    };  
});

echartsModel.factory('echartsService',['$http',function($http){
    return {
        drawChart: function($scope){
        	var chartScript = $scope.chartScript;
        	var type = $scope.type;
        	var chartRequire = ['echarts'];
        	if(type.indexOf('map')>0){
        		var array = type.split('_');
        		var chartMap = 'echarts/chart/map/'+array[array.length-1];
        		chartRequire.push(chartMap);
        	}
        	require(chartRequire,  
        	        function (ec) { 
        				var myChart = ec.init(document.getElementById('drawChartContainer'));
        				eval(chartScript);
        				if(chartScript.length>0 && chartScript.indexOf('myChart.setOption')<0){
        					myChart.showLoading();
        					myChart.setOption(option);
    					    myChart.hideLoading();
        				}
        	        }
	        );
        },
        getChartScript:function(scope,type){
        	
        	$http.get('app/data/echarts/script/'+type+'_script.json')
        	.success(function(data) {
        		scope.chartScript = data;
        	});
        }
    }
}]);