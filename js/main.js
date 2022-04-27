class Calculator {
	constructor(previousOperandEl, currentOperandEl) {
		this.previousOperandEl = previousOperandEl
		this.currentOperandEl = currentOperandEl
		this.clear()

	}
	clear() {
		this.currentOperand = '0'
		this.previousOperand = null
		this.operator = null
		this.textLength = 0


	}
	appendDisplay(num) {
		if (!this.operator &&  this.currentOperand === '0' && num !== '.')  {
			this.currentOperand = num
		}
		 else if (this.operator && this.previousOperand === this.currentOperand) {
			this.currentOperand = num
		}
		else {
			this.currentOperand = this.currentOperand + num

		}

	}

	percent() {
		this.currentOperand = this.currentOperand / 100

	}

	negate() {
		if (this.currentOperand[0] === '-') {
			this.currentOperand = this.currentOperand.substr(1)
		} else {
			this.currentOperand = `-${this.currentOperand}`
		}

	}

	setSelectedOperator(operator) {
		if (!this.currentOperand) return
		if (this.previousOperand !== null) {
			// perform calculation
			this.calculate()
		}

		// store state
		this.operator = operator
		this.previousOperand = this.currentOperand


	}

	calculate() {
		let solved
		let previous = parseFloat(this.previousOperand)
		let current = parseFloat(this.currentOperand)
		if (typeof previous !== 'number' || typeof current !== 'number') return
		switch (this.operator) {
			case 'plus':
				solved = previous + current
				break
			case 'minus':
				solved = previous - current
				break
			case 'multiply':
				solved = previous * current
				break
			case 'divide':
				solved = previous / current
				break
			default:
				return
		}

		if (window.innerWidth >= 600) {
			if (solved.length > 20) {
				this.currentOperand = solved.toExponential()
				console.log(solved)
			} else {
				this.currentOperand = solved
			}

		} else if (window.innerWidth < 600 ) {
				if (solved.length > 10) {
					this.currentOperand = solved.toExponential()
				} else {
					this.currentOperand = solved
				}

			}

		this.previousOperand = this.currentOperand
		this.operator = null

	}
	scaleDisplayFont() {

		const options =
		[
			{
				numThreshold: 20,
				maxSize: 20,
				fontDiff: 2,
				numDiff: 2,
				minSize: 8

			},
			{
				numThreshold: 10,
				maxSize: 16,
				fontDiff: 2,
				numDiff: 1,
				minSize: 7
			}

		]
		let scale
		let fontSize

		window.innerWidth > 600 ? scale = options[0] : scale = options[1]
		const { maxSize, fontDiff, numDiff, minSize, numThreshold} = scale
		fontSize = maxSize

		if (this.textLength < numThreshold) return


		else {
			fontSize -= Math.floor((this.textLength / numDiff ) - (fontDiff * 4 ))
			if (fontSize < minSize) fontSize = minSize
		}

		this.currentOperandEl.style.fontSize = fontSize + 'px'

	}

	updateDisplay() {
		this.currentOperandEl.value = this.currentOperand
		this.operator ? this.previousOperandEl.innerText = this.previousOperand : this.previousOperandEl.innerText = ''
		// store length of display
		this.textLength = this.currentOperandEl.value.length

	}

}

// DOM elements
const numberKeys = document.querySelectorAll('[data-type="number"]')
const operatorKeys = document.querySelectorAll('[data-type="operator"]')
const equalsKey = document.querySelector('[data-type="equal"]')
const decimalKey = document.querySelector('[data-type="decimal"]')
const percentKey = document.querySelector('[data-type="percent"]')
const clearKey = document.querySelector('[data-type="clear"]')
const negateKey = document.querySelector('[data-type="negate"]')
const previousOperandEl = document.querySelector('[data-type="previous-operand"]')
const currentOperandEl = document.querySelector('[data-type="current-operand"]')
const keys = document.querySelectorAll('.calculator-keys')
const displayContainer = document.querySelector('.calculator-display')
// Create instance of Calculator
const calculator = new Calculator(previousOperandEl, currentOperandEl)


// Event Listeners
numberKeys.forEach(key => {
	key.addEventListener('click', () => {
		calculator.appendDisplay(key.innerText)
		calculator.updateDisplay()
		calculator.scaleDisplayFont()
		clearKey.innerText = 'C'

	})

})

operatorKeys.forEach(key => {
	key.addEventListener('click', () => {
		calculator.setSelectedOperator(key.className)
		calculator.updateDisplay()


	})

})
clearKey.addEventListener('click', () => {
	clearKey.innerText = 'AC'
	calculator.clear()
	calculator.updateDisplay()


})
equalsKey.addEventListener('click', () => {
	calculator.calculate()
	calculator.updateDisplay()
	window.innerWidth > 600 ?
		calculator.currentOperandEl.style.fontSize = '20px' :
		calculator.currentOperandEl.style.fontSize = '16px'





})

decimalKey.addEventListener('click', () => {
	if (!calculator.currentOperandEl.value.includes('.')) {
		calculator.appendDisplay('.')
		calculator.updateDisplay()

	}

})
percentKey.addEventListener('click', () => {
	calculator.percent()
	calculator.updateDisplay()
})

negateKey.addEventListener('click', () => {
	calculator.negate()
	calculator.updateDisplay()
})


// handle grid gap clicking
keys.forEach(key => {
	key.addEventListener('click', (e) => {
		if (!e.target.closest('button')) return

	})
})

