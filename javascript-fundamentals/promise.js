/**
 * A Promise is an object representing the eventual completion or failure of an asynchronous operation.
 *
 * STATES:
 * 1. Pending: Initial state, neither fulfilled nor rejected
 * 2. Fulfilled: Operation completed successfully (resolved)
 * 3. Rejected: Operation failed
 *
 * - Promise.all([promises]): Waits for all promises, fails if any fails
 * - Promise.race([promises]): Returns first settled promise
 * - Promise.allSettled([promises]): Waits for all, returns all results regardless of success/failure
 * - Promise.any([promises]): Returns first fulfilled promise
 *
 * KEY POINTS:
 * - Promises are immutable once settled
 * - .then() returns a new promise (chaining)
 * - Errors propagate down the chain until caught
 * - Async/await is syntactic sugar over promises
 */

const promise = new Promise((resolve, reject) => {
	const success = true

	if (success) {
		resolve('Operation successful!')
	} else {
		reject('Operation failed!')
	}
})

promise
	.then((result) => {
		console.log(result)
		return 'Next step'
	})
	.then((result) => {
		console.log(result) // 'Next step'
	})
	.catch((error) => {
		console.error(error) // Only runs if rejected
	})
	.finally(() => {
		console.log('Cleanup') // Always runs
	})

const promise1 = Promise.resolve(3)
const promise2 = new Promise((resolve) =>
	setTimeout(() => resolve('done'), 100)
)
const promise3 = fetch('https://api.example.com')

Promise.all([promise1, promise2, promise3])
	.then(([result1, result2, result3]) => {})
	.catch((error) => {
		console.log('One failed:', error)
	})

Promise.race([
	new Promise((resolve) => setTimeout(() => resolve('slow'), 500)),
	new Promise((resolve) => setTimeout(() => resolve('fast'), 100)),
]).then((result) => {
	console.log(result)
})
