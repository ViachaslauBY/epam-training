let button = document.getElementById('button'); 

function Point(x, y) { 
  return {
    coordinatesX: x,
    coordinatesY: y,
    toString: function () {
        return `(${this.coordinatesX}, ${this.coordinatesY})`;
    }
  }
}

function Line(firstPoint, secondPoint) {
  return {
    startPoint: firstPoint,
    endPoint: secondPoint,
    toString() {
      return `(${this.startPoint.coordinatesX}, ${this.startPoint.coordinatesY}, ${this.endPoint.coordinatesX}, ${this.endPoint.coordinatesY})`;
    }
  }
}

function calculateDistance(startPoint, endPoint) {
  return Math.sqrt(Math.pow(startPoint.coordinatesX - endPoint.coordinatesX, 2) + Math.pow(startPoint.coordinatesY - endPoint.coordinatesY, 2));
}

function canBeTriangle() {
  let lineFirst = calculateDistance(firstPoint, secondPoint);
  let lineSecond = calculateDistance(firstPoint, thirdPoint);
  let lineThird = calculateDistance(secondPoint, thirdPoint);   

  return lineFirst < lineSecond + lineThird && lineSecond < lineFirst + lineThird && lineThird < lineFirst + lineSecond;
}

let firstPoint = new Point(3, 1);
let secondPoint = new Point(7, 1);
let thirdPoint = new Point(6, 4);

let firstLine = new Line(firstPoint, secondPoint);
let secondLine = new Line(firstPoint, thirdPoint);
let thirdLine = new Line(secondPoint, thirdPoint);

button.addEventListener('click' , () => {   
  jsConsole.writeLine('Can the segment lines form triangle: ' + canBeTriangle(firstLine, secondLine, thirdLine)); 
  jsConsole.writeLine(''); 
  jsConsole.writeLine('First point: ' + firstPoint);
  jsConsole.writeLine('Second point: ' + secondPoint);
  jsConsole.writeLine('Third point: ' + thirdPoint);
  jsConsole.writeLine('');
  jsConsole.writeLine('First line: ' + firstLine);
  jsConsole.writeLine('Second line: ' + secondLine);
  jsConsole.writeLine('Third line: ' + thirdLine);  
});

