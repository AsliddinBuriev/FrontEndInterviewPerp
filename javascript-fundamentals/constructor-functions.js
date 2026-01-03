/**
 *
 * Constructor Functions: Functions used with 'new' keyword to create objects
 * Prototype: Mechanism where objects inherit properties and methods from other objects
 *
 * THE 'new' KEYWORD DOES 4 THINGS:
 * 1. Creates empty object: {}
 * 2. Sets 'this' to that object
 * 3. Links object's __proto__ to Constructor.prototype
 * 4. Returns the object
 *
 * PROTOTYPE CHAIN:
 * admin → Admin.prototype → User.prototype → Object.prototype → null
 */

function User(email) {
	this.email = email
}

User.prototype.getEmail = function () {
	return this.email
}

function Admin(email, role) {
	User.call(this, email)
	this.role = role
}

Admin.prototype = Object.create(User.prototype)
Admin.prototype.constructor = Admin

Admin.prototype.deleteUser = function (userEmail) {
	return `${this.email} deleted ${userEmail}`
}

const admin = new Admin('admin@email.com', 'superadmin')

admin.getEmail() // admin@email.com
admin.deleteUser('user@email.com') // admin@email.com deleted user@email.com
