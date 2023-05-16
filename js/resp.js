burger = document.querySelector('.burger')
navbar = documemt.querySelector('.navbar')
navList = documemt.querySelector('.nav-list')
leftnav = document.querySelector('.leftnav')




burger.addEventListner('click', () =>{
    leftnav.classList.toggle('v-class-resp');
    navList.classList.toggle('v-class-resp');
    navbar.classList.toggle('h-nav-resp');
})