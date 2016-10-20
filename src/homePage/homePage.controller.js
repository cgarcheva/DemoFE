(function () {
	
	//'use strict';

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
        	{number: "1", state: "passed", img_thumb: "1_thumb.jpg", img_bg:"1.jpg"},
        	{number: "2", state: "current", img_thumb: "2_thumb.jpg", img_bg:"2.jpg"},
        	{number: "3", state: "lock", img_thumb: "3_thumb.jpg", img_bg:"3.jpg"},
        	{number: "4", state: "lock", img_thumb: "4_thumb.jpg", img_bg:"4.jpg"},
        	{number: "5", state: "lock", img_thumb: "5_thumb.jpg", img_bg:"5.jpg"},
          {number: "6", state: "lock", img_thumb: "6_thumb.jpg", img_bg:"6.jpg"},
          {number: "7", state: "lock", img_thumb: "7_thumb.jpg", img_bg:"7.jpg"},
          {number: "8", state: "lock", img_thumb: "8_thumb.jpg", img_bg:"8.jpg"},
          {number: "9", state: "lock", img_thumb: "9_thumb.jpg", img_bg:"9.jpg"},
          {number: "10", state: "lock", img_thumb: "10_thumb.jpg", img_bg:"10.jpg"},
        ];

        //config
        //set default images view mode
        $scope.$defaultViewMode="full"; //full, normal, original
        $scope.$thumbnailsContainerOpacity=0.8; //thumbnails area default opacity
        $scope.$thumbnailsContainerMouseOutOpacity=1; //thumbnails area opacity on mouse out
        $scope.$thumbnailsOpacity=0.6; //thumbnails default opacity

        $scope.$keyboardNavigation="on"; //enable/disable keyboard navigation ("on" or "off")

        //cache vars
        $scope.$thumbnails_wrapper=$("#thumbnails_wrapper");


        $scope.$outer_container=$("#outer_container");
        $scope.$thumbClick=$("#outer_container a");
        $scope.$thumbScroller=$(".thumbScroller");
        $scope.$thumbScroller_container=$(".thumbScroller .container");
        $scope.$thumbScroller_content=$(".thumbScroller .content");
        $scope.$thumbScroller_thumb=$(".thumbScroller .thumb");
        $scope.$preloader=$("#preloader");
        $scope.$toolbar=$("#toolbar");
        $scope.$toolbar_a=$("#toolbar a");
        $scope.$bgimg=$("#bgimg");
        $scope.$img_title=$("#img_title");
        $scope.$nextImageBtn=$(".nextImageBtn");
        $scope.$prevImageBtn=$(".prevImageBtn");

        //thumbnail scroller
        // $scope.$thumbScroller_container.css("marginLeft",$scope.$tsMargin+"px"); //add margin
        $scope.sliderLeft= $scope.$thumbScroller_container.position().left;
        $scope.sliderWidth=  $scope.$outer_container.width();
        $scope.$thumbScroller.css("width",$scope.sliderWidth);
        $scope.totalContent=0;
        $scope.fadeSpeed=200;
        
        $scope.$the_outer_container=document.getElementById("outer_container");
        $scope.$placement=findPos($scope.$the_outer_container);
        
        $scope.$thumbScroller_content.each(function () {
          $scope.$this=$(this);
          $scope.totalContent+=$this.innerWidth(); $scope.$thumbScroller_container.css("width",$scope.totalContent);
          $scope.$this.children().children().children(".thumb").fadeTo($scope.fadeSpeed, $scope.$thumbnailsOpacity);
        });

        
        $scope.$thumbnails_wrapper.fadeTo($scope.fadeSpeed, $scope.$thumbnailsContainerOpacity);
        $scope.$thumbnails_wrapper.hover(
          function(){ //mouse over
            $this=$(this);
            $this.stop().fadeTo("slow", 1);
          },
          function(){ //mouse out
            $this=$(this);
            $this.stop().fadeTo("slow", $scope.$thumbnailsContainerMouseOutOpacity);
          }
        );

        $scope.$thumbScroller_thumb.hover(
          function(){ //mouse over
            $this=$(this);
            $this.stop().fadeTo($scope.fadeSpeed, 1);
          },
          function(){ //mouse out
            $this=$(this);
            $this.stop().fadeTo($scope.fadeSpeed, $scope.$thumbnailsOpacity);
          }
        );

        //on window resize scale image and reset thumbnail scroller
        $(window).resize(function() {
          FullScreenBackground("#bgimg",$scope.$bgimg.data("newImageW"), $scope.$bgimg.data("newImageH"));
          $scope.$thumbScroller_container.stop().animate({left: $scope.sliderLeft}, 400,"easeOutCirc"); 
          $scope.newWidth=$scope.$outer_container.width();
          $scope.$thumbScroller.css("width",$scope.newWidth);
          $scope.sliderWidth=$scope.newWidth;
          $scope.$placement=findPos($scope.$the_outer_container);
        });

        //load 1st image
        $scope.the1stImg = new Image();
        $scope.the1stImg.onload = CreateDelegate($scope.the1stImg, theNewImg_onload);
        $scope.the1stImg.src = $scope.$bgimg.attr("src");
        $scope.$outer_container.data("nextImage",$(".content").first().next().find("a").attr("href"));
        $scope.$outer_container.data("prevImage",$(".content").last().find("a").attr("href"));
    

        function BackgroundLoad($this,imageWidth,imageHeight,imgSrc){
          $this.fadeOut("fast",function(){
            $this.attr("src", "").attr("src", imgSrc); //change image source
            FullScreenBackground($this,imageWidth,imageHeight); //scale background image
            $scope.$preloader.fadeOut("fast",function(){$this.fadeIn("slow");});
            imageTitle=$scope.$img_title.data("imageTitle");
            if(imageTitle){
              $this.attr("alt", imageTitle).attr("title", imageTitle);
              $scope.$img_title.fadeOut("fast",function(){
                 $scope.$img_title.html(imageTitle).fadeIn();
              });
            } else {
               $scope.$img_title.fadeOut("fast",function(){
                 $scope.$img_title.html($this.attr("title")).fadeIn();
              });
            }
          });
        }


        //Clicking on thumbnail changes the background image
        $scope.changeImage = function(e){
         // console.log(e.currentTarget); 
           event.preventDefault();
          GetNextPrevImages(e.currentTarget);
          SwitchImage(e.currentTarget);
        }; 


        //next/prev images keyboard arrows

        // if($scope.$keyboardNavigation =="on"){
        // $(document).keydown(function(ev) {
        //     if(ev.keyCode == 39) { //right arrow
        //         SwitchImage($scope.$outer_container.data("nextImage"));
        //     $scope.$this=$("#outer_container a[href='"+"$scope.$outer_container".data("nextImage")+"']");
        //     GetNextPrevImages($scope.$this);
        //         return false; // don't execute the default action (scrolling or whatever)
        //     } else if(ev.keyCode == 37) { //left arrow
        //         SwitchImage($scope.$outer_container.data("prevImage"));
        //     $scope.$this=$("#outer_container a[href='"+"$scope.$outer_container".data("prevImage")+"']");
        //     GetNextPrevImages($scope.$this);
        //         return false; // don't execute the default action (scrolling or whatever)
        //     }
        // });
        // }

        //get next/prev images
        function GetNextPrevImages(curr){
          nextImage=curr.href;
          if(nextImage==null){ //if last image, next is first
            $scope.nextImage=curr.first().find("a").attr("href");
          }
          $scope.$outer_container.data("nextImage",nextImage);
          prevImage=curr.href;
          if(prevImage==null){ //if first image, previous is last
            $scope.prevImage=curr.last().find("a").attr("href");
          }
          $scope.$outer_container.data("prevImage",prevImage);
        }

        //switch image
        function SwitchImage(img){
          $scope.$preloader.fadeIn("fast"); //show preloader
          $scope.theNewImg = new Image();
          $scope.theNewImg.onload = CreateDelegate($scope.theNewImg, theNewImg_onload);
          $scope.theNewImg.src = img;
        }

        //get new image dimensions
        function CreateDelegate(contextObject, delegateMethod){
          return function(){
            return delegateMethod.apply(contextObject, arguments);
          };
        }

        //new image on load
        function theNewImg_onload(){
          $scope.$bgimg.data("newImageW",this.width).data("newImageH",this.height);
          BackgroundLoad($scope.$bgimg,this.width,this.height,this.src);
        }

        //Image scale function
        function FullScreenBackground(theItem,imageWidth,imageHeight){
          $scope.winWidth=$(window).width();
          $scope.winHeight=$(window).height();
          if($scope.$toolbar.data("imageViewMode")!="original"){ //scale
            $scope.picHeight = $scope.imageHeight / $scope.imageWidth;
            $scope.picWidth = $scope.imageWidth / $scope.imageHeight;
            if($scope.$toolbar.data("imageViewMode")=="full"){ //fullscreen size image mode
              if (($scope.winHeight / $scope.winWidth) < $scope.picHeight) {
                $($scope.theItem).attr("width",$scope.winWidth);
                $($scope.theItem).attr("height",$scope.picHeight*$scope.winWidth);
              } else {
                $($scope.theItem).attr("height",$scope.winHeight);
                $($scope.theItem).attr("width",$scope.picWidth*$scope.winHeight);
              }
            } else { //normal size image mode
              if (($scope.winHeight / $scope.winWidth) > $scope.picHeight) {
                $($scope.theItem).attr("width",$scope.winWidth);
                $($scope.theItem).attr("height",$scope.picHeight*$scope.winWidth);
              } else {
                $($scope.theItem).attr("height",$scope.winHeight);
                $($scope.theItem).attr("width",$scope.picWidth*$scope.winHeight);
              }
            }
            $($scope.theItem).css("margin-left",($scope.winWidth-$($scope.theItem).width())/2);
            $($scope.theItem).css("margin-top",($scope.winHeight-$($scope.theItem).height())/2);
          } else { //no scale
            $($scope.theItem).attr("width",imageWidth);
            $($scope.theItem).attr("height",imageHeight);
            $($scope.theItem).css("margin-left",($scope.winWidth-$scope.imageWidth)/2);
            $($scope.theItem).css("margin-top",($scope.winHeight-i$scope.mageHeight)/2);
          }
        }

        // function to find element Position
        function findPos(obj) {
            $scope.curleft = 0;
             $scope.curtop = 0;
            if (obj.offsetParent) {
              curleft = obj.offsetLeft;
              curtop = obj.offsetTop;
              while (obj == obj.offsetParent) {
                curleft += obj.offsetLeft;
                curtop += obj.offsetTop;
              }
            }
            return [curtop, curleft];
        }



    	}]);
})();
