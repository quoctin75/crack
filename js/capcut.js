let obj = JSON.parse($response.body);

// Mở khóa CapCut Pro
obj.data.vip = true; // Đánh dấu tài khoản là VIP
obj.data.vip_expire_time = 4102444800; // Thời hạn VIP (năm 2100)

$done({body: JSON.stringify(obj)});
