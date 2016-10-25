 (function() {

'use strict';

var app = angular.module("hwEnglish.home");

var defaultOptions = {
	itemNav: 'basic',
	smart: 1,
	activateOn: 'click',
	mouseDragging: 1,
	touchDragging: 1,
	releaseSwing: 1,
	startAt: 0,
	scrollBy: 1,
	activatePageOn: 'click',
	speed: 300,
	elasticBounds: 1,
	dragHandle: 1,
	dynamicHandle: 1,
	clickBar: 1
};

/** directives for ng-repeat
* set to the ng-repeat row
* checks if the last item is rendered before calling sly
*/
app.directive('slyHorizontalRepeat',  function($timeout){
	return {
		restrict: 'A',
		link: function (scope, el, attrs){
			// var frame = $(el);
			// $(window).on("resize", function() { frame.sly("reload"); });
			// if (scope.$last === true) {
			 	$timeout(function () {

					var frame = $(el[0]).parent().parent();
					var wrap  = $(el[0]).parent().parent().parent();
					var currentItem  = wrap.find('.current');
					var currentNumber = currentItem.find('.lesson-number').text();

					defaultOptions.horizontal = 1;

					defaultOptions.startAt = currentNumber - 1;

					var defaultControls = {
						scrollBar: wrap.find('.scrollbar') || null,
						pagesBar: wrap.find('.pages') || null,
						forward: wrap.find('.forward') || null,
						backward: wrap.find('.backward') || null,
						prev: wrap.find('.prev') || null,
						next: wrap.find('.next') || null,
						prevPage: wrap.find('.prevPage') || null,
						nextPage: wrap.find('.nextPage') || null
					};

					
					// Merge parts into options object for sly argument
					var options =  $.extend({}, defaultOptions, defaultControls, scope.$eval(attrs.slyOptions));
					var callback = scope.$eval(attrs.slyCallback) || function(){};
					// Call Sly on frame
					frame.sly(options, callback());
					// scope.$emit('ngRepeatFinished');
				});
			// }
		}
	};
});
})();