## JavaScript Event Loop

The Event Loop is a mechanism that handles asynchronous operations in JavaScript. It coordinates the execution of code between the Call Stack, Web APIs, and Callback Queues.

### Key Components

1. **Call Stack**: Executes synchronous code (LIFO - Last In First Out).
2. **Web APIs**: Browser features (setTimeout, fetch, DOM events, etc.).
3. **Macrotask Queue**: (also called Task Queue or Callback Queue) Holds callbacks from Web APIs (FIFO).
   - Examples: `setTimeout`, `setInterval`, `setImmediate`, I/O operations.
4. **Microtask Queue**: Holds promises and mutation observers (Higher priority than Macrotask Queue).
   - Examples: `Promise.then()`, `Promise.catch()`, `queueMicrotask()`, `MutationObserver`.
5. **Event Loop**: Continuously checks if Call Stack is empty, then moves tasks from queues to stack.

### Priority Order

**Call Stack (Sync Code)** → **Microtask Queue** → **Macrotask Queue**
