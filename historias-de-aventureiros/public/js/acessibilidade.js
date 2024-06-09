$(document).ready(function() {
     const btnAumentarFonte = $("#btnAumentarFonte");
     const btnDiminuirFonte = $("#btnDiminuirFonte");
     const INCREMENTARVALOR = 1.1;
     const DECREMENTARVALOR = 0.9;
     let tentativaClicks = 0;

     btnAumentarFonte.click(function() {
          console.log("Função de aumentar fonte!");

          if(tentativaClicks <= 4) {
               tentativaClicks++;
               console.log("Tentativas: ", tentativaClicks);

               $.alert({
                    title: "Aumentar fonte",
                    content: "O tamanho da fonte foi aumentado em 10%.",
                    autoClose: "alert|1000",
                    buttons: {
                         alert: {
                           isHidden: true, 
                           action: function () {
                             // Ação do botão alert (pode ficar vazio)
                           }
                         }
                       }
               });

               $("h1, h2, h3, h4, h5, p, span, button, li, a").each(function() {
                    const tamanhoAtual = parseFloat($(this).css("font-size"));
                    // console.log(tamanhoAtual);
                    const novoTamanhoFonte = tamanhoAtual * INCREMENTARVALOR;
                    $(this).css("font-size", novoTamanhoFonte + "px");
               });
          }   
     });

     btnDiminuirFonte.click(function() {
          if(tentativaClicks > 0) {
               tentativaClicks--;

               $.alert({
                    title: "Diminuir fonte",
                    content: "O tamanho da fonte foi diminuído em 10%.",
                    autoClose: "alert|1000",
                    buttons: {
                         alert: {
                           isHidden: true, 
                           action: function () {
                             // Ação do botão alert (pode ficar vazio)
                           }
                         }
                       }
               });

               $("h1, h2, h3, h4, h5, p, span, button, li, a").each(function() {
                    const tamanhoAtual = parseFloat($(this).css("font-size"));
                    const novoTamanhoFonte = tamanhoAtual * DECREMENTARVALOR;
                    $(this).css("font-size", novoTamanhoFonte + "px");
               });
          }
          console.log("Função de diminuir fonte!");
     });
});