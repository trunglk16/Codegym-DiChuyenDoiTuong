
function Hero(image, top, left, size, speed){
  this.image = image;
  this.top = top;
  this.left = left;
  this.size = size;
  this.speed = speed;
  this.setSpeed = function (speed) {
      this.speed = speed
  };

  this.getHeroElement = function(){
    return '<img width="'+ this.size + '"' +
      ' height="'+ this.size + '"' +
      ' src="' + this.image +'"' +
      ' style="top: '+this.top+'px; left:'+this.left+'px;position:absolute;" />';
  }

  this.moveRight = function(){
    this.left += 2;
    console.log('ok: ' + this.left);
  }
    this.moveLeft = function(){
        this.left -= 2;
        console.log('ok: ' + this.left);
    }
    this.moveBottom = function(){
        this.top += 2;
        console.log('ok: ' + this.top);
    }
    this.moveTop = function(){
        this.top -= 2;
        console.log('ok: ' + this.top);
    }
}

var hero = new Hero('mws.png', 450, 750, 200);
  hero.setSpeed(1);
  console.log(hero.left);

function right() {
    switch (hero.left) {
        case 0:
            left();
            break;
        default:
            hero.moveLeft();
            setTimeout(right, 1);
    }
            document.getElementById('game').innerHTML = hero.getHeroElement();
}
/////////////////////////////////BASIC/////////////////////////////////////////
function left() {
    switch (hero.left) {
        case window.innerWidth-hero.size:
            right();
            break;

        default:
                    hero.moveRight();
                setTimeout(left, 1);

    }
            document.getElementById('game').innerHTML = hero.getHeroElement();
}

function bot() {
    switch (hero.top) {
        case 0:
            movetop();
            break;
        default:
            hero.moveTop();
            setTimeout(bot, 1);
    }
    document.getElementById('game').innerHTML = hero.getHeroElement();
}

function movetop() {
    switch (hero.top) {
        case window.innerHeight-200:
            bot();
            break;

        default:
            hero.moveBottom();
            setTimeout(movetop, 1);
    }
    document.getElementById('game').innerHTML = hero.getHeroElement();
}

    bot();
    right();





///////////////////////////CRAZY/////////////////////////////////
// run = [a,b,c,d];
// console.log(run);

//     function a() {
//         hero.moveRight();
//         setTimeout(run[Math.floor(Math.random() * 4)], hero.speed);
//         document.getElementById('game').innerHTML = hero.getHeroElement();
//
//     }
//     function b() {
//         hero.moveLeft();
//         setTimeout(run[Math.floor(Math.random() * 4)], hero.speed);
//         document.getElementById('game').innerHTML = hero.getHeroElement();
//
//     }
//     function c() {
//         hero.moveTop();
//         setTimeout(run[Math.floor(Math.random() * 4)], hero.speed);
//         document.getElementById('game').innerHTML = hero.getHeroElement();
//
//     }
//     function d() {
//         hero.moveBottom();
//         setTimeout(run[Math.floor(Math.random() * 4)], hero.speed);
//         document.getElementById('game').innerHTML = hero.getHeroElement();
//
//     }
//
//
//
// a();
////////////////////////////////////////////////////////////////////////

