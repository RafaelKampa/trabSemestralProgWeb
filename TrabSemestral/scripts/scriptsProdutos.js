var array_produtos = [[0, 'Celeste', 'celeste.jpg','Aventura',false],[1,'Battle Chef Brigade', 'chef.png', 'Puzzle', false],[2,'Katana ZERO','katana.jpg','Ação',false],[3,'Stardew Valley','stardew.png','Board Game',false],[4,'Overcooked!','overcooked.jfif','Estratégia',false],[5,'Limbo','limbo.jpg','Puzzle',false],[6,'Terraria','terraria.jfif','Aventura',false]];
var carrinho = [];

window.onload = function(){
    montarCards();
}

function montarCards(){

    document.getElementById("produtos").innerHTML = "";


    for(var i = 0; i < array_produtos.length; i++)
    {
        var conteudo = "";
        conteudo += '<div class="div-card">';
        conteudo += '<div class="div-card-img">';
        conteudo += '<img src="../img/' + array_produtos[i][2] + '" />';
        conteudo += '</div>';
        conteudo += '<div id="produtoNome" class="div-titulo">';
        conteudo += array_produtos[i][1];
        conteudo += '</div>';
        conteudo += '<div class="div-informacoes">';
        conteudo += '<b>Gênero: </b>' + array_produtos[i][3] + '<br>';
        conteudo += '</div>';
        
        if(array_produtos[i][4] == false)
        {
            conteudo += '<div class="div-card-comprar"  onclick="comprar(' + array_produtos[i][0] + ')"  >';
            conteudo += 'Comprar';
            conteudo += '</div>';
        }
        else
        {
            conteudo += '<div class="div-card-comprar div-card-comprado">';
            conteudo += 'Comprado';
            conteudo += '</div>';
        }
        
        conteudo += '</div>';
        
        document.getElementById("produtos").innerHTML += conteudo;
    }
}

function comprar(id){

    array_produtos[id][4] = true;
    
    carrinho.push(array_produtos[id]);

    window.localStorage.setItem("carrinho", JSON.stringify(carrinho));

    montarCards();

}

function mudaPagina(){

    window.location.href = "paginas/carrinho.html";

}

