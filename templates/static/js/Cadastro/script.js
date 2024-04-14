let visivel = false;
const alteraVisibilidade = document.querySelector('#img_visibilidade');
const inputSenha = document.querySelector('#sh_input_senha');

alteraVisibilidade.addEventListener('click', () => {

    //Torna senha invisivel
    if (visivel === true) {
        inputSenha.type = 'password';
        visivel = false;
        alteraVisibilidade.src = "../../templates/static/img/Cadastro/escondido.png";
    }
    //Torna senha visivel
    else {
        inputSenha.type = 'text';
        visivel = true;
        alteraVisibilidade.src = "../../templates/static/img/Cadastro/olho.png";
    }
});

const btnAcordo = document.querySelector('#sh_acordo');

btnAcordo.addEventListener('click', () => {

    if (btnAcordo.checked) {
        document.querySelector('#sh_button_register').disabled = false;

    } else {
        document.querySelector('#sh_button_register').disabled = true;
        
    }

});

