let obj = JSON.parse($response.body);

// Mở khóa Standard
obj.data.has_standard = true;
obj.data.standard_expire_time = 4102444800; // Thời hạn Standard (năm 2100)

$done({body: JSON.stringify(obj)});
