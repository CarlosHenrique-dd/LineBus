function pesquisar(){
    var input,filtro,menu,menuItens,ruas;

    input = document.getElementById("pesquisa");
    filtro = input.value.toUpperCase();
    menu = document.getElementById("menuL");
    menuItens = menu.getElementsByTagName("li");

    for( var i=0;i<menuItens.length;i++){
        ruas = menuItens[i].getElementsByTagName("p")[0];
        if(ruas.innerHTML.toUpperCase().indexOf(filtro)>-1){
            menuItens[i].style.display="";
        }
        else{
            menuItens[i].style.display="none";
        }
    }

}