// Bỏ watermark khi xuất video
let obj = JSON.parse($response.body);

// Đánh dấu không có watermark
obj.data.watermark = false;

$done({body: JSON.stringify(obj)});
