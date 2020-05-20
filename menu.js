var inicio;
var Menu = {
    
    preload: function(){
        juego.load.image('inicio', 'img/bgini.png');
        juego.load.image('boton', 'img/bt.png');
    },
    
    create: function(){
        inicio = juego.add.tileSprite(0, 0, 370, 550, 'inicio');
        var boton = this.add.button(juego.width/2, juego.height/2, 'boton', this.iniciarJuego, this);
        boton.anchor.setTo(0.5);
        boton.scale.setTo(0.35, 0.35);
        var txtIniciar = juego.add.text(juego.width/2, juego.height/2 -85, "Iniciar juego", {font: "bold 24px sans-serif", fill:"black", align:"center"});
        txtIniciar.anchor.setTo(0.5);
        var txtTitulo = juego.add.text(juego.width/2, juego.height/2 -125, "Flappy Eagle", {font: "bold 30px sans-serif", fill:"white", align:"center"});
        txtTitulo.anchor.setTo(0.5);
    },
    
    iniciarJuego: function(){
        this.state.start('Juego');
    }
    
};