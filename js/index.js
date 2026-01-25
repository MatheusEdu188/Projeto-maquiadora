//menu responsivo


const toggle = document.getElementById('menu-toggle');
const menu = document.getElementById('nav-itens');
const fecharMenu = document.getElementById('btn-fechar-itens');



toggle.addEventListener('click', ()=>{
    menu.classList.toggle('active');
      document.body.classList.toggle("menu-open");
      body.style.overflow = 'hidden';
})


fecharMenu.addEventListener('click', ()=>{
    menu.classList.remove('active');
      document.body.classList.remove("menu-open");
      body.style.overflow = 'auto';
});






//modal para agendamento dos serviços

const fecharModalAgendar = document.querySelectorAll('.fechar-modal');
const modalAgendar = document.querySelectorAll('.modal-hidden');
const agendarBtnNav = document.querySelectorAll('.agendar-btn-nav');
const body = document.body;

agendarBtnNav.forEach(btn => {
  btn.addEventListener('click', ()=>{
    modalAgendar[0].style.display = 'flex';
    body.style.overflow = 'hidden';
  })
})



fecharModalAgendar.forEach(btn => {
  btn.addEventListener('click', ()=>{
    modalAgendar[0].style.display = 'none';
    body.style.overflow = 'auto';
  })
})