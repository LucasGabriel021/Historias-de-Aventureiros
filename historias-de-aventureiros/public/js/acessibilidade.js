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
                    corProtanopia(textoVerde, "text-verde-primario-protanopia", "text-verde-primario");
                    corProtanopia(textoEscuroVerde, "hover:text-verde-escuro-protanopia", "hover:text-verde-escuro");
                    corProtanopia(bgVerde, "bg-verde-primario-protanopia", "bg-verde-primario");
                    corProtanopia(bgSecundarioVerde, "bg-verde-secundario-protanopia", "bg-verde-secundario");
                    corProtanopia(bgClaroVerde, "bg-verde-claro-protanopia", "bg-verde-claro");
                    corProtanopia(bgVerdeEscuroHover, "hover:bg-verde-escuro-protanopia", "hover:bg-verde-escuro");
                    corProtanopia(bgVerdeSecundarioHover, "hover:bg-verde-secundario-protanopia", "hover:bg-verde-secundario");
                    corProtanopia(tagImg, "filter-protanopia", "");
                    corProtanopia(styleImg, "filter-protanopia", "");
                    break;
               case "Protanopia":
                    console.log("Protanopia");
                    corProtanopia(textoVerde, "text-verde-primario", "text-verde-primario-protanopia");
                    corProtanopia(textoEscuroVerde, "hover:text-verde-escuro", "hover:text-verde-escuro-protanopia");
                    corProtanopia(bgVerde, "bg-verde-primario", "bg-verde-primario-protanopia");
                    corProtanopia(bgSecundarioVerde, "bg-verde-secundario", "bg-verde-secundario-protanopia");
                    corProtanopia(bgClaroVerde, "bg-verde-claro", "bg-verde-claro-protanopia");
                    corProtanopia(bgVerdeEscuroHover, "hover:bg-verde-escuro", "hover:bg-verde-escuro-protanopia");
                    corProtanopia(bgVerdeSecundarioHover, "hover:bg-verde-secundario", "hover:bg-verde-secundario-protanopia");
                    corProtanopia(tagImg, "", "filter-protanopia");
                    corProtanopia(styleImg, "", "filter-protanopia");
                    break;
     
          }
     })

     function corProtanopia(seletor, classeAntiga, classeNova) {
          $(seletor).each(function() {
               $(this).removeClass(classeAntiga).addClass(classeNova);
          });
     }

});