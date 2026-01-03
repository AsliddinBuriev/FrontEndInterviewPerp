/**
 * The Event Loop is a mechanism that handles asynchronous operations in JavaScript.
 * It coordinates the execution of code between the Call Stack, Web APIs, and Callback Queues.
 *
 * KEY COMPONENTS:
 * 1. Call Stack: Executes synchronous code (LIFO - Last In First Out)
 * 2. Web APIs: Browser features (setTimeout, fetch, DOM events, etc.)
 * 3. Macrotask Queue (also called Task Queue or Callback Queue): Holds callbacks from Web APIs (FIFO)
 *    - Examples: setTimeout, setInterval, setImmediate, I/O operations
 * 4. Microtask Queue: Holds promises and mutation observers (Higher priority than Macrotask Queue)
 *    - Examples: Promise.then(), Promise.catch(), queueMicrotask(), MutationObserver
 * 5. Event Loop: Continuously checks if Call Stack is empty, then moves tasks from queues to stack
 *
 * PRIORITY ORDER:
 * Call Stack (Sync Code) → Microtask Queue → Macrotask Queue
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
