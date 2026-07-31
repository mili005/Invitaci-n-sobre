const envelope=document.getElementById("envelope");
const sealButton=document.getElementById("sealButton");
const videoCard=document.getElementById("videoCard");
const invitationVideo=document.getElementById("invitationVideo");
const flapTop=document.querySelector(".flap-top");
const flapBottom=document.querySelector(".flap-bottom");
const flapLeft=document.querySelector(".flap-left");
const flapRight=document.querySelector(".flap-right");

let opened=false;

sealButton.addEventListener("click",openEnvelope);

function openEnvelope(){
if(opened)return;
opened=true;
sealButton.disabled=true;

anime.timeline({autoplay:true})
.add({
targets:sealButton,
scale:[1,1.15],
rotate:[0,8],
duration:300,
easing:"easeInOutSine"
})
.add({
targets:".seal-crack",
opacity:[0,1],
scaleY:[0,1],
delay:anime.stagger(50),
duration:200,
easing:"easeOutQuad"
})
.add({
targets:".spark",
opacity:[0,1,0],
translateX:()=>anime.random(-50,50),
translateY:()=>anime.random(-50,50),
scale:[.2,1.3,0],
duration:400,
easing:"easeOutExpo"
},"-=100")
.add({
targets:sealButton,
scale:[1.15,0],
opacity:[1,0],
rotate:[8,25],
duration:300,
easing:"easeInBack"
})
.add({
targets:".seal-piece-top, .seal-piece-bottom",
opacity:[0,1],
scale:[.5,1],
duration:250,
delay:anime.stagger(30),
easing:"easeOutBack",
begin:()=>{
document.querySelectorAll(".seal-piece-top, .seal-piece-bottom").forEach(el=>{
el.style.visibility="visible";
});
}
})
.add({
targets:envelope,
rotate:[0,90],
duration:1000,
easing:"easeInOutQuad"
},"-=100")
.add({
targets:flapTop,
duration:1,
begin:()=>{
flapTop.classList.add("open");
}
},"-=700")
.add({
targets:flapBottom,
duration:1,
begin:()=>{
flapBottom.classList.add("open");
}
},"-=700")
.add({
targets:flapLeft,
duration:1,
begin:()=>{
flapLeft.classList.add("open");
}
},"-=700")
.add({
targets:flapRight,
duration:1,
begin:()=>{
flapRight.classList.add("open");
}
},"-=700")
.add({
targets:videoCard,
duration:1,
begin:()=>{
videoCard.classList.add("active");
invitationVideo.play().catch(e=>console.log("Autoplay:",e));
}
},"-=200");
}
