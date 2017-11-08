function showImage(key){
	var popLayer=document.querySelector(".popLayer");
	var img=document.querySelector(".popLayer img");
	var bodystyle=document.querySelector(".bodystyle");
    popLayer.style.display="block";
	img.src="images/image_"+key+".png";
	bodystyle.style.filter="brightness(0.4)";
}
function closeImage(){
	var popLayer=document.querySelector(".popLayer");
	var img=document.querySelector(".popLayer img");
	var bodystyle=document.querySelector(".bodystyle");
    popLayer.style.display="none";
	img.src="";
	bodystyle.style.filter="brightness(1)";
}
function showsubmitLayer(){
	var submitLayer=document.querySelector(".submitLayer");
	var bodystyle=document.querySelector(".bodystyle");
	submitLayer.style.display="block";
	bodystyle.style.filter="brightness(0.4)";
}
function closesubmitLayer(){
	var submitLayer=document.querySelector(".submitLayer");
	var bodystyle=document.querySelector(".bodystyle");
	submitLayer.style.display="none";
	bodystyle.style.filter="brightness(1)";
}
