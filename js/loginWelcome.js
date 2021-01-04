//游標效果
document.addEventListener('mousemove', (event)=> {
    gsap.to('.imgBox', {
      x: event.pageX,
      y: event.pageY,
      stagger: -0.1,
    });
});
document.addEventListener("click",(event) =>{
  bursty(event.pageX,event.pageY);
});
//mouse游標
const tl = gsap.timeline({defaults: {ease: "power2.inOut", duration: 2}});
tl.from('.login-title', { y: 80, clipPath: 'inset(0 0 100% 0)'}, "-=.3");
//mouse特效
function bursty(x,y){
  const burst = new mojs.Burst({
    left: 0,
    top: 0,
    radius: { 0:200 },
    count: 20,
    degree: 360,
    children:{
      fill:{white:"#34E1FF"},
      duration: 2000
    }
  }).tune({ //調整形狀的數值
    x: x,
    y: y
  });
  burst.replay();
}
//煙火效果
setInterval(()=>randomizedConfetti(),500);
function randomizedConfetti() {
  let randomX = Math.floor(Math.random() * (document.body.clientWidth-100) + 0);
  let randomY = Math.floor(Math.random() * (window.innerHeight-200) + 0);
  const burst = new mojs.Burst({
    left: 0,
    top: 0,
    radius: { 0: 200 },
    count: 20,
    degree: 360,
    children: {
      fill: { white: "#34E1FF" },
      duration: 2000
    }
  }).tune({
    x: randomX,
    y: randomY
  });
  burst.replay(); //執行
}