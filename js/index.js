const toggle = document.getElementById('menu-toggle');
const menu = document.getElementById('nav-itens');
const fecharMenu = document.getElementById('btn-fechar-itens');


toggle.addEventListener('click', ()=>{
    menu.classList.toggle('active');
})


fecharMenu.addEventListener('click', ()=>{
    menu.classList.remove('active');
});