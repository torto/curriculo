'use sctrit';
if (!app) {
    app = {};
}
app.pageCinco = (function($) {

    function init() {
      app.loadImagens('cinco', '.page-cinco');
      setTimeout(function(){
        app.changePage('page-seis.html');
      },8000);
    }


    return {
        init: init
    };

})(jQuery);
