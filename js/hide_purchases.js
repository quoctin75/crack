let obj = JSON.parse($response.body);

// Xóa tất cả mục mua hàng
if (obj.data && obj.data.items) {
  obj.data.items = [];
  obj.data.promotions = [];
}

// Vô hiệu hóa cổng thanh toán
obj.data.payment_enabled = false;
obj.data.show_payment = false;

$done({body: JSON.stringify(obj)});
