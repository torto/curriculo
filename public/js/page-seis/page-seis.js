'use sctrit';
if (!app) {
    app = {};
}
app.pageSeis = (function($) {

    function init() {
      app.loadImagens('seis', '.page-seis');
    }

    function changeColor(){
      $('img').addClass('black-white');
    }

    return {
        init: init,
        changeColor: changeColor
    };

})(jQuery);
