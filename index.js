function Punto(x, y) {
  this.x = x
  this.y = y
  this.mostrar = function() {
    return `x=${this.x} , y=${this.y}`
  }
}

p1 = new Punto(10, 20)
p2 = new Punto(18, 28)

console.log(p1.mostrar(), p2.mostrar())
