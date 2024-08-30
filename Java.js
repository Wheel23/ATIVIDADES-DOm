
const numero1 = document.getElementById("input1");
const numero2 = document.getElementById("input2");
const operacao = document.getElementById("operacao");
const botaoCalcular = document.getElementById("calcular");
const resultado = document.getElementById("resultado");


botaoCalcular.addEventListener("click", function () {
  
  const valor1 = parseFloat(numero1.value);
  const valor2 = parseFloat(numero2.value);
  const operacaoSelecionada = operacao.value;



  let resultadoFinal;
  switch (operacaoSelecionada) {
    case "soma":
      resultadoFinal = valor1 + valor2;
      break;
    case "subtracao":
      resultadoFinal = valor1 - valor2;
      break;
    case "multiplicacao":
      resultadoFinal = valor1 * valor2;
      break;
    case "divisao":
      if (valor2 === 0) {
        resultado.textContent = "Erro: Divisão por zero!";
        resultado.style.color = "red";
        return;
      }
      resultadoFinal = valor1 / valor2;
      break;
    default:
      resultado.textContent = "Selecione uma operação válida.";
      resultado.style.color = "red";
      return;
  }

  resultado.textContent = `Resultado: ${resultadoFinal}`;
  resultado.style.color = "green";
});
