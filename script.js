const menu = document.querySelector('.menu-logo');
const navbar = document.querySelector('.menu-section');

//-------------------------------------------------------------------------------------------------Navbar-----------------------------------------------------------------------------
menu.onclick =() =>{
    navbar.classList.toggle('active');
}
window.addEventListener('scroll',function(){
    if(this.window.scrollY >= 50){
        this.document.querySelector('.navbar').classList.add('sticky');
    }else{
        this.document.querySelector('.navbar').classList.remove('sticky');
    }
})






