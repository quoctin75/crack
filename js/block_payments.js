// Chặn tất cả yêu cầu đến cổng thanh toán
$done({status: 403, body: JSON.stringify({error: "payment_disabled"})});
