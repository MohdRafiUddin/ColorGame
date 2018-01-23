var numSquare=6;
var colors=generaterandomcolor(numSquare);
var squares=document.querySelectorAll(".square");
var displaycolor=document.querySelector("#displaycolor");
var messagedisplay=document.querySelector("#message");
var pickcolor= pickedcolor();
var h1=document.querySelector("h1");
var reset=document.querySelector("#reset");
var easyBtn=document.querySelector("#easybtn");
var hardBtn=document.querySelector("#hardbtn");

displaycolor.textContent= pickcolor;

for(var i=0 ; i < squares.length ; i++){
	squares[i].style.backgroundColor= colors[i];
	
	squares[i].addEventListener("click",function(){
	var clickedcolor = this.style.backgroundColor;
	if(clickedcolor === pickcolor){
		changedcolor(clickedcolor);
        messagedisplay.textContent= "Correct!!"
	    h1.style.backgroundColor= clickedcolor;
	    reset.textContent= "PLAY AGAIN?";
	}
	else{
		messagedisplay.textContent= "Try Again"
		this.style.backgroundColor = "#232323";
	}
});
}
reset.addEventListener("click",function(){
     colors= generaterandomcolor(numSquare);
	 pickcolor= pickedcolor();
	 displaycolor.textContent= pickcolor;
	 //changedcolor(colors);
	 h1.style.backgroundColor= "steelblue";
	 reset.textContent= "NEW COLORS";
	 messagedisplay.textContent= "";
	 for(var i=0 ; i < squares.length ;i++){
		 squares[i].style.backgroundColor=colors[i];
	 }
});

function changedcolor(color){
	for(var i=0 ; i < squares.length ;i++){
	squares[i].style.backgroundColor= color;
	}
}
function pickedcolor(){
	var random= Math.floor(Math.random() * colors.length);
    return colors[random];
	}
function generaterandomcolor(num){
	//"rgb("0", "255", "255")"
	  var arr=[];
	for(var i=0 ; i < num ;i++){
	  arr.push(randomcolor());	 
	}	
	return arr;
}
function randomcolor(){
  var r= Math.floor(Math.random() * 256);
  var g= Math.floor(Math.random() * 256);
  var b= Math.floor(Math.random() * 256);
  
  return "rgb(" + r + ", " + g + ", " + b + ")";

}
 easyBtn.addEventListener("click",function(){
	 easyBtn.classList.add("selected");
	 hardBtn.classList.remove("selected");
	 messagedisplay.textContent= "";
	 numSquare=3;
	 colors= generaterandomcolor(numSquare);
	 pickcolor= pickedcolor();
	 displaycolor.textContent= pickcolor;
	 h1.style.backgroundColor= "steelblue";
     for(var i=0 ; i < squares.length ;i++){ 	
	 if(colors[i]){
	 squares[i].style.backgroundColor=colors[i];
	   }
	 else{
		 squares[i].style.display="none";
	   }
	 }
 });
 hardBtn.addEventListener("click",function(){
	 hardBtn.classList.add("selected");
	 easyBtn.classList.remove("selected");
	 messagedisplay.textContent= "";
	 numSquare=6;
	 colors= generaterandomcolor(numSquare);
	 pickcolor= pickedcolor();
	 displaycolor.textContent= pickcolor;
	 h1.style.backgroundColor= "steelblue";
     for(var i=0 ; i < squares.length ;i++){ 	
	 squares[i].style.backgroundColor=colors[i];
	 squares[i].style.display="block";
 }});