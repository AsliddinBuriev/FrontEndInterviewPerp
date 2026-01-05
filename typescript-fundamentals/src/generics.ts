class Stack<T> {
	private items: T[] = []

	push(item: T): void {
		this.items.push(item)
	}

	pop(): T | undefined {
		return this.items.pop()
	}
}

const numberStack = new Stack<number>()
/**
 * numberStack.push('2')
 * Argument of type 'string' is not assignable to parameter of type 'number'.
 */

numberStack.push(2)

console.log(numberStack.pop()) // 2
