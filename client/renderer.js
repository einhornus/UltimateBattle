var app;

var picDic = {
  'default':'images/image.jpg'
};

function clear() {
    for (var i = app.stage.children.length - 1; i >= 0; i--) {
        app.stage.removeChild(app.stage.children[i]);
    }
}

function render(w){
    if(w) {
        clear();
        for (var i = 0; i < w.objects.length; i++) {
            var o = w.objects[i];
            console.log(Lib.getMethods(o));
            body = o.body;
            pic = o.getPic();


            actualPic = picDic[pic];
            var bunny = PIXI.Sprite.fromImage(actualPic);
            bunny.anchor.set(0.5);
            bunny.x = app.renderer.width / 2;
            bunny.y = app.renderer.height / 2;
            app.stage.addChild(bunny);
        }
    }
    else{
        console.log('null world')
    }
}

function init(){
    width = 1200;
    height = 800;

    app = new PIXI.Application(1200, 800, {backgroundColor : 0x1099bb});
    document.body.appendChild(app.view);

    app.ticker.add(function(delta) {
        render(world);
    });
}