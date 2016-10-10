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

	app.controller('HomeController',['$scope', '$interval', function($scope, $interval){
		$scope.boxes = [
            {title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'},
            {title: 'Quisque nec tellus eleifend, luctus elit ac, pellentesque est. Vivamus sed nunc elementum, faucibus tortor id, rhoncus arcu. '},
            {title: 'Ut tempus tristique felis vitae pulvinar.'},
            {title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'},
            {title: 'Quisque nec tellus eleifend, luctus elit ac, pellentesque est. Vivamus sed nunc elementum, faucibus tortor id, rhoncus arcu. '},
            {title: 'Ut tempus tristique felis vitae pulvinar.'},
            {title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'},
            {title: 'Quisque nec tellus eleifend, luctus elit ac, pellentesque est. Vivamus sed nunc elementum, faucibus tortor id, rhoncus arcu. '},
            {title: 'Ut tempus tristique felis vitae pulvinar.'},
            {title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'}
        ];

        $scope.moving = false;

        $scope.moveLeft = function() {
            $scope.moving = true;
        };

        $scope.switchFirst = function() {
            $scope.moving = false;
            $scope.$apply();
        };

        $interval($scope.moveLeft, 2000);


        $scope.lessons = [
        	{number: "1", background: "#000", leftSideBG: "#000", leftSideSymbol: "check.png"},
        	{number: "2", background: "#000", leftSideBG: "#000", leftSideSymbol: "check.png"},
        	{number: "3", background: "#000", leftSideBG: "#000", leftSideSymbol: "check.png"},
        	{number: "4", background: "#000", leftSideBG: "#000", leftSideSymbol: "check.png"},
        	{number: "5", background: "#000", leftSideBG: "#000", leftSideSymbol: "check.png"},
        	{number: "6", background: "#000", leftSideBG: "#000", leftSideSymbol: "check.png"},
        	{number: "7", background: "#000", leftSideBG: "#000", leftSideSymbol: "check.png"},
        	{number: "8", background: "#000", leftSideBG: "#000", leftSideSymbol: "check.png"},
        	{number: "9", background: "#000", leftSideBG: "#000", leftSideSymbol: "check.png"},
        	{number: "10", background: "#000", leftSideBG: "#000", leftSideSymbol: "check.png"},
        	{number: "11", background: "#000", leftSideBG: "#000", leftSideSymbol: "check.png"},
        	{number: "12", background: "#000", leftSideBG: "#000", leftSideSymbol: "check.png"},
        	{number: "13", background: "#000", leftSideBG: "#000", leftSideSymbol: "check.png"}
        ];
	}]);
})();
