$(document).ready(function () {
  if($('#banner_1')){
    $('#banner_1').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
    //   autoplay: true,
    //   autoplaySpeed: 2000,
      dots: true
    });
  }
   if($('#banner_2')){
    $('#banner_2').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      // autoplay: true,
      // autoplaySpeed: 2000,
      dots:true
    });
   }

  });


  let prodPrice = document.querySelectorAll('.main-price-digit')
  if(prodPrice.length>0){
    prodPrice.forEach((item)=>{
      let curr = item.innerHTML;
      let result =  curr.split('').reverse().join('').replace(/\d{3}(?=.)/g, '$& ');
      item.innerHTML = result.split('').reverse().join('')
    })
  }

  let menuBtn = document.getElementById('menu')
  let closeNavBtn = document.getElementById('nav-close-btn') 
  if(menuBtn){
    menuBtn.addEventListener('click',()=>{
      document.body.classList.add('active-main-nav')
    })
  }

  if(closeNavBtn){
    closeNavBtn.addEventListener('click',()=>{
      document.body.classList.remove('active-main-nav')
     
    })

  }

  if( document.querySelector('.main-nav-bg') ){
    document.querySelector('.main-nav-bg').addEventListener('click',()=>{
      document.body.classList.remove('active-main-nav')

    })
  }