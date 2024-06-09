$(document).ready(function() {
     const btnAumentarFonte = $("#btnAumentarFonte");
     const btnDiminuirFonte = $("#btnDiminuirFonte");
     const incrementarValor = 1.1;
     const decrementarValor = 0.9;
     let tentativaClicks = 0;

     btnAumentarFonte.click(function() {
          console.log("Função de aumentar fonte!");

          if(tentativaClicks <= 4) {
               tentativaClicks++;
               console.log("Tentativas: ", tentativaClicks);

               $("h1, h2, h3, h4, h5, p, span, button, li, a").each(function() {
                    const tamanhoAtual = parseFloat($(this).css("font-size"));
                    // console.log(tamanhoAtual);
                    const novoTamanhoFonte = tamanhoAtual * incrementarValor;
                    $(this).css("font-size", novoTamanhoFonte + "px");
               });
          }   
     });

     btnDiminuirFonte.click(function() {
          if(tentativaClicks > 0) {
               tentativaClicks--;
               $("h1, h2, h3, h4, h5, p, span, button, li, a").each(function() {
                    const tamanhoAtual = parseFloat($(this).css("font-size"));
                    const novoTamanhoFonte = tamanhoAtual * decrementarValor;
                    $(this).css("font-size", novoTamanhoFonte + "px");
               });
          }
          console.log("Função de diminuir fonte!");
     });
});