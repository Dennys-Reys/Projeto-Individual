let count = 1;
document.getElementById("radio1").checked = true;

setInterval(function(){
proxImagem();
},5000)

function proxImagem(){
    count++;
    if (count>4) {
        count =1;
    }
    document.getElementById("radio" + count).checked = true;
}
//função para perguntas frequentes//
const pergunta = document.querySelectorAll('.pergunta')
    const resposta = document.querySelectorAll('.pergunta')

    for (var i = 0; i < pergunta.length; i++) {
        pergunta[i].addEventListener('click', () => {
            
            if (pergunta[i].classList.contains('fechar')) {
                pergunta[i].classList.toggle('fechar')
                resposta[i].classList.toggle('ativar')
            }else{
                pergunta[i].classList.add('fechar')
                resposta[i].classList.add('ativar')

            }
        })
    }