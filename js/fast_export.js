let obj = JSON.parse($request.body);

// Bỏ qua các bước kiểm tra chất lượng
obj.quality_check = false;

// Tắt các tùy chọn làm chậm quá trình
obj.process_options = {
  "fast_render": true,
  "skip_verification": true
};

$done({body: JSON.stringify(obj)});
