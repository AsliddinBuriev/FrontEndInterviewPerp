/**
 * Debugging `this` in Event Handlers
 *
 * Task:
 * - Debug and fix `this` binding issues in event handlers.
 *
 * Common scenarios:
 * - An object method passed directly as a callback.
 * - A class method used as a DOM or React event handler.
 *
 * Done when:
 * - You understand how `this` changes in different call contexts.
 * - You can fix issues using Function.prototype.bind or arrow functions.
 * - All event handlers use the correct `this` (e.g., the instance or component).
 *
 * CodePen Link: https://codepen.io/Asliddin-Buriev-the-lessful/pen/gbMPzXq?editors=0011
 */

class UserProfile {
	constructor(name) {
		this.name = name
	}

	handleButtonClick() {
		console.log('Button clicked by: ' + this.name)
	}

	render() {
		const btn = document.createElement('button')
		btn.textContent = 'Click to identify'
		const handler = this.handleButtonClick.bind(this)

		btn.addEventListener('click', handler)

		document.body.appendChild(btn)
	}
}

const myUser = new UserProfile('Alice')

myUser.render()
