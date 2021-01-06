const Decorator = function(stock) {
    this.stock = stock
}

Decorator.prototype.paint = function (){
    this.painted = true

Decorator.prototype.addCan = function() {

}
Decorator.prototype.calculateTotal = function() {

}
Decorator.prototype.enoughPaint = function() {

}
Decorator.prototype.paintIfEnoughPaint = function() {

}

module.exports = Decorator;
