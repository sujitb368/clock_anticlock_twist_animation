
gsap.registerPlugin(ScrollTrigger);


const images = [
  "download1",
  "download2",
  "download3",
  "download4",
  "download5",
  "download6",
  "download7",
  "download8",
  "download9",
  "download10",
  "download11",
  "download12",
  "download13",
  "download14",
  "download15",
  "download16",
];
let index = 0;
let imgSRC = document.querySelector(".img_container");
let len = images.length;


let scrollEvnt = false;
var tl = gsap.timeline();


var ScrolloMeter = ScrollTrigger.create({
  trigger: ".container",
  pin: true,
  // scrub:0.2,
  start: "top top",
  // end:ScrollTrigger.maxScroll(window),
  onUpdate: (self) => {
    console.log("self",  self);
    // debounce(rotation(self.direction), 500)
    console.log();
    change_image()
    
  }
});

// cframe = {frame: 0}

// function getimg(i){
//   return (`img/download${i}.png`)
// }

// function lodefromimage(){
//   for(var i=0; i<len; i++){
//     const src = getimg(i+1)
//   }
// }
// gsap.to(cframe,{
//   frame:len-1,
//   snap:'frame',
//   scrub:0.5,
//   ScrollTrigger:{
//     trigger:'.img_container',
//     start:'top top',
//     endTrigger:".container",
//     pin:true

//   },
//   onUpdate: ()=> render()
// })


let old = 0;
function change_image() {
  
  let pos = window.scrollY;
  if(pos>old){ 
    old = pos;
    index++
    if(index==len)index=0;
    imgSRC.setAttribute("src", "img/" + images[index] + ".png");
  }
  if(pos<old){ 
    old = pos;
    index--
    if(index==-1)index=len-1;
    imgSRC.setAttribute("src", "img/" + images[index] + ".png");
  }
  // console.log("pos", pos);
  
  
    
    // tl.to(".img_container", { 
    //   duration: 3,
    //   repeat:-1,
    //   // repeatDelay:2.5,
    //   ease: "circ.out",
    //   transformOrigin: "50% 100%",
    //   skewY:"10",
      
    //   rotation:360*direction,
    // });
    
    // console.log("change image called");
    // if(pos>old && index<len){
    //   index++;
    //   imgSRC.setAttribute("src", "img/" + images[index] + ".png");
    // }
    // if(pos<old){
    //   console.log("old",old);
    //   console.log("new",pos);
    //   console.log("index 1", index);
    //   index--;
    //   console.log("index", index);
    // }
    // let j = images[index];
    // console.log("j", j);
    // if(index==len) index=0;
    // if(direction ==- 1) index = index - 1;
    // if(direction == 1) index = index + 1;
    
    // if (index == -1 ) {
    //   index = images.length-1;
    // }
    // if (index == images.length) {
    //   index = 0;
    // }
 

}



// setInterval(() => {
    // change_image();
//   }, 3000);

function clock(direction=1){
  change_image(direction)
  // console.log("inside clock");
  // console.log("inside clock ...............");
  // tl.to(".img_container", {
  //   duration: 2,
  //   repeat:0,
  //   rotation:180*direction,

}

function antiClock(direction=-1){
  change_image(direction);
//   console.log("inside anticlock");
//   tl.to(".img_container", {
//     duration: 2,
//     repeat:0,
//     rotation:180*direction,
// });
}


// function debounce(func, wait) {
//   var timeout;

//   return function () {
//     var context = this;
//     var args = arguments;
//     clearTimeout(timeout);
//     timeout = setTimeout( ()=>{
//       func.apply(context, arguments);
//     }, wait);    
  
//     };
// };


// canvas = document.getElementById("hero-lightpass");
// context = canvas.getContext("2d");
// canvas.width = window.innerWidth;
// canvas.height = window.innerHeight;
// images = [];
// cframe = { frame: 0 };
// frameCount = 567;
// // preloadImages(window.innerWidth > 700 ? 'deskani/MAIN ANIMATION WEB REPEIRED_' : 'mobani/11.23 fixed main animation phone version 3_');

// function getFrame(loc) { console.log("loc", loc); return (`./assets/${loc}.jpg`); };
// function preloadImages(name) {
//   // console.log("name" , name);
// 	for (let i = 0; i < frameCount; i++) {
// 		const src = getFrame(i < 10 ? `${name}0000${i}` : i > 99 ? `${name}00${i}` : `${name}000${i}`);
// 		let img = new Image();
// 		img.src = src;
// 		// images.push(img);
// 	}
// };

// preloadImages()






































// var ScrolloMeter = ScrollTrigger.create({
//       trigger: ".container",
//       // pin: true,
//       start: "top top",
//     // end: "+=10000px",
//       // onEnter: isActive => action.play(),

      
//       onUpdate: (self) => {        
//         console.log("self", self);
//         velo = self.direction;
//         // console.log(velo);
//         // if(velo>0)velo=1
//         // if(velo<0)velo=-1
//         // console.log(velo);

//         // console.log("scrool", velo);
//       //   speed = velo*0.01;
//         if(self.direction == 1){
          
//             change_image()
//           }
//           else{
            
//             console.log("self.direction", self.direction);
//             change_image(self.direction)
//           }
//           // gsap.set(action, {timeScale: velo});
          
//         },
        
//       });
      
      
                                                    
// var rotate = gsap.timeline({
//   scrollTrigger:{
//     trigger: ".img_container",
//     pin: true,
//     scrub:0.2,
//     start: 'top top',
//     end:'+=10000',
//   }
// })
// .to('.img_container', {
//   rotation:360*5,
//   duration:1, ease:'none',
// })

