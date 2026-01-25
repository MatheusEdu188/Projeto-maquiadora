const btn = document.querySelectorAll('.agendar-btn');


btn.forEach(button => {
    button.addEventListener('click', (e)=>{


        e.preventDefault();

        const tipo = document.querySelector('input[name="tipo"]:checked');
        const data = document.getElementById('horario').value;
        const nomeUsuario = document.getElementById('nome-usuario').value;

        if(!nomeUsuario|| !tipo|| !data){
            alert('Por favor, preencha todos os campos antes de agendar o serviço.');
            return;
        }

        const msg = `Olá, me chamo ${nomeUsuario} e gostaria de agendar um serviço de maquiagem.\n\nServiços:\n-Tipo: ${tipo.value}
-Data: ${data}`;


        const url = `https://wa.me/83991403460?text=${encodeURIComponent(msg)}`;

        window.open(url, '_blank');
    })
})