
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

