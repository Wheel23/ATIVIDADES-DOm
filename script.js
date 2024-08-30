
const botao = document.getElementById("Botao");
const input = document.getElementById("meuInput");
const mensagem = document.getElementById("mensagem");

const palavraCorreta = "banana";

    botao.addEventListener('click', function() {
 
 const palavraDigitada = input.value.trim().toLowerCase(); 
 if (palavraDigitada === palavraCorreta) {
   mensagem.textContent = "Palavra correta!";
   mensagem.style.color = "green";
 } else {
   mensagem.textContent = "Palavra incorreta!";
   mensagem.style.color = "red";
 }
});