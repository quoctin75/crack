let obj = JSON.parse($response.body);

// Tắt tự động gia hạn nhưng vẫn giữ trạng thái Pro
obj.auto_renew = false;
obj.is_active = true;
obj.expires_date = "2100-01-01";

$done({body: JSON.stringify(obj)});
