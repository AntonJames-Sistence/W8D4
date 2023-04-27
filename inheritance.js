Function.prototype.inherits = function (SuperClass) {
    function Surrogate () {};
    Surrogate.prototype = SuperClass.prototype;
    this.prototype = new Surrogate();
    this.prototype.constructor = this;
};

function MovingObject () {}
myMoving = new MovingObject;

Ship.inherits(MovingObject);

function Ship () {}
myShip = new Ship ()

MovingObject.prototype.fligh = function() {
    console.log("vvvvjuhhhh");
}

// myAster = function Asteroid () {}
// Asteroid.inherits(MovingObject);