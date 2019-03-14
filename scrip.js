function Hero(image, top, left, size) {
    this.image = image;
    this.top = top;
    this.left = left;
    this.size = size;

    this.getHeroElement = function () {
        return '<img width="' + this.size + '"' +
            ' height="' + this.size + '"' +
            ' src="' + this.image + '"' +
            ' style="top: ' + this.top + 'px; left:' + this.left + 'px;position:absolute;" />';
    };

    this.moveRight = function () {
        this.left += 5;
    };
    this.moveDown = function () {
        this.top += 5;
    };
    this.moveleft = function () {
        this.left -= 5;
    };
    this.moveup = function () {
        this.top -= 5;
    }
}

var hero = new Hero('ninja1.jpg', 0, 0, 100);

function start() {
    if (hero.left < window.innerWidth - hero.size && hero.top === 0) {
        hero.moveRight();
    }
    if (hero.left > window.innerWidth - hero.size && hero.top < window.innerHeight - hero.size) {
        hero.moveDown();
    }
    if (hero.top >= window.innerHeight - hero.size) {
        hero.moveleft();
    }
    if (hero.left === 0) {
        hero.moveup();
    }
    document.getElementById("game").innerHTML = hero.getHeroElement();
}

setInterval(start, 10);