jQuery( function($) {

	//jquery no conflic mode, with all that good stuff and able to use $

	var bgArray = ['img/bg1.jpg','img/bg2.jpg','img/bg3.jpg','img/bg4.jpg', 'img/bg5.jpg'];
	var text1 = "IBM Watson can cross-reference the symptoms of millions of cancer patients to help doctors design better treatments. Watson is helping doctors fight cancer.", text2 = "IBM Watson can read millions of financial reports so planners can recommend better investments. Watson will help improve financial planning.", text3 = "IBM Watson can analyze terabits of data to help operators quickly find answers to a caller’s question. Watson will help transform customer service.", text4 = "IBM Watson can read millions of financial reports so planners can recommend better investments. Watson will help improve financial planning.",text5 = "IBM Watson can cross-reference the symptoms of millions of cancer patients to help doctors design better treatments. Watson is helping doctors fight cancer.";
	var textArray = [text1, text2, text3, text4, text5];
	var wholeBG = $('.bg, .subDesc'),bodyImg = $('.bg'), subDesc = $('.subDesc');
	var i = 0;
	var l = bgArray.length;

	function preload(arrayOfImages) {
	    $(arrayOfImages).each(function(){
	        $('<img/>')[0].src = this;
	        // Alternatively you could use:
	        // (new Image()).src = this;
	    });
	}

	preload(bgArray);

	function changeBG(){
		bodyImg.css('background-image','url('+bgArray[i]+')');
		subDesc.html('<p>'+textArray[i]+'</p>');
		if(i === 0){
			//becuase there is no text on the first picture.
			bodyImg.fadeIn()
		}else{
			wholeBG.fadeIn(600);	
		}
		//console.log(textArray[i])
		
		}


	function iterator() {
		console.log(bgArray[i]);
		wholeBG.fadeOut(1000, changeBG);
		//console.log(i);
		i++;
		if(i == bgArray.length){
			i = 0;
		} 
		setTimeout(iterator, 5000);
	};

	//run background switch
	//wholeBG.hide();
	subDesc.hide();
	iterator();

	function resizeFunc(){
		var $width = $(window).width();
		if($width <= 1118){
			var keep = $('.callout').detach();
			$('.postList').prepend(keep)
		}
	}

	//this replaces the callout as the header at certian sizes
	$( window ).resize(resizeFunc);

	//run first resize to initalize if viewport starts at breakpoint
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
					$('#'+ key+i).css({backgroundPosition: -obj[key][i]*36 });
				}
			}    
		}  
	}

	drawTime(); 
	setInterval(drawTime, 1000);

});