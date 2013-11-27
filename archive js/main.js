
var bgArray = ['img/bg2.jpg','img/bg1.jpg','img/bg3.jpg','img/bg4.jpg'];
var bodyImg = $('.bg')
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
	bodyImg.fadeIn(600);
}


function iterator() {
    console.log(bgArray[i]);
    bodyImg.fadeOut(1000, changeBG);
    console.log(i)
    i++
    if(i == bgArray.length+1){
    	i = 0;
    } 
    setTimeout(iterator, 2000);
};
