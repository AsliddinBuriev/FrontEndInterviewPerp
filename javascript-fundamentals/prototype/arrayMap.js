/**
 * Custom Array.prototype.myMap()
 *
 * Task:
 * - Create Array.prototype.myMap() that behaves like the native map() method.
 *
 * Requirements:
 * - myMap(callback) returns a NEW array.
 * - The original array must NOT be modified.
 * - The callback is called with (element, index, array) for each item.
 * - Works for arrays of any length and values.
 * - map<U>(callbackfn: (value: T, index: number, array: T[]) => U, thisArg?: any): U[];
 */

Array.prototype.map = function (cb, thisArg) {
	if (!cb || !(cb instanceof Function)) return
	const context = thisArg !== undefined ? thisArg : this
	const res = []
	for (let i = 0; i < this.length; i++) {
		if (!Object.hasOwn(this, i)) continue
		res[i] = cb.call(context, this[i], i, this)
	}
	return res
}

console.log(
	[1, 2].map((el, i, arr) => {
		let prev = 0
		if (i > 0) prev = arr[i - 1]
		return el + prev
	})
)
