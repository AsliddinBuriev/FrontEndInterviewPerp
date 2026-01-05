/**
 * Counter Factory
 *
 * Build a counter factory function that creates multiple independent counters.
 *
 * Requirements:
 * - Each counter exposes: increment(), decrement(), and getValue().
 * - Each counter maintains its own internal state (use closures).
 * - State must be private and not directly accessible from outside.
 *
 * Goal:
 * - Multiple counters should work independently without sharing state.
 */

function counter(val = 0) {
	let count = val
	return {
		printValue() {
			console.log(count)
		},
		increament() {
			count++
		},
		decrement() {
			count--
		},
	}
}

const counter1 = counter(0)
const counter2 = counter(1)
const counter3 = counter(2)

counter1.increament()
counter1.increament()
counter1.decrement()
counter1.printValue() //  1

counter2.increament()
counter2.increament()
counter2.decrement()
counter2.printValue() // 2

counter3.increament()
counter3.increament()
counter3.decrement()
counter3.printValue() // 3
