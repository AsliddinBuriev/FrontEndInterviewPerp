## JavaScript Promises

A Promise is an object representing the eventual completion or failure of an asynchronous operation.

### States

1. **Pending**: Initial state, neither fulfilled nor rejected.
2. **Fulfilled**: Operation completed successfully (resolved).
3. **Rejected**: Operation failed.

### Methods

- **Promise.all([promises])**: Waits for all promises, fails if any fails.
- **Promise.race([promises])**: Returns first settled promise.
- **Promise.allSettled([promises])**: Waits for all, returns all results regardless of success/failure.
- **Promise.any([promises])**: Returns first fulfilled promise.

### Key Points

- **Immutability**: Promises are immutable once settled.
- **Chaining**: `.then()` returns a new promise.
- **Error Handling**: Errors propagate down the chain until caught.
- **Syntactic Sugar**: Async/await is syntactic sugar over promises.
