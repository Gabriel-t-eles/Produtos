let codigo_Produto = document.querySelector("#codigo_Produto");
let botao = document.querySelector("#botao");

function Produto(){
    let num = Number(codigo_Produto.value)

    if (num === 001) {
        alert("Parafuso");
    }else if(num === 002){
        alert("Porca");
    }else if(num === 003){
        alert("Prego");
    }else{
        alert("Diversos")
    }
}


botao.onclick = function(){
    Produto();
}
