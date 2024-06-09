$(document).ready(function() {
     const btnPesquisa = $("#btnPesquisa");
     btnPesquisa.click(function() {
          if($("#buscaPrincipal").val() !== "") {
               criarUrl();
          }
     });

     $("#buscaPrincipal").keydown(function(e) {
          if(e.key === "Enter") {
               if($("#buscaPrincipal").val() !== "") {
                    criarUrl();
               }
          }
     });
});

function criarUrl() {
     let infoPesquisa = $("#buscaPrincipal").val();
     let tipoPesquisa = $("#tipoPesquisa").val();
     console.log("Pesquisa: " + tipoPesquisa + " | " + infoPesquisa);

     let url = `/pesquisa?tipo=${encodeURI(tipoPesquisa)}info=${encodeURI(infoPesquisa)}`;
     window.location.href = url;
}