function parseCount(value){
    let result = Number.parseFloat(value);
    if (isNaN(result)){
        throw new Error ('Невалидное значение');
    } return result;
}     

function validateCount(value){
    try {
        parseCount(value);
    } catch(Error) {
        return Error;
    }
}

class Triangle {
    constructor(firstSide, secondSide, thirdSide) {
        this.firstSide = firstSide;
        this.secondSide = secondSide;
        this.thirdSide = thirdSide;
     if (
        firstSide + secondSide < thirdSide ||
        secondSide + thirdSide < firstSide ||
        firstSide + thirdSide < secondSide) {
            throw new Error ("Треугольник с такими сторонами не существует");
        }
    }
    
    get perimeter() {
        return this.firstSide + this.secondSide + this.thirdSide;
    }
 
    get area() {
        let halfPerimeter = this.perimeter / 2;
        return Number(Math.sqrt(halfPerimeter * (halfPerimeter - this.firstSide) * (halfPerimeter - this.secondSide) * (halfPerimeter - this.thirdSide)).toFixed(3));
    }
}

function getTriangle(firstSide, secondSide, thirdSide) {
    try {
        return new Triangle(firstSide, secondSide, thirdSide);
    }
    catch (err) {
        return {
            get perimeter() {
                return 'Ошибка! Треугольник не существует';
            },
            get area() {
                return 'Ошибка! Треугольник не существует';
            }
        }
    }
}




﻿
