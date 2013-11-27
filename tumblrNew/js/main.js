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
