var hamburguer = document.querySelector(".hamburguer");

hamburguer.addEventListener("cick", function(){
   document.querySelector(".conteiner").classList.toggle("show-menu");
});