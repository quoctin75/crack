let obj = JSON.parse($response.body);

// Đánh dấu tất cả giao dịch thành công
obj.data.purchases.forEach(purchase => {
  purchase.status = "completed";
  purchase.expires_date = "2100-01-01";
});

// Vô hiệu hóa hoàn tiền
obj.data.refundable = false;

$done({body: JSON.stringify(obj)});
