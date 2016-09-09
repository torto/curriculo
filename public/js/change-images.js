if(!window.app){
	window.app = {};
}
(function(app) {

    app.changeImages = {
        '00:21': function(){
					app.changePage('page-tres.html');
				},
				'00:23' : function () {
						app.pageTres.visibleMenino();
				},
				'00:30': function () {
					app.pageTres.visibleMedio();
				},
				'00:39' : function () {
						app.pageTres.visibleVeio();
				},
				'00:50': function(){
					app.changePage('page-quatro.html');
				},
				'01:21': function(){
					app.changePage('page-cinco.html');
				},
				'01:35': function(){
					app.changePage('page-seis.html');
				},
				'01:49': function() {
					app.pageSeis.changeColor();
				},
				'01:56': function(){
					app.changePage('page-sete.html');
				},
				'02:22': function(){
					app.changePage('page-dez.html');
				},
				'02:40': function(){
					app.changePage('page-oito.html');
				},
				'02:54': function(){
					app.changePage('page-nove.html');
				},
				'02:57': function(){
					app.pageNove.aniElement('java');
				},
				'03:08': function(){
					app.pageNove.aniElement('cordova');
				},
				'03:25': function(){
					// FIREFOX
					app.changePage('page-onze.html');
				},
				'03:45': function(){
					// app.pageNove.aniElement('javascript');
					app.changePage('page-nove.html');
				},
				'03:59': function(){
					app.pageNove.aniElement('angular');
				},
				'04:00': function(){
					app.pageNove.aniElement('nodejs');
				},
				'04:01': function(){
					app.pageNove.aniElement('gulp');
					app.pageNove.aniElement('grunt');
				},
				'04:04': function(){
					app.pageNove.aniElement('html');
					app.pageNove.aniElement('css');
				},
				'04:09': function(){
					app.pageNove.cleanImage();
				},
				'04:41': function(){
					app.changePage('page-doze.html');
				},
				'05:28': function(){
					app.fullScreen.cancelFullScreen();
					$('.traducao').css('display', 'none');
					app.changePage('final.html');
				}


    };

})(window.app);
