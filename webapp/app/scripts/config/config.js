/*
 *
 *  * config.js
 *  * Created on 16-2-21 下午3:12 by wuyufei
 *  *
 *  * Copyright (c) ByseeCloud 2011-2016.
 *  * All rights reserved.
 *  *
 *  * This software is furnished under a license. Use, duplication,
 *  * disclosure and all other uses are restricted to the rights
 *  * specified in the written license agreement.
 *
 */
var config = angular.module("config",[]);

config.run(function($rootScope) {
    $rootScope.config = {
        username:'wuyufei',
        login:true
    };
});

config.factory('ConfigService',function($rootScope){
    return {
        setValue: function($scope,name,value){
            $scope.config[name] = value;
            console.log($scope);
            //$scope.isLogin = true;
        },
        getValue: function($scope,name){
            return $scope.config[name];
        },
        isLogin: function($scope){
            return $scope.config['login']==true;
        },
        login: function($scope){
            $scope.config['login']==true;
            $scope.isLogin = true;
        },
        logout: function($scope){
            $scope.config['login']==false;
            $scope.isLogin = false;
        }
    }
})

config.controller('configController', ['$scope','$rootScope','ConfigService',function($scope,$rootScope,ConfigService) {
    $scope.setValue = function(name,value){
        ConfigService.setValue($scope,name,value);
    }
    $scope.getValue = function(name){
        ConfigService.getValue($scope,name);
    }
    $scope.login = function(){
        ConfigService.login($scope);
    }
    $scope.logout = function(){
        ConfigService.logout($scope);
    }
    $scope.isLogin = ConfigService.isLogin($scope);
}]);
