'use sctrit';
if (!app) {
    app = {};
}
app.pageOito = (function($) {

    function init() {
      mixpanel.track("Paginas Acessadas",{
        "page": "Pato Branco"
      });
      app.loadImagens('oito', '.page-oito');
      setTimeout(function(){
        app.changePage('page-nove.html');
      },8000);
    }


    return {
        init: init
    };

})(jQuery);
