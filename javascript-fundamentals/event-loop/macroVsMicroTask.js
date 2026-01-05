/**
 * Predict Output Order (Event Loop)
 *
 * TASK:
 * - Predict the output order of 5 code snippets mixing async and sync code.
 *
 * SCENARIOS:
 * - Synchronous code execution.
 * - Microtasks (Promise.then).
 * - Macrotasks (setTimeout).
 *
 * DONE WHEN:
 * - You correctly predict all outputs.
 * - You can explain Event Loop phases (Call Stack, Microtask, Macrotask).
 * - You understand priority: Sync > Microtasks > Macrotasks.
 *
 * LINK:
 * [Insert Link Here]
 */

console.log('Start')

setTimeout(() => {
	console.log('Timeout 1')
}, 0)

Promise.resolve().then(() => {
	console.log('Promise 1')
})

setTimeout(() => {
	console.log('Timeout 2')
}, 0)

Promise.resolve().then(() => {
	console.log('Promise 2')
})

console.log('End')

/**
 * OUTPUT:
 * Start
 * End
 * Promise 1
 * Promise 2
 * Timeout 1
 * Timeout 2
 *
 * EXPLANATION:
 * 1. Synchronous code runs first: "Start", "End"
 * 2. Microtask Queue (Promises) runs next: "Promise 1", "Promise 2"
 * 3. Macrotask Queue (setTimeout) runs last: "Timeout 1", "Timeout 2"
 */
