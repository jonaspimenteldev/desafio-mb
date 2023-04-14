const mascaraDiretiva = (app) => {
  return app.directive("mascara", (el, binding) => {
    el.oninput = function (event) {
      let input = event.target;
      let mascara = binding.value;
      let valor = input.value;

      valor = valor.replace(/\D/g, "");

      let posicao = 0;
      let novoValor = "";
      for (let i = 0; i < mascara.length && posicao < valor.length; i++) {
        let mascaraChar = mascara.charAt(i);
        let valorChar = valor.charAt(posicao);
        if (mascaraChar == "X") {
          novoValor += valorChar;
          posicao++;
        } else {
          novoValor += mascaraChar;
        }
      }

      input.value = novoValor;
    };
  });
};

export default mascaraDiretiva;
