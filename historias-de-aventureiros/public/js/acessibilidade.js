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

     const textoVerde = $(".text-verde-primario");
     const textoEscuroVerde = $(".hover\\:text-verde-escuro");
     const textoHoverVerde = $(".hover\\:text-verde-primario");
     const bgVerde = $(".bg-verde-primario");
     const bgSecundarioVerde = $(".bg-verde-secundario");
     const bgClaroVerde = $(".bg-verde-claro");
     const bgVerdeEscuroHover = $(".hover\\:bg-verde-escuro");
     const bgVerdeSecundarioHover = $(".hover\\:bg-verde-secundario");
     const tagImg = $("img");
     const styleImg = $(".bg-imagem");

     $("#selecCor").on("change", function() {
          const corSelecionada = $(this).val();
          console.log("Cor selecionada: ", corSelecionada);

          switch(corSelecionada) {
               case "Normal":
                    console.log("Normal");
                    trocarCor(textoVerde, "text-verde-primario-deuteranopia text-verde-primario-protanopia", "text-verde-primario");
                    trocarCor(textoEscuroVerde, "hover:text-verde-escuro-deuteranopia hover:text-verde-escuro-protanopia", "hover:text-verde-escuro");
                    trocarCor(textoHoverVerde, "hover:text-verde-primario-deuteranopia hover:text-verde-primario-protanopia", "hover:text-verde-primario");
                    trocarCor(bgVerde, "bg-verde-primario-deuteranopia bg-verde-primario-protanopia", "bg-verde-primario");
                    trocarCor(bgSecundarioVerde, "bg-verde-secundario-deuteranopia bg-verde-secundario-protanopia", "bg-verde-secundario");
                    trocarCor(bgClaroVerde, "bg-verde-claro-deuteranopia bg-verde-claro-protanopia", "bg-verde-claro");
                    trocarCor(bgVerdeEscuroHover, "hover:bg-verde-escuro-deuteranopia hover:bg-verde-escuro-protanopia", "hover:bg-verde-escuro");
                    trocarCor(bgVerdeSecundarioHover, "hover:bg-verde-secundario-deuteranopia hover:bg-verde-secundario-protanopia", "hover:bg-verde-secundario");
                    trocarCor(tagImg, "filter-deuteranopia filter-protanopia", "");
                    trocarCor(styleImg, "filter-deuteranopia filter-protanopia", "");
                    break;
               case "Protanopia":
                    console.log("Protanopia");
                    trocarCor(textoVerde, "text-verde-primario", "text-verde-primario-protanopia");
                    trocarCor(textoEscuroVerde, "hover:text-verde-escuro", "hover:text-verde-escuro-protanopia");
                    trocarCor(textoHoverVerde, "hover:text-verde-primario", "hover:text-verde-primario-protanopia");
                    trocarCor(bgVerde, "bg-verde-primario", "bg-verde-primario-protanopia");
                    trocarCor(bgSecundarioVerde, "bg-verde-secundario", "bg-verde-secundario-protanopia");
                    trocarCor(bgClaroVerde, "bg-verde-claro", "bg-verde-claro-protanopia");
                    trocarCor(bgVerdeEscuroHover, "hover:bg-verde-escuro", "hover:bg-verde-escuro-protanopia");
                    trocarCor(bgVerdeSecundarioHover, "hover:bg-verde-secundario", "hover:bg-verde-secundario-protanopia");
                    trocarCor(tagImg, "", "filter-protanopia");
                    trocarCor(styleImg, "", "filter-protanopia");
                    
                    break;
               case "Deuteranopia":
                    console.log("Deuteranopia");
                    trocarCor(textoVerde, "text-verde-primario", "text-verde-primario-deuteranopia");
                    trocarCor(textoEscuroVerde, "hover:text-verde-escuro", "hover:text-verde-escuro-deuteranopia");
                    trocarCor(textoHoverVerde, "hover:text-verde-primario", "hover:text-verde-primario-deuteranopia");
                    trocarCor(bgVerde, "bg-verde-primario", "bg-verde-primario-deuteranopia");
                    trocarCor(bgSecundarioVerde, "bg-verde-secundario", "bg-verde-secundario-deuteranopia");
                    trocarCor(bgClaroVerde, "bg-verde-claro", "bg-verde-claro-deuteranopia");
                    trocarCor(bgVerdeEscuroHover, "hover:bg-verde-escuro", "hover:bg-verde-escuro-deuteranopia");
                    trocarCor(bgVerdeSecundarioHover, "hover:bg-verde-secundario", "hover:bg-verde-secundario-deuteranopia");
                    trocarCor(tagImg, "", "filter-deuteranopia");
                    trocarCor(styleImg, "", "filter-deuteranopia");
                    break;
     
          }
     })

     function trocarCor(seletor, classeAntiga, classeNova) {
          $(seletor).each(function() {
               $(this).removeClass(classeAntiga).addClass(classeNova);
          });
     }

});