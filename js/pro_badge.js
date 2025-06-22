let obj = JSON.parse($response.body);

// Thêm huy hiệu Pro
obj.data.badge = {
  "type": "pro",
  "icon_url": "https://example.com/pro-badge.png",
  "text": "PRO",
  "color": "#FF2D55"
};

// Đánh dấu là tài khoản Pro
obj.data.is_pro = true;
obj.data.pro_expire_time = 4102444800; // Thời hạn Pro (năm 2100)

$done({body: JSON.stringify(obj)});
