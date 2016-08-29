'use sctrit';
if (!app) {
    app = {};
}
app.pageSete = (function($) {

    function init() {
      mixpanel.track("Paginas Acessadas",{
        "page": "Acidente"
      });
      app.loadImagens('sete', '.page-sete');
      setTimeout(function(){
        app.changePage('page-oito.html');
      },8000);
    }


    return {
        init: init
    };

})(jQuery);
