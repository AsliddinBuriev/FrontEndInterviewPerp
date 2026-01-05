## JavaScript Prototypes & Constructors

### Key Terms

- **Constructor Functions**: Functions used with the `new` keyword to create objects.
- **Prototype**: Mechanism where objects inherit properties and methods from other objects.

### The 'new' Keyword Mechanism

When the `new` keyword is used, it performs four specific actions:

1. **Creates empty object**: `{}`
2. **Sets 'this'**: Points the `this` keyword to that new object.
3. **Links Prototype**: Links the object's `__proto__` to `Constructor.prototype`.
4. **Returns the object**: Automatically returns the newly created object.
