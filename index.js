var randomNumber1 = Math.floor(Math.random()*6) + 1;
document.querySelector(".img1").setAttribute("src","images/dice"+randomNumber1+".png");
var randomNumber2 = Math.floor(Math.random()*6) + 1;
document.querySelector(".img2").setAttribute("src","images/dice"+randomNumber2+".png");
console.log(randomNumber1,randomNumber2);

if (randomNumber1 > randomNumber2){
	document.querySelector("h1").innerText = "😼 Player 1 wins!";
}
else if (randomNumber2 > randomNumber1){
	document.querySelector("h1").innerText = "😏 Player 2 wins!";
}
else{
	document.querySelector("h1").innerText = "😐 Draw! Try Again";
}