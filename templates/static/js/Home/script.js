document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.carousel');
    var instances = M.Carousel.init(elems, {
        
    });

    var menuLateral = document.querySelectorAll('.sidenav');
    M.Sidenav.init(menuLateral);
});

$(document).ready(function(){
    $('.carousel').carousel();
    $('.sidenav').sidenav();
});


//Filtro de pesquisa
function search_animal() {
    let input = document.getElementById('searchbar').value
    input=input.toLowerCase();
    let profissoes = document.getElementsByClassName('sh-options-option');
      
    for (i = 0; i < profissoes.length; i++) { 
        if (!profissoes[i].innerHTML.toLowerCase().includes(input)) {
            profissoes[i].style.display="none";
        }
        else {
            profissoes[i].style.display="list-item";                 
        }
    }
} 