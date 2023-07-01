let link=document.querySelectorAll('.nav-link');
let navbar=document.querySelector('#navbar');
let contain=document.querySelector('#navcontainer');
let titolo=document.querySelector('#titolo');
let inizio=document.querySelector('.divis');
let logo=document.querySelectorAll('.logo1');
let generi=document.querySelector('#generivinili');






window.addEventListener('scroll', (links)=>{
    let scrolled=window.scrollY;
    if(scrolled>0){
        inizio.classList.add('sticky-top');
        navbar.style.height='150px';
        navbar.classList.remove('bg-dark');
        navbar.classList.add('scroll');
        contain.classList.remove('bg-dark');
        contain.classList.add('scroll');
        link.forEach((link)=>{
            link.classList.remove('text-light');
            link.classList.add('text-dark');
        

        })
        titolo.classList.remove('text-warning');
        titolo.classList.add('text-dark');
        
        logo.forEach((elemento)=>{
            elemento.src="http://127.0.0.1:5500//763193 (1).png";
        })

    
        

      
       
    



    }else{
        navbar.style.height='75px';
        navbar.classList.remove('scroll');
        navbar.classList.add('bg-dark');
        contain.classList.remove('scroll');
        contain.classList.add('bg-dark');
        link.forEach((link)=>{
            link.classList.add('text-light');
            link.classList.remove('text-dark');

        })
        titolo.classList.add('text-warning');
        titolo.classList.remove('text-dark');
        

        logo.forEach((elemento)=>{
            elemento.src="http://127.0.0.1:5500//763193-ffffff.png";
        })
    }


})



let cards=[{genere:"50's", artist:'Prince ', vinile:'Blues Rock', img:'./prince.jpg'},
           {genere:"60's", artist:'Beatles', vinile:'Yellow Submarine', img:'./The-Beatles-Ringo-Starr-Paul-McCartney-George.webp'},
           {genere:"70's", artist:'Queen ', vinile:'Kids of magic', img:'./760314e56d157735f43fcb680131eba7.jpg'},
           {genere:"80's", artist:'Michael Jackson ', vinile:'Thriller', img:'./71CT3oWpR6L._UF1000,1000_QL80_.jpg'},
        ]
cards.forEach((genere)=>{
    let div=document.createElement('div');
    div.classList.add('col-12', 'col-md-3');
    div.innerHTML=`
    <div class="new-card card" ">
    <img class="imglp" src="${genere.img}"  alt="...">
    <div class="card-body">
      <h5 class="card-title">${genere.genere}</h5>
      <p class="card-text"><p>Artisti:${genere.artist}</p>La musica del Vintage Showcase LP!</p>
      <a href="#" class="btn btn-outline-danger">Visualizza LP</a>
    </div>
  </div>`;
  generi.appendChild(div);

})





let swipper=document.querySelector('.swiper-wrapper');

let carousel=[
  {img:'./Ledzeppelin.jpg', name:'LDZ',title:'Stairway to heaven'},
  {img:'./kiss.jpg', name:'KISS',title:'Rock and Roll over '},
  {img:'./Elvispresleylp.jpg', name:'ELVIS',title:'The best of Elvis'},
  {img:'./acdc.jpg', name:'ACDC',title:'Black Ice'},
  {img:'./StewieWonder.jpg', name:'STEWIE WONDER',title:'Hotter than July'},
  {img:'./run dmc.jpg', name:'RUN/DMC', title:"It's like that"},
]

carousel.forEach((vinile)=>{
  let div=document.createElement('div');
  div.classList.add('mt-5','swiper-slide', 'd-flex', 'align-items-center', 'justify-content-center');
  div.innerHTML=`
  <div class="carouselcard">
  <img class="imgcard" src="${vinile.img}" alt="">
  <h5 style="text-center" class="titlecard">${vinile.name}<h5>
  <p class="load">${vinile.title}</p>
  <button class="justify-content-center btn btn-outline-danger">ACQUISTA!</button>
</div>`;
swipper.appendChild(div);
  

});

const swiper = new Swiper('.swiper', {
  // Optional parameters
  loop: true,
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  
});