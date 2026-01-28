const imgCarrosel = [
    {
        src: '../assets/img/carrosel/maq1.jpg',
    },
    {
        src: '../assets/img/carrosel/maq2.jpg',
    },
    {
        src: '../assets/img/carrosel/maq3.jpg',
    }
];



const btn_voltar = document.getElementById('btn-voltar');
const btn_avancar = document.getElementById('btn-avancar');
const imgElement = document.querySelector('.img-carrosel');

let indiceAtual = 0;





btn_avancar.addEventListener('click', () => {
    
    indiceAtual++;
    if(indiceAtual >= imgCarrosel.length){
        indiceAtual = 0;
    }
    imgElement.classList.remove('slide-direita');
    void imgElement.offsetWidth;
    
    imgElement.classList.add('slide-direita');
    console.log(indiceAtual);
    
    setTimeout(() => {
        imgElement.classList.remove('slide-direita');
        imgElement.src = imgCarrosel[indiceAtual].src;
  }, 400);

})


btn_voltar.addEventListener('click', () => {
    
    indiceAtual--;
    if(indiceAtual < 0){
        indiceAtual = imgCarrosel.length -1;
    }
    imgElement.classList.remove('slide-esquerda');
    void imgElement.offsetWidth;


    imgElement.classList.add('slide-esquerda');

    setTimeout(()=>{
        imgElement.classList.remove('slide-esquerda');
        imgElement.src = imgCarrosel[indiceAtual].src;
            
    },400)

    
    console.log(indiceAtual);

})











const pesquisa = [
    {
        id: 1,
        titulo: 'Noiva',
        tipo: 'noiva',
        imagens: [
            '../assets/img/pesquisa/noiva1.jpg',
            '../assets/img/pesquisa/noiva2.jpg',
            '../assets/img/pesquisa/noiva3.jpg',
        ],
    },
    {
        id: 2,
        titulo: 'Social',
        tipo: 'social',
        imagens: [
            '../assets/img/carrosel/maq1.jpg',
            '../assets/img/carrosel/maq2.jpg',
            '../assets/img/pesquisa/infantil3.jpg',
        ],
    },
    {
        id: 3,
        titulo: 'Debutante',
        tipo: 'debutante',
        imagens: [
            '../assets/img/pesquisa/festa1.jpg',
            '../assets/img/pesquisa/festa2.jpg',
            '../assets/img/pesquisa/festa3.jpg',
        ],  
    }
]


const containerPesquisa = document.querySelector('.container-pesquisa');
let resultados;


function gerarPesquisa(pesquisa){
    containerPesquisa.innerHTML = '';
    let totalImagens = 0;

    pesquisa.forEach(p => {
        totalImagens += p.imagens.length;


    });
    resultados = `Foram encontrados ${totalImagens} resultados para sua pesquisa.`;
    const tituloPesquisa = document.createElement('h2');
    tituloPesquisa.classList.add('titulo-com-enfase');
    tituloPesquisa.innerHTML = `${resultados}`;

    containerPesquisa.appendChild(tituloPesquisa);
    
    pesquisa.forEach(p => {

        const divPesquisa = document.createElement('div');

        const divImagens = document.createElement('div');
        divImagens.classList.add('divImagens');
        p.imagens.forEach(src => {

            const divImg = document.createElement('div');
            divImg.classList.add('divImgPesquisa');

            const imgP = document.createElement('img');
            imgP.classList.add('imgPesquisa');
            imgP.src = src

            divImg.appendChild(imgP);
            divImagens.appendChild(divImg);

        })


        divPesquisa.appendChild(divImagens);

        containerPesquisa.appendChild(divPesquisa)


    });
    

    

    

}


const btnPesquisas = document.querySelectorAll('.opcao-make');

btnPesquisas.forEach(btn => {
    btn.addEventListener('click', ()=>{
        const tipoSelecionado = btn.dataset.tipo;

        const pesquisaSelecionada = pesquisa.filter(item => item.tipo === tipoSelecionado);

        gerarPesquisa(pesquisaSelecionada)
    })
})

