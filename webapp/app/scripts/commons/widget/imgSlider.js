var bdcos = angular.module("bdcos", ["imgSlider"]);

bdcos.controller('mainCtrl',['$scope','$rootScope',function($scope,$rootScope){
	//dark
	$rootScope.theme = 'vanilla';
	console.log($rootScope.theme);
	initThemeFile($rootScope.theme);
}]);

var imgSlider = angular.module("imgSlider", []);
imgSlider.controller('imgSliderDesignControl',['$scope','$rootScope',function($scope,$rootScope){
	$scope.theme=$rootScope.theme;
	console.log($rootScope.theme);
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
	$scope.preView = function(data,index){
		$scope.selectModelFirst.src=$scope.selectModel.selectedType0;
		for(var key in $scope.selectModel){
			var str = key;
			if(key != 'selectedType0'){
				var id = key.substring(key.length-1,key.length);
				for(var i=0;i<$scope.sliderArray.length;i++){
					if($scope.sliderArray[i].dataTo == id){
						$scope.sliderArray[i].src = $scope.selectModel[key];
					}
				}
			}
		}
	}
	
	$scope.addChartConfig = function(){
		var str = "selectedType"+$scope.chartConfig.length;
		$scope.chartConfig.push({
			ngModel:str
		});
		$scope.selectModel[str] = '';
		
		$scope.sliderArray.push({
			dataTo:$scope.chartConfig.length-1,
			src:''
		});
	}
	
	//ngModel
	$scope.selectModel = {
		selectedType0:'',
	};
	$scope.selectModelFirst = {
		src : ''
	}
	//ngModel key
	$scope.chartConfig = [{
		ngModel:'selectedType0'
	}];
	
	//生成轮播插件表单
	$scope.sliderArray=[];
	
}]);
imgSlider.directive('imgSlider', function() {
    return {
        templateUrl : 'app/views/global/slider/imgSlider.html',
    }
});  