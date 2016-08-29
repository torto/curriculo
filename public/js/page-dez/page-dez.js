'use sctrit';
if (!app) {
    app = {};
}
app.pageDez = (function($) {

    function init() {
      mixpanel.track("Paginas Acessadas",{
        "page": "Anal. Desv. Sistemas"
      });
      app.loadImagens('dez', '.page-dez');
      setTimeout(function(){
        // app.changePage('page-onze.html');
      }, 6000);
    }


    return {
        init: init
    };

})(jQuery);
