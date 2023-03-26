function parseCount(value) {
    const parsedValue = Number.parseFloat(value);
    if (isNaN(parsedValue)) {
        throw new Error("Невалидное значение");
    }
    return parsedValue;
}

function validateCount(value) {
    try {
        return parseCount(value);
    } catch(error){
        return error;
    }
}

class Triangle {
    constructor(a, b, c) {
        if (a + b <= c || a + c <= b || b + c <= a) {
            throw new Error("Треугольник с такими сторонами не существует");
        }
        this.side1 = a;
        this.side2 = b;
        this.side3 = c;
    }

    get perimeter() {
        return this.side1 + this.side2 + this.side3;
    }

    get area() {
        const p = this.perimeter / 2;
        return Number(Math.sqrt(p * (p - this.side1) * (p - this.side2) * (p - this.side3)).toFixed(3));
    }
}

function getTriangle(a, b, c) {
    try {
        return new Triangle(a, b, c);
    } catch(error) {
        return {
            get perimeter() {
                return "Ошибка! Треугольник не существует";
            },
      
            get area() {
                return "Ошибка! Треугольник не существует";
            }
        }
    }
}
