(function(){


  "use strict"

  // navigation scroll/swing code you can customize it . see documentation for furhter details


        var scroll = {

            scrollerSwing : function(){

                $(".scroll").on('click',function(event){
                     event.preventDefault();
                     //calculate destination place
                     var dest=0;
                     if($(this.hash).offset().top > $(document).height()-$(window).height()){
                          dest=$(document).height()-$(window).height();
                     }else{
                          dest=$(this.hash).offset().top - 50;
                     }
                     //go to destination
                     $('html,body').animate({scrollTop:dest}, 1000,'swing');
                });

            }

        };

        
        scroll.scrollerSwing();


  // navigation is hidden by default and gets visible when scroll down the page 


        var navigationScrollTop = {

            navigation : $('.header').offset().top + 100,

            navigationScroller : function(){

                $(document).scroll(function(){

                    if($(this).scrollTop() > navigationScrollTop.navigation){
                        $('.navbar-default').css({
                            'background-color':'#000',
                            'min-height':'80px'
                        });
                        $('.navbar-right').css({
                            'margin-top' : '15px'
                        });
                        $('.navbar-brand').css({
                            'margin-top':'-10px'
                        });
                        $('.navbar-toggle').css({
                            'margin-top':'22px'
                        })
                    }
                    else{
                        $('.navbar-default').css({
                            'background-color':'transparent'
                        });
                        $('.navbar-right').css({
                            'margin-top' : '35px'
                        });
                        $('.navbar-brand').css({
                            'margin-top':'10px'
                        });     
                        $('.navbar-toggle').css({
                            'margin-top':'40px'
                        })
                    }
                });

            }

        };

        navigationScrollTop.navigationScroller();

    
  // portfolio navigation you can customize it . see documentation for further information
        
        var navigtionPortfolioSection = {

            targetNavigationParent : '.navPortfolio li',

            navigationActive  :  function(targetNavigationParent){
                $(targetNavigationParent).on('click',function(){
                    $(this).addClass('active').siblings().removeClass('active');
                });

            }   
        };

        navigtionPortfolioSection.navigationActive(navigtionPortfolioSection.targetNavigationParent);


       
 // portfolio gallery overlay section .


        var galleryOverlay  = {

            portfolioGallery : function (modalID,targetModalID){
                $(modalID).on('click',function(){
                    $(targetModalID).show();
                });
                $('.closeButton').on('click',function(){
                    $(targetModalID).hide();
                });
            }

        };
        

        galleryOverlay.portfolioGallery('#Modal1','#myModal1');
        galleryOverlay.portfolioGallery('#Modal2','#myModal2');
        galleryOverlay.portfolioGallery('#Modal3','#myModal3');
        galleryOverlay.portfolioGallery('#Modal4','#myModal4');
        galleryOverlay.portfolioGallery('#Modal5','#myModal5');
        galleryOverlay.portfolioGallery('#Modal6','#myModal6');
        galleryOverlay.portfolioGallery('#Modal7','#myModal7');
        galleryOverlay.portfolioGallery('#Modal8','#myModal8');
        galleryOverlay.portfolioGallery('#Modal9','#myModal9');
        galleryOverlay.portfolioGallery('#Modal10','#myModal10');
        galleryOverlay.portfolioGallery('#Modal11','#myModal11');
        galleryOverlay.portfolioGallery('#Modal12','#myModal12');
        galleryOverlay.portfolioGallery('#Modal13','#myModal13');
        galleryOverlay.portfolioGallery('#Modal14','#myModal14');
        galleryOverlay.portfolioGallery('#Modal15','#myModal15');
        galleryOverlay.portfolioGallery('#Modal16','#myModal16');
        galleryOverlay.portfolioGallery('#Modal17','#myModal17');
        galleryOverlay.portfolioGallery('#Modal18','#myModal18');
        
        $('#Container').mixItUp();


    //animate numbers section , the numbers will be animate when it scrolls down to the particular section

        var animateNumbers = {

            targetAnimateNumbers : $('#portfolio').offset().top + 1300,

            animateNumbersAnimator : function(){

                $(document).scroll(function(){

                    if ($(this).scrollTop() > animateNumbers.targetAnimateNumbers ) {

                        $('#animateNumber1').animate(  // animate numbers 
                          {someValue: 7000}, 
                          {
                          duration: 1000,
                          easing:'swing',
                          step: function() {
                              $('#animateNumber1').text(Math.round(this.someValue));
                          }
                        });
                        $('#animateNumber2').animate(  // animate numbers 
                            {someValue: 50000}, 
                            {
                            duration: 1000,
                            easing:'swing',
                            step: function() {
                                $('#animateNumber2').text(Math.round(this.someValue));
                            }
                        });
                        $('#animateNumber3').animate(  // animate numbers 
                            {someValue: 3000}, 
                            {
                            duration: 1000,
                            easing:'swing',
                            step: function() {
                                $('#animateNumber3').text(Math.round(this.someValue));
                            }
                        });
                        $('#animateNumber4').animate(  // animate numbers 
                            {someValue: 200}, 
                            {
                            duration: 1000,
                            easing:'swing',
                            step: function() {
                                $('#animateNumber4').text(Math.round(this.someValue));
                            }

                        });
                    }

                });  

            }

        };


        animateNumbers.animateNumbersAnimator();

    // about us section toggle you can customize it .
    
        $('.toggleBody').first().slideDown();

        $('.toggleHeader').first().css({
            'border-bottom':'1px solid #000'
        });

        $('.toggleHeader').last().css({
            'border-bottom':'1px solid #000'
        });

        var objectToggleSection  =  {

            headerToggle : $('.toggleHeader'),

            toggler : function(){

                $(objectToggleSection.headerToggle).on('click',function(){

                    $(this).next('.toggleBody').slideDown().siblings('.toggleBody').slideUp();
                    $(this).css({
                        'border-bottom':'1px solid #000'
                    }).siblings().css({
                        'border-bottom':'none'
                    });
                    $('.toggleHeader').last().css({
                        'border-bottom':'1px solid #000'
                    });
                });
            }

        };

        objectToggleSection.toggler();

        
        // about us section 

        // * tab pane section . 

        var ActiveTabPane = {

            activeBorder :  $('.activeBorder').css({
                                'border-bottom':'none'
                            }),

            activeTabPanes : function(){

                $('.tabsPaneHeader').on('click', function(){    

                    $(this).css({
                        'border-bottom':'none'
                    }).siblings('.tabsPaneHeader').css({
                        'border-bottom':'1px solid #000'
                    });

                }); 

            }

        };

        ActiveTabPane.activeTabPanes();


  // navigation of portfolio section

        $('.portfolio ul li a').on('click',function(e){
            e.preventDefault();
          $(this).parent().addClass("activeClassNavigation").siblings().removeClass("activeClassNavigation");
        });

        // portfolio section mixItUp see documentation for further information

        $('#Container').mixItUp();

        // magnific pop up for gallery

        $('.parent-container').magnificPopup({
          delegate: 'a', // child items selector, by clicking on it popup will open
          type: 'image'
          // other options
        });
        
        $('.gallery').each(function() { // the containers for all your galleries
            $(this).magnificPopup({
                delegate: 'a', // the selector for gallery item
                type: 'image',
                gallery: {
                  enabled:true
                }
            });
        });
    
    // video section overlay popup 

    $('#openOnClicks').on('click',function(){

        $('.videoSectionVimeo').show();

    });

    $('#closesOnClick').on('click',function(){

        $('.videoSectionVimeo').hide();

    });

})();