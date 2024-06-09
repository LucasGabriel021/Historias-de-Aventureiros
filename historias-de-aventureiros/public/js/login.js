$(document).ready(function () {
     const telaLogin = $("#loginEntrar");
     const telaRecup = $("#recuperarSenha");
     const btnRecupSenha = $("#btnRecupSenha");
     const btnEnviarRecup = $("#btnEnviarRecup");

     btnRecupSenha.click(function (e) {
          e.preventDefault();
          if (telaRecup.hasClass("hidden")) {
               telaRecup.removeClass("hidden"); // Mostra a seção de recuperação de senha
               telaLogin.addClass("hidden"); // Esconde a seção de login
          }
     })

     btnEnviarRecup.click(function (e) {
          e.preventDefault();
          $.alert({
               title: "Recuperar senha",
               content: "Foi enviado para o seu e-mail as instruções para recuperar a senha.",
               onOpen: function () {
                    var that = this;
                    setTimeout(function () {
                         that.close();
                    }, 2000);
               },
               onClose: function () {
                    window.location.href = "/login";
               }
          });
     });
});