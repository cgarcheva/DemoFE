/*! Source: src/app.module.js */
 (function  () {

/**
     * @ngdoc overview
     * @module hwEnglish
     * @name hwEnglish
     *
     * @description

     * General module for hwEnglish app
     */
    angular.module('hwEnglish', [
        'ui.router',
        'LocalStorageModule',
        'hwEnglish.home'
    ]);

})();
/*! Source: src/homePage/homePage.module.js */
(function  () {

/**
     * @ngdoc controller
     * @name hwEnglish.homePage.controller:HomePageController
     * @module hwEnglish.homePage
     * @description

     * Home page.
     *
     */

    angular.module("hwEnglish.home", []);

})();
/*! Source: src/app.routes.js */
(function() {

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
/*! Source: src/app.controller.js */
(function  () {

var app = angular.module("hwEnglish");

    /**
     * @ngdoc controller
     * @name hwEnglish.controller:hwEnglishController
     * @module hwEnglish
     * @description

     * General controller for hwEnglish app. Manage mobile menu state and right sidebar with recipes.
     *
     */
    app.controller("HwEnglishController",
                [ "$scope", '$rootScope', 
                function($scope, $rootScope){

        /**
         * @ngdoc property
         * @name recipeList
         * @propertyOf hwEnglish.controller:hwEnglishController

         * @description
         * Get available recipes.
         * Calling cbRecipeService method getRecipe and receives an object with all avalible recipes
         */

        $rootScope = true;

        /**
         * @ngdoc property
         * @name isMobileMenu
         * @propertyOf hwEnglish.controller:hwEnglishController

         * @description state for mobile menu. Initial value is false
         */
        $scope.isMobileMenu = false;



    }]);
})();
/*! Source: src/homePage/homePage.controller.js */
(function () {
	
var app = angular.module("hwEnglish.home");


	/**
     * @ngdoc controller
     * @name hwEnglish.homePage.controller:HomePageController
     * @module hwEnglish.homePage
     * @description

     * Home page.
     *
     */

	app.controller('HomeController',['$scope', function($scope){
		$scope.word = 'viki';
	}]);

})();
//# sourceMappingURL=app.js.map