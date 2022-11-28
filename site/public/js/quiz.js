const start_btn = document.querySelector(".start_btn button");
const info_box = document.querySelector(".info_box");
const exit_btn = info_box.querySelector(".botoes .quit");
const continue_btn = info_box.querySelector(".botoes .restart");
const quiz_box = document.querySelector(".quiz_box");
const option_list = document.querySelector(".option_list");
const timeContador =quiz_box.querySelector(".timer .timer_sec");
const timeLiner =quiz_box.querySelector("header .time_line");

// Se clicar no botão iniciar quiz 

start_btn.onclick =() =>{
  info_box.classList.add("activeInfo"); // mostra a caixa de informções

}
  // Se clicar no botão sair do quiz 

  exit_btn.onclick =() =>{
     info_box.classList.remove("activeInfo"); // esconde a caixa de informações

}
// Se clicar no botão continuar quiz 

continue_btn.onclick =() =>{
     info_box.classList.remove("activeInfo"); // esconde a caixa de informações
     quiz_box.classList.add("activeQuiz"); // Mostra o quiz
     mostrePerguntas(0);
     queContador(1);
     startTimer(15);
     startTimerLine(0);

}
var que_count = 0;
var que_numero = 1;
var contador;
var timeValor = 15;
var widthValor = 0;

const next_btn = quiz_box.querySelector(".next_btn");
const result_box = document.querySelector(".result_box");
const restart_quiz = result_box.querySelector(".botoes .restart");
const quit_quiz = result_box.querySelector(".botoes .quit");

// Se o botao next for clicado
next_btn.onclick =() =>{
   if(que_count < perguntas.length - 1){
    que_count++;
    que_numero++;
    mostrePerguntas(que_count);
    queContador(que_numero);
    clearInterval(contador)
    startTimer(timeValor);
    clearInterval(contadorLine)
    startTimerLine(widthValor);
    next_btn.style.display = "none";
   }
   else{
        console.log("Perguntas completadas");
        mostreResultBox();
   }
    
}
// Pegando perguntas e opções da array
function mostrePerguntas(index){
    const que_text =document.querySelector(".que_text");
    
    var que_tag ='<span>'+ perguntas[index].numero +"." + perguntas[index].pergunta +'</span>'
    var option_tag = '<div class="option">'+ perguntas[index].opcoes[0] + '<span></span></div>'
                     + '<div class="option">'+ perguntas[index].opcoes[1] +'<span></span></div>'
                     + '<div class="option">'+ perguntas[index].opcoes[2] +'<span></span></div>'
                     + '<div class="option">'+ perguntas[index].opcoes[3] +'<span></span></div>'; 
    que_text.innerHTML = que_tag;
    option_list.innerHTML = option_tag;
    const option = option_list.querySelectorAll(".option")

    for (var i = 0; i < option.length; i++) {
        option[i].setAttribute("onclick", "optionSelected(this)" )
    }
}
var tickIcon = '<div class="icon tick"><i class="fa-solid fa-check"></i></div>';
var crossIcon = '<div class="icon cross"><i class="fa-solid fa-xmark"></i></div>';

function optionSelected(resposta){
    clearInterval(contador);
    clearInterval(contadorLine);
    var userResp = resposta.textContent;
    var respCerta = perguntas[que_count].resposta;
    var allOpcions = option_list.children.length;
    if(userResp == respCerta){
        resposta.classList.add("correct");
        console.log("Resposta correta");
        resposta.insertAdjacentHTML("beforeend", tickIcon)
    }
    else{
        resposta.classList.add("incorrect");
        console.log("Resposta incorreta");
        resposta.insertAdjacentHTML("beforeend", crossIcon)

        // Se a resposta estiver incorreta, ir automaticamente para a correta
        for (var i = 0; i < allOpcions; i++) {
            if(option_list.children[i].textContent == respCerta){
                option_list.children[i].setAttribute("class", "option correct" );
                option_list.children[i].insertAdjacentHTML("beforeend", tickIcon)
            }
        }
    }
    //Uma  que o user selecionar, as outras opcões serão desabilitadas
    
    for (var i = 0; i < allOpcions; i++) {
        option_list.children[i].classList.add("desabilitado");
    
    }
    next_btn.style.display = "block";
}
function mostreResultBox(){
    info_box.classList.remove("activeInfo"); // esconde a caixa de informações
    quiz_box.classList.remove("activeQuiz"); // esconde o quiz
    result_box.classList.add("activeResult"); // Mostra o resultado
}
function startTimer(time){
    contador = setInterval(timer, 1000);
    function timer(){
        timeContador.textContent = time;
        time--;
        if(time < 9){
            var addZero = timeContador.textContent;
            timeContador.textContent = "0" + addZero;
        }
        if(time < 0){
            clearInterval(contador);
            timeContador.textContent = "00";
        }
    }
}
function startTimerLine(time){
    contadorLine = setInterval(timer, 29);
    function timer(){
      time += 1;
      timeLiner.style.width = time + "px";
        if(time > 549){
            clearInterval(contadorLine);
        }
    }
}











function queContador(index){
    const bottom_contador = quiz_box.querySelector(".total_quiz");
var totalQuestCont = '<span><p>'+ index + '</p>de<p>'+ perguntas.length +'</p>Perguntas</span>';
bottom_contador.innerHTML = totalQuestCont;
}