/*
 *
 *  * datasources.js
 *  * Created on 16-2-25 下午10:11 by wuyufei
 *  *
 *  * Copyright (c) ByseeCloud 2011-2016.
 *  * All rights reserved.
 *  *
 *  * This software is furnished under a license. Use, duplication,
 *  * disclosure and all other uses are restricted to the rights
 *  * specified in the written license agreement.
 *
 */
var datasources = angular.module('datasources',['config']);

datasources.factory('DatasourceService',function($rootScope,ConfigService){
    return {
        loadData: function(name){
            return ConfigService.getValue($rootScope,name);
        },
        saveData: function(data){

        },
        findDataByKey: function(key){

        },
        saveConfigData: function(config) {
            return key;
        },
        findConfigDataByKey: function(key){

        },
        saveWidgetConfig: function(type,configKey,dataKey){

        }
    }
});