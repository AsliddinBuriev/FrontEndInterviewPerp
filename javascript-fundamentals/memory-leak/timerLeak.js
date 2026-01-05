/**
 * Challenge 2: Timer Leak
 *
 * Problem:
 * A countdown timer starts but can't be stopped because timer IDs are trapped.
 * Even when you navigate away, the timer keeps running.
 */

function startCountdown(seconds) {
	let remaining = seconds

	const timeout = setTimeout(() => {
		console.log('Timeout: Sending notification')
	}, seconds * 1000)

	const interval = setInterval(() => {
		remaining--
		console.log('Time remaining:', remaining)
	}, 1000)

	return {
		clear() {
			clearTimeout(timeout)
			clearInterval(interval)
		},
	}
}

const timer = startCountdown(10)
