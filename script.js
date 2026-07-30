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
sealButton.addEventListener("touchstart",event=>{
event.preventDefault();
openEnvelope();
},{passive:false});

function openEnvelope(){
if(opened)return;
opened=true;
sealButton.disabled=true;

const timeline=anime.timeline({
autoplay:true,
easing:"easeOutCubic"
});

timeline
.add({
targets:sealButton,
scale:[1,1.08,.96,1.16],
rotate:[0,-4,5,0],
duration:420,
easing:"easeInOutSine"
})
.add({
targets:sealCracks,
opacity:[0,1],
scaleY:[0,1],
delay:anime.stagger(70),
duration:260,
easing:"easeOutQuad"
},"-=180")
.add({
targets:sparks,
opacity:[0,1,0],
translateX:[0,anime.stagger([45,-45])],
translateY:[0,anime.stagger([-38,38])],
scale:[.4,1.4,0],
duration:520,
easing:"easeOutExpo"
},"-=60")
.add({
targets:sealButton,
scale:[1.16,0],
opacity:[1,0],
rotate:[0,28],
duration:360,
easing:"easeInBack"
},"-=250")
.add({
targets:sealPieces,
opacity:[0,1],
scale:[.65,1],
duration:300,
delay:anime.stagger(45),
easing:"easeOutBack"
},"-=100")
.add({
targets:envelope,
rotate:[0,90],
duration:1200,
easing:"cubicBezier(.18,.78,.2,1)",
complete:()=>{
envelope.classList.add("opened");
}
},"-=50")
.add({
targets:flapTop,
rotateX:[0,-165],
translateZ:[0,12],
duration:1150,
easing:"cubicBezier(.18,.78,.2,1)"
},"-=900")
.add({
targets:flapBottom,
rotateX:[0,165],
translateZ:[0,12],
duration:1150,
easing:"cubicBezier(.18,.78,.2,1)"
},"-=1150")
.add({
targets:flapLeft,
rotateY:[0,-165],
translateZ:[0,12],
duration:1120,
easing:"cubicBezier(.18,.78,.2,1)"
},"-=1080")
.add({
targets:flapRight,
rotateY:[0,165],
translateZ:[0,12],
duration:1120,
easing:"cubicBezier(.18,.78,.2,1)"
},"-=1120")
.add({
targets:videoCard,
opacity:[0,1],
scale:[.58,1],
duration:760,
easing:"easeOutBack",
complete:()=>{
invitationVideo.currentTime=0;
invitationVideo.play();
}
},"-=520")
.add({
targets:sealPieces,
scale:[1,1.04,1],
duration:450,
delay:anime.stagger(55),
easing:"easeInOutSine"
},"-=330");
}
