
const botao = document.getElementById("Botao");
const input = document.getElementById("meuInput");
const mensagem = document.getElementById("mensagem");

const palavraCorreta = "banana";

    botao.addEventListener('click', function() {
 // Obtém o valor digitado no input
 const palavraDigitada = input.value.trim().toLowerCase(); // .trim() remove espaços extras

 // Verifica se a palavra digitada é igual à correta
 if (palavraDigitada === palavraCorreta) {
   mensagem.textContent = "Palavra correta!";
   mensagem.style.color = "green";
 } else {
   mensagem.textContent = "Palavra incorreta!";
   mensagem.style.color = "red";
 }
});