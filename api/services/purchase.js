
const sql = require("../infraestructure/db");

const createPurchaseOrder = (purchase, result) => {
	sql.query("INSERT INTO purcharseorder SET ?", purchase.purchaseOrder, (err, res) => {
		if (err) {
			result(err, null);
			console.log('Error createPurchaseOrder');
			return;
		}
		result(null, { idPurchaseOrder: res.insertId });
		console.log('Orden exitosa con id:' + res.insertId);
		/*purchase.orderDetail.order_id = res.insertId;
		sql.query("INSERT INTO orderdetail SET ?", purchase.orderDetail, (err, res) => {
			//sql.end();
			if (err) {
				result(err, null);
				return;
			}

			console.log('Orden exitosa con id:' + res.insertId);
			result(null, { idPurchaseOrder: res.insertId });
		});*/
	});
}


const getAllPurchaseOrder = result => {
	sql.query('SELECT * from purcharseorder', (err, res) => {
		if (err) {
			result(null, err);
		}
		result(null, res);
	});
}

module.exports = {
	createPurchaseOrder,
	getAllPurchaseOrder
}