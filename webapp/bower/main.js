/**
 * Created by wuyufei on 2016/1/2.
 */
requirejs.config({
    baseUrl:'bower',
    paths : {
        'domReady' : 'modules/requirejs-domready/domReady',
        'jquery' : 'modules/jquery/dist/jquery.min',
        'jquery-backstretch':'modules/jquery-backstretch/jquery.backstretch.min',
        'echarts' : 'modules/echarts/build/dist',
        'bootstrap':'modules/bootstrap/dist/js/bootstrap.min',
        'angular':'modules/angular/angular.min',
        'angular-route':'modules/angular-route/angular-route.min',
        'angular-resource':'modules/angular-resource/angular-resource.min',
        'ngprogress':'modules/ngprogress/build/ngprogress.min'
    },
    map: {
        '*': {
            'css': 'modules/require-css/css'
        }
    },
    shim : {
        'bootstrap': ['css!modules/bootstrap/dist/css/bootstrap.min.css'],
        'ngprogress': ['css!modules/ngprogress/ngProgress.css']
    }
})