const ProcessPayment = function () {
	this.pay = function (amount, paymentMethod) {
		if (paymentMethod === "creditCard") {
			console.log(`Paid ${amount} using Credit Card`);
		} else if (paymentMethod === "paypal") {
			console.log(`Paid ${amount} using PayPal`);
		} else {
			console.log(`Invalid payment method`);
		}
	};
};

function main() {
	const processPayment = new ProcessPayment();
	processPayment.pay(100, "creditCard");
	processPayment.pay(200, "paypal");
}

main();
