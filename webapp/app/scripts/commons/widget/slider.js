var bdcos = angular.module("bdcos", ["slider"]);

bdcos.controller('mainCtrl',['$scope','$rootScope',function($scope,$rootScope){
	//dark
	$rootScope.theme = 'vanilla';
	console.log($rootScope.theme);
	initThemeFile($rootScope.theme);
}]);

var slider = angular.module("slider", []);
slider.controller('echartsDesignControl',['$scope','$rootScope',function($scope,$rootScope){
	$scope.theme=$rootScope.theme;
	$scope.themeOption = [
		{name:'炫黑',id:'dark'},
		{name:'暖色',id:'vanilla'}
	]
	$scope.themeChange = function(){
		debugger;
		//request  后台保存主题变量的值
	}
	if($scope.theme=='dark'){
		$scope.panelClass = "add-comment add-comment-velvet styled";
	}else if($scope.theme=='vanilla'){
		$scope.panelClass = "add-comment styled boxed boxed-cream";
	}
	$scope.removeChartConfig = function(index){
		$scope.chartConfig.splice(index-1,1);
		$scope.sliderArray.splice(index-1,1);
		//轮播返回第一页
		$('#myCarousel').carousel(0); 
	}
	$scope.change = function(data,index){
		console.log(index);
		console.log($scope.sliderArray);
		if(index!=0){
			$scope.sliderArray[index-1].src = $scope.selectModel[data].split('_')[1];
		}
		
	}
	
	$scope.addChartConfig = function(){
		var str = "selectedType"+$scope.chartConfig.length;
		$scope.chartConfig.push({
			ngModel:str
		});
		$scope.selectModel[str] = $scope.targetType[0].id+'_'+$scope.targetType[0].src;
		
		$scope.sliderArray.push({
			dataTo:$scope.chartConfig.length-1,
			src:'app/images/echarts/line1.png'
		});
	}
	
	//http
	$scope.targetType = [
		{name:'cpu利用率折线图',id:'cpuLine',src:"app/images/echarts/line1.png"},
		{name:'memory利用率折线图',id:'memoryLine',src:"app/images/echarts/line.png"},
		{name:'cpu利用率饼图',id:'cpuPie',src:"app/images/echarts/pie1.png"},
		{name:'memory利用率饼图',id:'memoryPie',src:"app/images/echarts/pie2.png"},
		{name:'disk利用率饼图',id:'diskPie',src:"app/images/echarts/pie3.png"}
	];
	//ngModel
	$scope.selectModel = {
		selectedType0:$scope.targetType[0].id+'_'+$scope.targetType[0].src,
	};
	$scope.selectModelFirst = {
		src : $scope.targetType[0].src
	}
	//ngModel key
	$scope.chartConfig = [{
		ngModel:'selectedType0'
	}];
	
	//生成轮播插件表单
	$scope.sliderArray=[];
	
}]);
slider.directive('slider', function() {
    return {
        templateUrl : 'app/views/global/slider/slider.html',
    }
});  