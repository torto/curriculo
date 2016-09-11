'use sctrit';
if (!app) {
    app = {};
}
app.pageNove = (function($) {

    function init() {
      app.loadImagens('nove', '.page-nove');
      cleanImage();
    }

    function aniElement(elemClass) {
      $('.' + elemClass).fadeIn('1000', function() {
      });
    }

    function cleanImage() {
      for (var i = 0; i < app.imagens.length; i++) {
          if (app.imagens[i].elem === 'nove') {
              app.imagesLoad[app.imagens[i].elem][app.imagens[i].alt].style = '';
          }
      }
    }

    return {
        init: init,
        aniElement: aniElement,
        cleanImage: cleanImage
    };

})(jQuery);
