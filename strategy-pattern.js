const ProcessPayment = function () {
    this.paymentStrategy = null;
}

ProcessPayment.prototype = {
    setPaymentStrategy: function (paymentStrategy) {
        this.paymentStrategy = paymentStrategy;
    },
    processPayment: function (amount) {
        this.paymentStrategy.pay(amount);
    }
}

const CreditCardPayment = function () {
    this.pay = function (amount) {
        console.log(`Paid ${amount} using Credit Card`);
    }
}

const PayPalPayment = function () {
    this.pay = function (amount) {
        console.log(`Paid ${amount} using PayPal`);
    }
}

function main() {  
    const processPayment = new ProcessPayment();
    const processPaymentViaPaypal = new ProcessPayment();
    const creditCardPayment = new CreditCardPayment();
    const payPalPayment = new PayPalPayment();

    processPayment.setPaymentStrategy(creditCardPayment);
    processPayment.processPayment(100);

    processPaymentViaPaypal.setPaymentStrategy(payPalPayment);
    processPaymentViaPaypal.processPayment(200);
}

main();
