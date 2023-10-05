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
var tl = gsap.timeline({
    ScrollTrigger:{
        trigger: ".container",
        start: "top top",
        onUpdate: (self) => {
          console.log("self", self);
        
         
        //   if(self.direction == 1){
        //       change_image()
        //       console.log("self.direction", self.direction);
        //     }
        //     else{
        //     console.log("self.direction", self.direction);
        //       change_image(self.direction)
        //   }
         
    
        },
    }

});
t = tl.onUpdate(self)=self.direction
console.log("t", t);
function change_image(direction=1) {
    console.log("direction in change_img" , direction);
    index = (direction == -1)? index-1 : index;
    console.log("change image called");  
    let j = images[index];
    imgSRC.setAttribute("src", "img/" + images[index] + ".png");
    tl.to(".img_container", {
        duration: 2,
        repeat:1,
        rotation:180*direction,
    });
    console.log("j", j);
    index = index + 1;
    if (index == images.length) {
      index = 0;
    }
  }

//   var ScrolloMeter = ScrollTrigger.create({
//     trigger: ".container",
//     start: "top top",
//     onUpdate: (self) => {
//       console.log("self", self);
    
     
//       if(self.direction == 1){
//           change_image()
//           console.log("self.direction", self.direction);
//         }
//         else{
//         console.log("self.direction", self.direction);
//           change_image(self.direction)
//       }
     

//     },
    
//   });

//   ScrollTrigger.addEventListener("scrollStart", function(){
    //       console.log("velo", velo);
    
    //   })

  ScrollTrigger.addEventListener("scrollStart", function(){
      console.log("scroll start");
          
  })