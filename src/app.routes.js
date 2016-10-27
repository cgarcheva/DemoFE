(function() {

    'use strict';

    var app = angular.module('hwEnglish');

    app.config(['$stateProvider', '$urlRouterProvider', 'localStorageServiceProvider',
            function($stateProvider, $urlRouterProvider, localStorageServiceProvider) {

                $urlRouterProvider.otherwise('/404');

                $stateProvider

                    // homepage view
                    .state('home', {
                        url: '/home',
                        templateUrl: 'views/homePage.html',
                        controller: 'HomeController'
                    })

                      //lesson1
                    .state('lesson1', {
                        url: '/lesson1',
                        templateUrl: 'views/lesson1.html'
                    })

                      //lesson2
                    .state('lesson2', {
                        url: '/lesson2',
                        templateUrl: 'views/lesson2.html'
                    })

                    // 404 view
                    .state('404', {
                        url: '/404',
                        templateUrl: "views/404.html"
                    });

                localStorageServiceProvider.setPrefix('hwEnglish');
            }
        ]);

})();