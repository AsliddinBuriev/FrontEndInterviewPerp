/**
 * TYPES:
 * 1. ES6 Modules (ESM): Modern standard using import/export
 * 2. CommonJS: Node.js style using require/module.exports
 *
 * KEY POINTS:
 * - Each module has its own scope
 * - Exports are live bindings (changes reflect in importers)
 * - Imports are hoisted
 * - Modules are singletons (imported once, cached)
 * - Use type="module" in HTML: <script type="module" src="app.js"></script>
 */

// Named exports
export const PI = 3.14159
export function add(a, b) {
	return a + b
}
export function subtract(a, b) {
	return a - b
}

// Import all as namespace
import * as MathUtils from './math.js'
console.log(MathUtils.PI)
console.log(MathUtils.add(5, 3))

// Import for side effects only (runs code, no imports)
import './analytics.js'

// Dynamic import (returns Promise)
const module = await import('./math.js')
// Or with .then()
import('./math.js').then((module) => {
	console.log(module.add(2, 3))
})
