(function() {

    'use strict';

    var app = angular.module('hwEnglish');

    app.config(['$stateProvider', '$urlRouterProvider', 'localStorageServiceProvider',
            function($stateProvider, $urlRouterProvider, localStorageServiceProvider) {

                $urlRouterProvider.otherwise('/home');

                $stateProvider

                    // homepage view
                    .state('home', {
                        url: '/home',
                        templateUrl: 'views/homePage.html',
                        controller: 'HomeController'
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