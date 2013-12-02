var bgArray = ['img/bg1.jpg','img/bg2.jpg','img/bg3.jpg','img/bg4.jpg', 'img/bg5.jpg'];
var text1 = "IBM Watson can cross-reference the symptoms of millions of cancer patients to help doctors design better treatments. Watson is helping doctors fight cancer.";
var text2 = "IBM Watson can read millions of financial reports so planners can recommend better investments. Watson will help improve financial planning.";
var text3 = "IBM Watson can analyze terabits of data to help operators quickly find answers to a caller’s question. Watson will help transform customer service.";
var text4 = "IBM Watson can read millions of financial reports so planners can recommend better investments. Watson will help improve financial planning.";
var text5 = "IBM Watson can cross-reference the symptoms of millions of cancer patients to help doctors design better treatments. Watson is helping doctors fight cancer.";
var textArray = [text1, text2, text3, text4, text5];

var wholeBG = $('.bg, .subDesc');
var bodyImg = $('.bg');
var subDesc = $('.subDesc');

var i =0;
/*
var i = 0
function setbg(){
	console.log(i);
	i = i+1;
	bodyImg.fadeOut().delay(1000);
	bodyImg.css('background-image','url('+bgArray[i]+')')
	bodyImg.fadeIn(600);
	if(i > bgArray.length){
		i =0;
	}
	setTimeout('setbg()',2000); //This alert should display for every 2 secs only
}
*/


///this works!!!
// loop through array with all new ids
var i = 0;
var l = bgArray.length;
function changeBG(){
	bodyImg.css('background-image','url('+bgArray[i]+')');
	subDesc.html('<p>'+textArray[i]+'</p>');
	console.log(textArray[i])
	wholeBG.fadeIn(600);
}


function iterator() {
    console.log(bgArray[i]);
    wholeBG.fadeOut(1000, changeBG);
    console.log(i)
    i++
    if(i == bgArray.length){
    	i = 0;
    } 
    setTimeout(iterator, 2000);
};




            jQuery( function($) {

                function resizeFunc(){
                  var $width = $(window).width();
                  if($width <= 1118){
                    var keep = $('.callout').detach();
                    //var postHeight = $('.container').height()
                    //console.log(postHeight)
                    //$('.container').css('top',(parseInt(130-postHeight) + 'px'))
                    
                    $('.postList').prepend(keep)
                  }
                }

                //this replaces the callout as the header at certian sizes
                $( window ).resize(resizeFunc);
                resizeFunc();

                var fut = new Date("Jan 20 2014 21:15:00 GMT+0200").getTime(),
                    obj = {};

                // Number splitter
                function intSpl( i ){
                  i = Math.floor(i);
                  return [~~(i/10), i%10]; // 37=[3,7] // 5=[0,5] // 0=[0,0] 
                }

                function drawTime(){  
                  var now = new Date().getTime(),   
                      dif = now<fut ? Math.floor( (fut-now)/1000) : 0;
                  obj.s = intSpl(dif % 60);
                  obj.m = intSpl(dif/60 % 60);
                  obj.h = intSpl(dif/60/60 % 24);
                  obj.d = intSpl(dif/60/60/24);  

                  for(var key in obj){    
                     if(obj.hasOwnProperty(key)){
                        for(var i=0; i<2; i++){ // get el ID number (0,1)
                          //this has to be the width of the image
                            $('#'+ key+i).css({backgroundPosition: -obj[key][i]*30 });
                        }
                     }    
                  }  
                }
                drawTime(); 
                setInterval(drawTime, 1000);

            });