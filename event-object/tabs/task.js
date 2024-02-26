const tabNav = document.querySelectorAll(".tab"),
tabContent = document.querySelectorAll(".tab__content");

tabNav.forEach( (item,index) =>  { 
   item.addEventListener('click',function(){
     document.querySelector(".tab__content").classList.toggle('tab__content_active')
         tabNav.forEach( item =>  {
       item.classList.remove('tab_active')
     });
     item.classList.add('tab_active')
      });
      });