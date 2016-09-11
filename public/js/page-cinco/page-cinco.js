'use sctrit';
if (!app) {
    app = {};
}
app.pageCinco = (function($) {

    function init() {
      app.loadImagens('cinco', '.page-cinco');
    }


    return {
        init: init
    };

})(jQuery);
