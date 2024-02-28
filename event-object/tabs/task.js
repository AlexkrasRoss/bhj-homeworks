let tabNav =  Array.prototype.slice.apply(document.querySelectorAll(".tab"));
let tabContent =  Array.prototype.slice.apply(document.querySelectorAll(".tab__content"));

tabNav.forEach( item =>  { 
   item.addEventListener('click', function(event){
     let target = event.target;
     if(target.classList.contains('tab')){
       let tab = tabNav.indexOf(target);
       tabNav.map(item => item.classList.remove("tab_active"));
       tabNav[tab].classList.add("tab_active");
     
    tabContent.map(tabContent => tabContent.classList.remove("tab__content_active"));
     tabContent[tab].classList.add("tab__content_active");
     // console.log(item)
     }
    
   })
   })