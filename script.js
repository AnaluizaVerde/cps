document.getElementById('btnExecutar').addEventListener('click',
    function(){
        alert("Script externo permitido pela CPI!!!")
        var nome = document.getElementById("nome").value;
    var tratamento = document.getElementById("tratamento").value;
    var valor = document.getElementById("valor").value;

    desconto = valor - valor * 0,1;

    // var mensagem = document.getElementById("resposta")

    document.getElementById("resposta").innerHTML = "Olá " + nome + "você irá realizar o tramento de"+ tratamento + "o valor total ficará em " + valor + "reais, mas pagando a vista ficará com um desconto de 10% " + desconto + "reais, e parcelado 6x ficará" + valor/6; 

    }
)
