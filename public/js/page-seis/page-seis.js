'use sctrit';
if (!app) {
    app = {};
}
app.pageSeis = (function($) {

    function init() {
      app.loadImagens('seis', '.page-seis');
      setTimeout(function(){
        app.changePage('page-sete.html');
      },8000);
    }


    return {
        init: init
    };

})(jQuery);
