const outer = function () {
	let counter = 0
	return function () {
		counter++
		return counter
	}
}

const inner = outer()
console.log(inner())
console.log(inner())

/*
Closure: When a function retains access to its lexical scope, even when the function is executed outside that scope. It happens using [[Scope]] internal property.
*/
