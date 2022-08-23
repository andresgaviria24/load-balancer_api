class Purchase {

  constructor(purchase) {
    this.purchaseOrder = {
      total: purchase.total,
      address: purchase.address,
      user_id: purchase.userId,
      status_order: 'Created',
      date_order: new Date()
    }

    this.orderDetail = {
      product_id: purchase.productId,
      price: purchase.price,
      items_count: purchase.itemsCount
    }

  }

}

module.exports = {
  Purchase,
};
