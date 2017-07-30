width = 1200;
height = 800;

var app = new PIXI.Application(1200, 800, {backgroundColor : 0x1099bb});
document.body.appendChild(app.view);
var bunny = PIXI.Sprite.fromImage('images/image.jpg')
bunny.anchor.set(0.5);
bunny.x = app.renderer.width / 2;
bunny.y = app.renderer.height / 2;
app.stage.addChild(bunny);
app.ticker.add(function(delta) {
    bunny.rotation += 0.1 * delta;
});


var port = 3000;
var socket = io.connect('http://localhost:' + port);
