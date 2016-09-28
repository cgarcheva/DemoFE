(function  () {

    'use strict';

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