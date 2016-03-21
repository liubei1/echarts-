/*
 *
 *  * translate.js
 *  * Created on 16-2-19 下午7:41 by wuyufei
 *  *
 *  * Copyright (c) ByseeCloud 2011-2016.
 *  * All rights reserved.
 *  *
 *  * This software is furnished under a license. Use, duplication,
 *  * disclosure and all other uses are restricted to the rights
 *  * specified in the written license agreement.
 *
 */
var translate = angular.module("translate",['pascalprecht.translate']);

translate.config(["$translateProvider",function($translateProvider){
    $translateProvider.useStaticFilesLoader({
        prefix: './app/i18n/',
        suffix: '.json'
    });
    $translateProvider.preferredLanguage('zh_CN');

}]);

translate.controller('translateController', ['$scope', '$translate', function($scope, $translate) {
    $scope.setLang = function(langKey) {
        // You can change the language during runtime
        $translate.use(langKey);
    };
}]);