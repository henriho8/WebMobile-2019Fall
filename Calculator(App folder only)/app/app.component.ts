import { Component } from '@angular/core';
//import {forEach} from '@angular/router/src/utils/collection';
//import {parseIntAutoRadix} from '@angular/common/src/i18n/format_number';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'CalculatorICP';
  number = '0';
  equation = '0';
  elementsArray = [];

  calculatorButtons: Array<{elemClass: string, innerText: string}> = [];

  constructor() {
    this.calculatorButtons.push({elemClass: 'button', innerText: '0'});
    this.calculatorButtons.push({elemClass: 'button', innerText: '='});
    this.calculatorButtons.push({elemClass: 'button', innerText: '%'});
    this.calculatorButtons.push({elemClass: 'button op', innerText: '+'});
    this.calculatorButtons.push({elemClass: 'button', innerText: '1'});
    this.calculatorButtons.push({elemClass: 'button', innerText: '2'});
    this.calculatorButtons.push({elemClass: 'button', innerText: '3'});
    this.calculatorButtons.push({elemClass: 'button op', innerText: '-'});
    this.calculatorButtons.push({elemClass: 'button', innerText: '4'});
    this.calculatorButtons.push({elemClass: 'button', innerText: '5'});
    this.calculatorButtons.push({elemClass: 'button', innerText: '6'});
    this.calculatorButtons.push({elemClass: 'button op', innerText: '*'});
    this.calculatorButtons.push({elemClass: 'button', innerText: '7'});
    this.calculatorButtons.push({elemClass: 'button', innerText: '8'});
    this.calculatorButtons.push({elemClass: 'button', innerText: '9'});
    this.calculatorButtons.push({elemClass: 'button op', innerText: '/'});
    this.calculatorButtons.push({elemClass: 'button clear', innerText: 'Clear'});
  }

  clear();
// Clear function
  clear() {
    this.equation = '0';
    this.number = '0';
    this.elementsArray = [];
  }

  clearNumber() {
    this.number = '0';
  }

// Adding equations, multiply, divide, modulus, addition, subtraction functions
  eqAdd(x, y) {
    if (this.equation === '0' || this.equation === '=') { this.equation = ''; }
    this.elementsArray.push(x);
    this.elementsArray.push(y);
    this.equation += x;
    this.equation += y;
  }

  multiply(x, y) {
    const z = parseInt(this.elementsArray[x], 10) * parseInt(this.elementsArray[y], 10);
    this.elementsArray[x] = z.toString();
    this.elementsArray.splice(x + 1, 2);
  }

  divide(x, y) {
    const z = parseInt(this.elementsArray[x], 10) / parseInt(this.elementsArray[y], 10);
    this.elementsArray[x] = z.toString();
    this.elementsArray.splice(x + 1, 2);
  }

  modulus(x, y) {
    const z = parseInt(this.elementsArray[x], 10) % parseInt(this.elementsArray[y], 10);
    this.elementsArray[x] = z.toString();
    this.elementsArray.splice(x + 1, 2);
  }

  add(x, y) {
    const z = parseInt(this.elementsArray[x], 10) + parseInt(this.elementsArray[y], 10);
    this.elementsArray[x] = z.toString();
    this.elementsArray.splice(x + 1, 2);
  }

  subtract(x, y) {
    const z = parseInt(this.elementsArray[x], 10) - parseInt(this.elementsArray[y], 10);
    this.elementsArray[x] = z.toString();
    this.elementsArray.splice(x + 1, 2);
  }


  calculate() {
    for (let i = 0; i < this.elementsArray.length; i++) {
      if (this.elementsArray[i] === '*') {
        this.multiply(i - 1, i + 1);
        i = i - 2;
      } else if (this.elementsArray[i] === '/') {
        this.divide(i - 1, i + 1);
        i = i - 2;
      } else if (this.elementsArray[i] === '%') {
        this.modulus(i - 1, i + 1);
        i = i - 2;
      }
    }
    for (let i = 0; i < this.elementsArray.length; i++) {
      if (this.elementsArray[i] === '+') {
        this.add(i - 1, i + 1);
        i = i - 2;
      } else if (this.elementsArray[i] === '-') {
        this.subtract(i - 1, i + 1);
        i = i - 2;
      }
    }
  }


  pushButton (buttonChar) {
    switch (buttonChar) {
      case '+':
      {
        this.eqAdd(this.number, '+');
        this.clearNumber();
        break;
      }
      case '-':
      {
        this.eqAdd(this.number, '-');
        this.clearNumber();
        break;
      }

      case '*':
      {
        this.eqAdd(this.number, '*');
        this.clearNumber();
        break;
      }
      case '/':
      {
        this.eqAdd(this.number, '/');
        this.clearNumber();
        break;
      }

      case '%':
      {
        this.eqAdd(this.number, '%');
        this.clearNumber();
        break;
      }
      case 'Clear':
      {
        this.clear();
        break;

      }

      case '=':
      {
        this.eqAdd(this.number, '=');
        this.elementsArray.pop();
        this.calculate();
        this.number = this.elementsArray[0];
        this.equation = '=';
        this.elementsArray.pop();
        break;
      }

      default:
      {
        const numString = this.number + buttonChar;
        const numNum = parseInt(numString, 10);
        this.number = numNum.toString(10);
        break;
      }
    }


  }
}
