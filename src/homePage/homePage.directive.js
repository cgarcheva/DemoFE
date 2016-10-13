 (function() {

     'use strict';

     var app = angular.module("hwEnglish.home");
     app.directive('horizontalScroll', function() {

        return {
            restrict: 'AE',
            controller: 'HomeController'
          };

 //         return {
 //             link: function(scope, element) {
 //                 var base = 0;

 //                 element.bind("DOMMouseScroll mousewheel onmousewheel", function(event) {

 //                     // cross-browser wheel delta
 //                     event = window.event || event; // old IE support
 //                     var delta = Math.max(-1, Math.min(1, (event.wheelDelta || -event.detail)));


 //                     scope.$apply(function() {
 //                         base += 30 * delta;
 //                         element.children().css({
 //                             'transform': 'translateX(' + base + 'px)'
 //                         });
 //                     });

 //                     // for IE
 //                     event.returnValue = false;
 //                     // for Chrome and Firefox
 //                     if (event.preventDefault) {
 //                         event.preventDefault();
 //                     }
 //                 });
 //             }
 //         };
 //     });
 })();