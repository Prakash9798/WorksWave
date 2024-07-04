
function loading(){
    var t1= gsap.timeline();
    t1.to(".yellow1",{
        top:"-100%",
        delay:0.5,
        duration:0.7,
        ease:'expo.out'
    })
    
     t1.from(".yellow2",{
        top:"-100%",
        delay:0.6,
        duration:0.7,
        ease:'expo.out'
     },"anim")
     t1.to('.loader h1',{
        color:'black',
        duration:0.7,
        delay:0.2
     },"anim")
    
    t1.to(".loader",{
       display:'none'
    })
}
loading();
const scroll = new LocomotiveScroll({
    el: document.querySelector('.main'),
    smooth: true
});

document.querySelector(".footer h2").addEventListener("click",function(){
    scroll.scrollTo(0);
})
var elems = document.querySelectorAll(".elem");
  var page2=document.querySelector(".page2");
elems.forEach(function(val){
   val.addEventListener("mouseenter",function(){
    var bgimg= val.getAttribute("data-img")
 page2.style.backgroundImage = `url(${bgimg})`

   
   })
})


 