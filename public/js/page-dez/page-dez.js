'use sctrit';
if (!app) {
    app = {};
}
app.pageDez = (function($) {

    function init() {
      app.loadImagens('dez', '.page-dez');
    }


    return {
        init: init
    };

})(jQuery);
