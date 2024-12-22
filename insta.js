
let But1=document.querySelector(".Like");
But1.addEventListener("click",()=>{
	console.log("Like");

});

let black="Like";
But1.addEventListener("click",()=>{
	if(black==="light"){
		black="dark";
		document.querySelector("button").style.backgroundColor="#008080";
	}else{
		black="light";
		document.querySelector("button").style.backgroundColor="red";
	}
	console.log(black);
})


let Share=document.querySelector("#Share");
Share.addEventListener("click",()=>{
	console.log("share");
});

const Profile=document.querySelector(".Profile");
Profile.addEventListener("click",()=>{
	console.log("give");
});

let change=document.querySelector("#change");
change.addEventListener("click",()=>{
	console.log("change");
});
let blue="change";
change.addEventListener("click",()=>{
	if(blue==="silver"){
		blue="dark";
		document.querySelector("div").style.backgroundImage="url(Budha.jpg)";
	}
	else {
		blue="silver";
		document.querySelector("div").style.backgroundImage="url(Noida.jpg)";
	}
	
	console.log(blue);
});

let choice=document.querySelector("#choice");
choice.addEventListener("click",()=>{

});
  


let Post=document.querySelector("#Post")
Post.addEventListener("click",()=>{
	// document.querySelector("button.Post").style.input type="file";
	console.log("Post");
})



let green="choice";
choice.addEventListener("click",()=>{
	if(green==="yellow"){
		green="dark";
		document.querySelector("div.Postfile").style.backgroundImage="url(Budha.jpg)";
	}
	else {
		green="yellow";
		document.querySelector("div.Postfile").style.backgroundImage="url(100006.png)";
	}
	
	console.log(green);
});
let love=document.querySelector(".Love");
love.addEventListener("click",()=>{

});

let pink="Love";
love.addEventListener("click",()=>{
	if(pink==="hot"){
		pink="dark";
		document.querySelector("button.Love").style.backgroundColor="#B8860B";
	}else{
		pink="hot";
		document.querySelector("button.Love").style.backgroundColor="#800000";
	}
	console.log(pink);
})