let visivel = false;
const alteraVisibilidade = document.querySelector('#img_visibilidade');
const inputSenha = document.querySelector('#sh_input_senha');

alteraVisibilidade.addEventListener('click', () => {

    //Torna senha invisivel
    if (visivel === true) {
        inputSenha.type = 'password';
        visivel = false;
        alteraVisibilidade.src = alteraVisibilidade.dataset.escondido;
    }
    //Torna senha visivel
    else {
        inputSenha.type = 'text';
        visivel = true;
        alteraVisibilidade.src = alteraVisibilidade.dataset.olho;
    }
});
