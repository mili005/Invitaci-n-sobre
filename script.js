const envelope=document.getElementById("envelope");
const sealButton=document.getElementById("sealButton");
const videoCard=document.getElementById("videoCard");
const invitationVideo=document.getElementById("invitationVideo");
const sealCracks=document.querySelectorAll(".seal-crack");
const sealPieces=document.querySelectorAll(".seal-piece");
const sparks=document.querySelectorAll(".spark");
const flapTop=document.querySelector(".flap-top");
const flapBottom=document.querySelector(".flap-bottom");
const flapLeft=document.querySelector(".flap-left");
const flapRight=document.querySelector(".flap-right");

let opened=false;

sealButton.addEventListener("click",openEnvelope);
sealButton.addEventListener("touchstart",function(e){
e.preventDefault();
openEnvelope();
},{passive:false});

function openEnvelope(){
if(opened)return;
opened=true;
sealButton.disabled=true;

// Forzar transform-origin en las solapas
flapTop.style.transformOrigin="50% 100%";
flapBottom.style.transformOrigin="50% 0%";
flapLeft.style.transformOrigin="100% 50%";
flapRight.style.transformOrigin="0% 50%";

anime.timeline({autoplay:true})
.add({
targets:sealButton,
scale:[1,1.1,.95,1.18],
rotate:[0,-5,6,0],
duration:400,
easing:"easeInOutSine"
})
.add({
targets:sealCracks,
opacity:[0,1],
scaleY:[0,1],
delay:anime.stagger(60),
duration:250,
easing:"easeOutQuad"
},"-=150")
.add({
targets:sparks,
opacity:[0,1,0],
translateX:function(){return anime.random(-60,60)},
translateY:function(){return anime.random(-60,60)},
scale:[.3,1.5,0],
duration:500,
easing:"easeOutExpo"
},"-=50")
.add({
targets:sealButton,
scale:[1.18,0],
opacity:[1,0],
rotate:[0,30],
duration:350,
easing:"easeInBack"
},"-=200")
.add({
targets:".seal-piece-top, .seal-piece-bottom",
opacity:[0,1],
scale:[.6,1],
duration:280,
delay:anime.stagger(40),
easing:"easeOutBack",
begin:function(){
document.querySelectorAll(".seal-piece-top, .seal-piece-bottom").forEach(function(el){
el.style.visibility="visible";
});
}
},"-=80")
.add({
targets:envelope,
rotate:[0,90],
duration:1200,
easing:"cubicBezier(.18,.78,.2,1)"
},"-=100")
.add({
targets:flapTop,
rotateX:[0,-170],
duration:1000,
easing:"easeOutCubic"
},"-=800")
.add({
targets:flapBottom,
rotateX:[0,170],
duration:1000,
easing:"easeOutCubic"
},"-=1000")
.add({
targets:flapLeft,
rotateY:[0,-170],
duration:1000,
easing:"easeOutCubic"
},"-=950")
.add({
targets:flapRight,
rotateY:[0,170],
duration:1000,
easing:"easeOutCubic"
},"-=1000")
.add({
targets:videoCard,
opacity:[0,1],
scale:[.5,1],
duration:650,
easing:"easeOutBack",
begin:function(){
videoCard.style.visibility="visible";
videoCard.style.pointerEvents="auto";
},
complete:function(){
invitationVideo.currentTime=0;
invitationVideo.play().catch(function(err){
console.log("Autoplay:",err);
});
}
},"-=350");
}
