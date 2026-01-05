/**
 * Bank Account
 *
 * Implement a bank account system using closures with a private balance variable.
 *
 * Requirements:
 * - Expose the methods: deposit(amount), withdraw(amount), and getBalance().
 * - The balance must be private (not directly readable or writable from outside).
 * - deposit and withdraw must correctly update the internal balance.
 * - withdraw must prevent the balance from going negative.
 *
 * Done when:
 * - Multiple accounts can exist independently.
 * - Only the exposed methods can change or read the balance.
 */

function bankAccount() {
	let balance = 0
	return {
		deposit(amount) {
			if (amount <= 0) return
			balance += amount
		},
		withdraw(amount) {
			if (amount > balance) return
			balance -= amount
		},
		showBalance() {
			console.log(balance)
		},
	}
}

const account1 = bankAccount()
const account2 = bankAccount()

account1.deposit(100)
account1.withdraw(150)
account1.withdraw(50)
account1.showBalance()

account2.withdraw(50)
account2.deposit(1000)
account2.withdraw(999)
account2.showBalance()

/**
 * Output:
 * 50
 * 1
 */
