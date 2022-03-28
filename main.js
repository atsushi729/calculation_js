class Calculater {
  constructor(previousOperantTextElement, currentOperantTextElement) {
    this.previousOperandTextElement = previousOperantTextElement;
    this.currentOperandTextElement = currentOperantTextElement;
    this.clear();
  }
  
  
  clear() {
    this.previousOperand = '';
    this.currentOperand = '';
    this.operation = undefined
  }
  
  delete() {
    
  }
  
  appendNumber(number) {
    if (number === '.' && this.currentOperand.includes('.')) return
    this.currentOperand = this.currentOperand.toString() + number.toString();
  }
  
  chooseOperation(operation) {
    if (this.currentOperand === '') return
    this.operation = operation;
    this.previousOperand = currentOperand;
    this.currentOperand = '';
  }
  
  compute() {
    
  }
  
  updateDisplay() {
    this.currentOperandTextElement.innerText = this.currentOperand;
    this.previousOperandTextElement.innerText = this.previousOperand;
  }
}


const numberButton = document.querySelectorAll('[data-number]')
const operationButton = document.querySelectorAll('[data-operation]')

const equealButton = document.querySelector('[data-equals]')
const deleteButton = document.querySelector('[data-delete]')
const allClearButton = document.querySelector('[data-all-clear]')
const previousOperandTextElement = document.querySelector('[data-previous-operand]')
const currentOperandTextElement = document.querySelector('[data-current-operand]')

const calculater = new Calculater(previousOperandTextElement, currentOperandTextElement);

numberButtons.forEach(button => {
  button.addEventListener('click', () => {
    calculator.appendNumber(button.innerText)
    calculator.updateDisplay()
  })
})

operationButton.forEach(button => {
  button.addEventListener('click', () => {
    calculater.chooseOperation(button.innerText);
    calculater.updateDisplay();
  })
})


