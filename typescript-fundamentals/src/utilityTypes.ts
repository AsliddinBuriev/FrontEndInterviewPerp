interface User {
	id: number
	name: string
	email: string
	age: number
}

/**
 *  1. Partial<T> - Makes all properties optional
 */
type PartialUser = Partial<User>

function updateUser(user: User, updates: Partial<User>): User {
	return { ...user, ...updates }
}

/**
 *  2. type RequiredUser = Required<PartialUser>;
 */
type RequiredUser = Required<PartialUser>

/**
 *  3. Readonly<T> - Makes all properties readonly
 */
type ReadonlyUser = Readonly<User>

const user: ReadonlyUser = { id: 1, name: 'Alice', email: 'a@ex.com', age: 25 }
// user.id = 2; // Error: Cannot assign to 'id' because it is a read-only property

/**
 * 4. Record<K, T> - Creates a type with a set of properties K of type T
 */

type UserRoles = Record<string, string[]>
const roles: UserRoles = {
	admin: ['read', 'write', 'delete'],
	user: ['read'],
}
