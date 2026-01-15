const toggle = document.getElementById('menu-toggle');
const menu = document.getElementById('nav-itens');
const fecharMenu = document.getElementById('btn-fechar-itens');


toggle.addEventListener('click', ()=>{
    menu.classList.toggle('active');
      document.body.classList.toggle("menu-open");
})


fecharMenu.addEventListener('click', ()=>{
    menu.classList.remove('active');
      document.body.classList.remove("menu-open");
});