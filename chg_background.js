
var count = 0; //counter for background-image array

//change background-image function
function chgBackground(){
	var bg = ['url(res/images/jumbo_bg.jpg)', 'url(res/images/bg2.jpg)'];	//background-image array
	//increase counter
	window.setTimeout(function(){
		if(count > bg.length-1){
			count = 0;
		}else{
			count=count+1;
		}
	}, 500);
	//set background-image
	var bg_img = bg[count];
	//apply background-image to element "jum" (my jumbotron)
	document.getElementById('jum').style.backgroundImage = bg_img;
}

//update background-image every 10000ms
window.setInterval(chgBackground,10000);
