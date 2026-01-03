/**
 * Reading Material: https://precodes.hashnode.dev/demystifying-javascript-execution
 * Execution Context: environment where javascript code is run
 * Call Stack: management structure that keeps track of the order of execution contexts
 *
 * The execution context is created in two phases:
 * 1. Memory Creation Phase: javascript allocates memory to all the variables and functions
 * 2. Code Execution Phase: the whole code is run line by line and execution contexts are pushed into call stack
 */

function calculateSum(a, b) {
	let result = a + b

	function multiplyByTwo(num) {
		return num * 2
	}

	let doubleResult = multiplyByTwo(result)

	return doubleResult
}

let finalResult = calculateSum(3, 5)

/**
 * EXECUTION FLOW:
 *
 * GLOBAL CONTEXT - Memory Phase:
 * - calculateSum: function reference
 * - finalResult: undefined
 *
 * Call Stack: [Global EC]
 *
 * GLOBAL CONTEXT - Execution Phase:
 * - finalResult = calculateSum(3, 5) is called
 * - New execution context created for calculateSum
 *
 * Call Stack: [Global EC, calculateSum EC]
 *
 * CALCULATESUM CONTEXT - Memory Phase:
 * - a: 3, b: 5
 * - result: undefined
 * - multiplyByTwo: function reference
 * - doubleResult: undefined
 *
 * CALCULATESUM CONTEXT - Execution Phase:
 * - result = 3 + 5 = 8
 * - multiplyByTwo(8) is called
 * - New execution context created for multiplyByTwo
 * Call Stack: [Global EC, calculateSum EC, multiplyByTwo EC]
 *
 * MULTIPLYBYTWO CONTEXT:
 * - Memory: num: 8
 * - Execution: return 8 * 2 = 16
 * - Context popped from stack
 * Call Stack: [Global EC, calculateSum EC]
 *
 * BACK TO CALCULATESUM:
 * - doubleResult = 16
 * - return 16
 * - Context popped from stack
 * Call Stack: [Global EC]
 *
 * BACK TO GLOBAL:
 * - finalResult = 16
 * - Program ends, Global EC popped
 * Call Stack: []
 */
