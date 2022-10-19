class Square {
  constructor(side) {
    this.side = side;
  }
}

class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
}

class Circle {
  constructor(radius) {
    this.radius = radius;
  }
}

class AreaCalculator {
  static calculate(gornus) {
    if (gornus instanceof Square) {
      return gornus.side * gornus.side;
    }
    if (gornus instanceof Rectangle) {
      return gornus.width * gornus.height;
    }
    if (gornus instanceof Circle) {
      return gornus.radius * 2 * Math.PI;
    }
  }
}

const square = new Square(4);
const rectangle = new Rectangle(4, 2);
const circle = new Circle(5);

console.log(AreaCalculator.calculate(square));
console.log(AreaCalculator.calculate(rectangle));
console.log(AreaCalculator.calculate(circle));