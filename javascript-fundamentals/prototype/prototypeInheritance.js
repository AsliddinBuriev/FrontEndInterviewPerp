// admin → Admin.prototype → User.prototype → Object.prototype → null

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
