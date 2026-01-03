/**
 * A closure is a function that has access to variables from its outer (enclosing) scope,
 * even after the outer function has finished executing.
 *
 * KEY CONCEPTS:
 * - [[Scope]]: Hidden property that stores the lexical environment (the backpack)
 * - Lexical Scope: Functions remember where they were created, not where they're called
 * - The [[Scope]] contains references to outer variables, keeping them alive
 */

function outer() {
	let count = 0

	function inner() {
		count++
		console.log(count)
	}

	return inner
}

const counter = outer()

counter() // 1
counter() // 2
counter() // 3
