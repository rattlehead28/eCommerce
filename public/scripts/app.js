angular.module('eCart', ['ui.router']).config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider

    .state('index',{
            url:'/',
            templateUrl: '../views/home.html',
            controller: 'homeCtrl'
            
        })

        .state('home', {

            url: '/home',
            templateUrl: '../../views/home.html',
            controller: 'homeCtrl'
        })

        

        .state('mobile', {

            url: '/mobiles',
            templateUrl: '../views/mobiles.html',
            controller: 'mobileCtrl'


        })

        .state('laptop', {

            url: '/laptops',
            templateUrl: '../../views/laptops.html'
        })

        .state('television', {

            url: '/televisions',
            templateUrl: '../../views/televisions.html'
        })

        .state('speaker', {

            url: '/speakers',
            templateUrl: '../../views/speakers.html'
        })

        .state('headphone', {

            url: '/headphones',
            templateUrl: '../../views/headphones.html'
        })

        .state('admin',{

            url: '/admin',
            templateUrl: '../../views/admin.html',
            controller:'adminCtrl'

        })

});


