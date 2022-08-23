const { createPurchaseOrder, getAllPurchaseOrder } = require('../../services/purchase');
const { Purchase } = require("../../models/purchase");

const instance = process.env.NODE_APP_INSTANCE || '0';

const createPurchase = async (req, res) => {

	if (!req.body) {
		res.status(400).send({
			message: "Content can not be empty"
		});
	}

	const purchaseOrder = new Purchase({
		total: req.body.total,
		address: req.body.address,
		productId: req.body.productId,
		price: req.body.price,
		itemsCount: req.body.itemsCount,
		userId: req.body.userId,
	});

	createPurchaseOrder(purchaseOrder, (error, data) => {
		if (error)
			res.status(500).send({
				message:
					err.message || "Error creating order"
			});

		res.setHeader('Instance', instance);
		res.status(201).send(data);
	})

}

const getPurchaseOrders = (req, res) => {

	getAllPurchaseOrder((error, data) => {
		if (error)
			res.status(500).send({
				message:
					err.message || "Error searching orders"
			});

		res.setHeader('Instance', instance);
		res.status(200).send(data);
	})
}

module.exports = {
	createPurchase,
	getPurchaseOrders,
	instance
}