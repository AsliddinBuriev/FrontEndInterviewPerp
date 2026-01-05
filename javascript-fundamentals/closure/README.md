# Closures in JavaScript

A **closure** is a function that has access to variables from its outer (enclosing) scope, even after the outer function has finished executing. [web:1]

## Key Concepts

- **Scope**: A hidden internal mechanism that stores the lexical environment (often imagined as a “backpack” of variables).
- **Lexical scope**: Functions remember _where they were created_, not where they are called from.
- The internal scope stores references to outer variables, which keeps those variables alive as long as the closure exists.
