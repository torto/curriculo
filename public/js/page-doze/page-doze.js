'use sctrit';
if (!app) {
    app = {};
}
app.pageDoze = (function($) {

    function init() {
      app.loadImagens('doze', '.page-doze');
    }


    return {
        init: init
    };

})(jQuery);
