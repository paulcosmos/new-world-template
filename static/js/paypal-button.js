	paypal.Buttons({

		style: {
			color:  'gold',
			shape:  'pill',
			label:  'paypal',
			layout: 'horizontal',
			tagline: false,
			height: 55
		},

	createOrder: function(data, actions) {
		var selectedQty = quantity.options[quantity.selectedIndex].value;
		var totalPrice = quantity.options[quantity.selectedIndex].getAttribute("price");
		var itemDesc = quantity.options[quantity.selectedIndex].getAttribute("desc");

		// This function sets up the details of the transaction, including the amount and line item details.
		return actions.order.create({
			purchase_units: [{
				amount: {
				value: totalPrice
				},
				description: itemDesc
			}]
		});
	},

	onApprove: function(data, actions) {
		// This function captures the funds from the transaction.
		return actions.order.capture().then(function(details) {
			// This function shows a transaction success message to your buyer.
			// alert('Transaction successful');
			window.location.href = '../thankyou.html'; // Send user to completion page
			});
		}
		
	}).render('#paypal-button-container');
