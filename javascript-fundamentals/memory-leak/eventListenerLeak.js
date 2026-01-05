/**
 * Challenge 1: Event Listener Leak
 *
 * Problem:
 * The function adds an event listener but never removes it.
 * Add a cleanup function to remove the listener and free memory.
 *
 * Expected Output:
 * - the notification object can be garbage collected
 */

function createNotificationHandler() {
	const listenerName = 'notify'
	let data = new Array(10000).fill('notification data')

	const handleNotification = () => {
		console.log('Notification received, data size:', data.length)
	}

	if (typeof window !== 'undefined') {
		window.addEventListener(listenerName, handleNotification)
	}

	return {
		notify: handleNotification,
		clear() {
			window.removeEventListener(listenerName)
			data = null
		},
	}
}

const notifier = createNotificationHandler()
notifier.clear()
