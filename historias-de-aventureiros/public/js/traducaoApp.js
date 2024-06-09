import i18n from './i18n.js';

function googleTranslateElementInit() {
     new google.translate.TranslateElement({
          pageLanguage: 'en',
          includedLanguages: 'en,pt,es',
          layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
     }, 'google_translate_element');
}


$(document).ready(function () {
     const btnIdioma = $("#selectIdioma");

     btnIdioma.change(function () {
          const linguagemSelecionada = $(this).val();
          console.log("Idioma selecionado: ", linguagemSelecionada);
          i18n.changeLanguage(linguagemSelecionada);
          document.getElementById('selecIdioma').title = i18n.t('change_language');
          traduzirPagina(linguagemSelecionada);
     });

     // Initialize with the default language
     document.getElementById('selecIdioma').title = i18n.t('change_language');
});

function traduzirPagina(idioma) {
     console.log("Idioma na função: ", idioma);
     let select = document.querySelector('select.goog-te-combo');
     if (select) {
          select.value = idioma;
     }
}