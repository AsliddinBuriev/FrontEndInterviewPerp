/**
 * Convert Callbacks to Promises (Fetch Wrapper)
 *
 * TASK:
 * - Create a Promise-based wrapper for a callback API.
 * - Handle success and error cases within the wrapper.
 *
 * SCENARIOS:
 * - Converting "callback hell" into clean promise chains.
 * - Implementing centralized error handling.
 *
 * DONE WHEN:
 * - Callback-based code is fully converted to a Promise chain.
 * - Errors are properly caught using .catch().
 * - The wrapper is compatible with async/await syntax.
 *
 */

function getUserData(id, callback) {
	setTimeout(() => {
		if (id === 1) {
			callback(null, { id: 1, name: 'Gemini' })
		} else {
			callback('User not found!', null)
		}
	}, 1000)
}

function fetchUser(id) {
	return new Promise((resolve, reject) => {
		getUserData(id, (err, data) => {
			if (err) reject(err)
			else resolve(data)
		})
	})
}

fetchUser(1).then(console.log).catch(console.error) // success
fetchUser(2).then(console.log).catch(console.error) // fail
