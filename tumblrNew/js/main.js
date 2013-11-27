var bgArray = ['img/bg1.jpg','img/bg2.jpg','img/bg3.jpg','img/bg4.jpg', 'img/bg5.jpg'];
var text1 = "bg1";
var text2 = "bg2";
var text3 = "bg3";
var text4 = "bg4";
var text5 = "bg5";
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
