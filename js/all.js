//游標事件監聽
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
//gotop
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
    if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
        document.getElementById("GoTop").style.display = "block";
    } else {
        document.getElementById("GoTop").style.display = "none";
    }
}
// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    $('html, body').animate({scrollTop:0}, 'slow');
}
//登入-新增變數
var signUpBtn = document.querySelector('.signUp');
var logInBtn =  document.querySelector('.login');

//signup
function signUpcheck(){
  var emailStr = document.querySelector('.email').value;
  var passwordStr = document.querySelector('.password').value;
  var account = {}; //輸入的資料
  account.email = emailStr;
  account.password = passwordStr;

  var xhr = new XMLHttpRequest();
  xhr.open('post','https://hexschool-tutorial.herokuapp.com/api/signup', true);
  xhr.setRequestHeader('Content-type', 'application/json');
  var data = JSON.stringify(account); //因為格式是 JSON，所以要轉字串
  xhr.send(data);
  xhr.onload = function () {
    var callbackData = JSON.parse(xhr.responseText); //因為輸入資料目前是字串，要轉成物件才能使用
    var str = callbackData.message;
    if (str == "帳號註冊成功") {
      alert('帳號註冊成功');
    }else if(str == '帳號已被使用') {
      alert('帳號已被使用');
    }else{
      alert('請輸入正確資訊')
    }
  }
}
//監聽事件
signUpBtn.addEventListener('click', signUpcheck , false);
logInBtn.addEventListener('click' , logIncheck , false);




//login
/*function logIncheck() {
  var emailStr = document.querySelector('.email').value;
  var passwordStr = document.querySelector('.password').value;
  var account = {}; //輸入的資料
  account.email = emailStr;
  account.password = passwordStr;

  var xhr = new XMLHttpRequest();
  xhr.open('post' , 'https://hexschool-tutorial.herokuapp.com/api/signIn', true);
  xhr.setRequestHeader('Content-type', 'application/json');
  var data = JSON.stringify(account); //json轉string
  xhr.send(data);
  xhr.onload = function(){
    var callbackData = JSON.parse(xhr.responseText);
    var str = callbackData.message;
    if(str == '登入成功'){
      alert('登入成功');
    }else{
      alert('此帳號不存在或帳號密碼錯誤')
    }
  }
}*/



