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
          {number: "1", state: "passed", img_thumb: "1_thumb.jpg", img_bg:"1.jpg", info:"In descriptive writing, the author does not tell the reader what was seen, felt, tested, smelled, or heard. Rather, he describes something that he experienced and, through his choice of words, makes it seem real. In other words, descriptive writing is vivid, colorful, and detailed."},
          {number: "2", state: "current", img_thumb: "2_thumb.jpg", img_bg:"2.jpg", info:"In descriptive writing, the author does not tell the reader what was seen, felt, tested, smelled, or heard. Rather, he describes something that he experienced and, through his choice of words, makes it seem real. In other words, descriptive writing is vivid, colorful, and detailed."},
          {number: "3", state: "lock", img_thumb: "3_thumb.jpg", img_bg:"3.jpg", info:"In descriptive writing, the author does not tell the reader what was seen, felt, tested, smelled, or heard. Rather, he describes something that he experienced and, through his choice of words, makes it seem real. In other words, descriptive writing is vivid, colorful, and detailed."},
          {number: "4", state: "lock", img_thumb: "4_thumb.jpg", img_bg:"4.jpg", info:"In descriptive writing, the author does not tell the reader what was seen, felt, tested, smelled, or heard. Rather, he describes something that he experienced and, through his choice of words, makes it seem real. In other words, descriptive writing is vivid, colorful, and detailed."},
          {number: "5", state: "lock", img_thumb: "5_thumb.jpg", img_bg:"5.jpg", info:"In descriptive writing, the author does not tell the reader what was seen, felt, tested, smelled, or heard. Rather, he describes something that he experienced and, through his choice of words, makes it seem real. In other words, descriptive writing is vivid, colorful, and detailed."},
          {number: "6", state: "lock", img_thumb: "6_thumb.jpg", img_bg:"6.jpg", info:"In descriptive writing, the author does not tell the reader what was seen, felt, tested, smelled, or heard. Rather, he describes something that he experienced and, through his choice of words, makes it seem real. In other words, descriptive writing is vivid, colorful, and detailed."},
          {number: "7", state: "lock", img_thumb: "7_thumb.jpg", img_bg:"7.jpg", info:"In descriptive writing, the author does not tell the reader what was seen, felt, tested, smelled, or heard. Rather, he describes something that he experienced and, through his choice of words, makes it seem real. In other words, descriptive writing is vivid, colorful, and detailed."},
          {number: "8", state: "lock", img_thumb: "8_thumb.jpg", img_bg:"8.jpg", info:"In descriptive writing, the author does not tell the reader what was seen, felt, tested, smelled, or heard. Rather, he describes something that he experienced and, through his choice of words, makes it seem real. In other words, descriptive writing is vivid, colorful, and detailed."},
          {number: "9", state: "lock", img_thumb: "9_thumb.jpg", img_bg:"9.jpg", info:"In descriptive writing, the author does not tell the reader what was seen, felt, tested, smelled, or heard. Rather, he describes something that he experienced and, through his choice of words, makes it seem real. In other words, descriptive writing is vivid, colorful, and detailed."},
          {number: "10", state: "lock", img_thumb: "10_thumb.jpg", img_bg:"10.jpg", info:"In descriptive writing, the author does not tell the reader what was seen, felt, tested, smelled, or heard. Rather, he describes something that he experienced and, through his choice of words, makes it seem real. In other words, descriptive writing is vivid, colorful, and detailed."}
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
        $scope.$playButton=$(".play-button");

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

        angular.forEach($scope.lessons, function(value, key){

          value = $scope.lessons[key].state;
          var lessonNumber =  $scope.lessons[key].number;

          if (value == "current" ){
               var href = "#/lesson"+lessonNumber;
             $scope.$playButton.attr('href', href);

            $scope.the1stImg.src = "../assets/img/"+$scope.lessons[key].img_bg;
          }
         });

        $scope.the1stImg.onload = CreateDelegate($scope.the1stImg, theNewImg_onload);

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
           event.preventDefault();

          var currentLesson = this.lesson;
          applyLessonHref(currentLesson);

          SwitchImage(e.currentTarget.href);
        }; 


        //next/prev images keyboard arrows

        if($scope.$keyboardNavigation =="on"){
        $(document).keydown(function(ev) {
          var currentElem = $scope.$outer_container.find(".active");
         
            if(ev.keyCode == 39) { //right arrow
               var nextElem = currentElem.next();
               var nextImage = nextElem.find("a");

            
                nextElem.addClass("active");

                if(nextImage.length !== 0 ){
                    currentElem.removeClass("active");

                        var nextclasses = nextImage.attr('class').split(' ');
                  var nextLessonElem = {state: nextclasses[0]  , number: nextclasses[1] };

                 applyLessonHref(nextLessonElem);
                 SwitchImage(nextImage[0].href);
                 }else{
                  return false; 
                 }
            } else if(ev.keyCode == 37) { //left arrow
                var prevElem = currentElem.prev();
               var prevImage = prevElem.find("a");

               

                prevElem.addClass("active");
                if(prevImage.length !== 0 ){
                    currentElem.removeClass("active");
                       var prevclasses = prevImage.attr('class').split(' ');
                  var prevLessonElem = {state: prevclasses[0]  , number: prevclasses[1] };
                 applyLessonHref(prevLessonElem);
                 SwitchImage(prevImage[0].href);
               }else{
                  return false; 
                 }
            }
        });
        }

        //get next/prev images
        function applyLessonHref(curr){
          var lessonNumber = curr.number; 
          var lessonState = curr.state;
          if (lessonState == "lock" ){
            $scope.$playButton.hide();
          }else{
            $scope.$playButton.show();
              var href = "#/lesson"+lessonNumber;
             $scope.$playButton.attr('href', href);
          }

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