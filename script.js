
const cartShop = document.querySelector(".image-shop").addEventListener("click" , (e)=>{
   // alert("shop")

   document.querySelector(".image-part3").style.display = "none"
   document.querySelector(".cart").style.display = "block"
})

document.querySelector(".btn-close").addEventListener("click" , (e)=>{
   document.querySelector(".cart").style.display = "none"
   document.querySelector(".image-part3").style.display = "block"
})

document.querySelector("#info-maghale").addEventListener("click" , (e)=>{
   // alert("مقالات")

   Swal.fire({
      icon: "oops",
      title: "oops ...",
      text: "متاسفانه هنوز مقاله ای وجود ندارد"
  });
})

document.querySelector("#info-Mardane").addEventListener("click" , (e)=>{
   const targetElement = document.querySelector(".container-main1");
   targetElement.scrollIntoView({
      behavior: 'smooth'
   });
})

document.querySelector("#info-woman").addEventListener("click" , (e)=>{
   const targetElement = document.querySelector(".container-main2");
   targetElement.scrollIntoView({
      behavior: 'smooth'
   });
})

document.querySelector("#Telegram").addEventListener("click" , (e)=>{
   // alert("TELEGRAM")

   open("https://web.telegram.org/")
})

document.querySelector("#Instagram").addEventListener("click" , (e)=>{
   // alert("Instagram")

   open("https://www.instagram.com/")
})

document.querySelector("#info-berand").addEventListener("click" , (e)=>{
   Swal.fire({
      title: "Chanel ...",
      text: "برند ما چنل است"
  });
})







let product1 = "coco channel"
let priceProduct1 = 400000;


function setItem1(){
   let firstItem = localStorage.setItem("item1" , product1);
   setItem1()
}

function setPrice1(){
   let firstPrice = localStorage.setItem("item1P" , priceProduct1);

   setPrice1();
}

function getData1() {
   let getItem1 = localStorage.getItem("item1");
   let getPrice1 = localStorage.getItem("item1P");

   document.querySelector(".item1").innerHTML = getItem1;
   document.querySelector(".PItem1").innerHTML = getPrice1;
}

getData1();



//

let product2 = "alleru channel"
let priceProduct2 = 780000;


function setItem2(){
   let secondItem = localStorage.setItem("item2" , product2);
   setItem2();
};

function setPrice2(){
   let secondPrice = localStorage.setItem("item2P" , priceProduct2);

   setPrice2();
};

function getData2() {
   let getItem2 = localStorage.getItem("item2");
   let getPrice2 = localStorage.getItem("item2P");

   document.querySelector(".item2").innerHTML = getItem2;
   document.querySelector(".PItem2").innerHTML = getPrice2;
};

getData2();

document.getElementById("2-btn").addEventListener("click" , setItem2);
document.getElementById("2-btn").addEventListener("click" , setPrice2);

//

let product3 = "Bleu channel"
let priceProduct3 = 180000;


function setItem3(){
   let thirdtItem = localStorage.setItem("item3" , product3);
   setItem3()
}

function setPrice3(){
   let thirdPrice = localStorage.setItem("item3P" , priceProduct3);

   setPrice3();
};

function getData3() {
   let getItem3 = localStorage.getItem("item3");
   let getPrice3 = localStorage.getItem("item3P");

   document.querySelector(".item3").innerHTML = getItem3;
   document.querySelector(".PItem3").innerHTML = getPrice3;
};

getData3();

document.getElementById("3-btn").addEventListener("click" , setItem3);
document.getElementById("3-btn").addEventListener("click" , setPrice3);
//

let product4 = "N5 channel"
let priceProduct4 = 495000;


function setItem4(){
   let fourthItem = localStorage.setItem("item4" , product4);
   setItem4();
};

function setPrice4(){
   let fourthPrice = localStorage.setItem("item4P" , priceProduct4);

   setPrice4();
};

function getData4() {
   let getItem4 = localStorage.getItem("item4");
   let getPrice4 = localStorage.getItem("item4P");

   document.querySelector(".item4").innerHTML = getItem4;
   document.querySelector(".PItem4").innerHTML = getPrice4;
}

getData4();

document.getElementById("4-btn").addEventListener("click" , setItem4);
document.getElementById("4-btn").addEventListener("click" , setPrice4);

//

let product5 = "Bleu channel"
let priceProduct5 = 800000;


function setItem5(){
   let fiveItem = localStorage.setItem("item5" , product5);
   setItem5();
};

function setPrice5(){
   let fivePrice = localStorage.setItem("item5P" , priceProduct5);

   setPrice5();
};

function getData5() {
   let getItem5 = localStorage.getItem("item5");
   let getPrice5 = localStorage.getItem("item5P");

   document.querySelector(".item5").innerHTML = getItem5;
   document.querySelector(".PItem5").innerHTML = getPrice5;;
};

getData5();

document.getElementById("5-btn").addEventListener("click" , setItem5);
document.getElementById("5-btn").addEventListener("click" , setPrice5);

