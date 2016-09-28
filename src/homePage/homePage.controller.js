(function () {
	
	'use strict';

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