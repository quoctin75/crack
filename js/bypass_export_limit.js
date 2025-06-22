let obj = JSON.parse($response.body);

// Đặt trạng thái hoàn thành ngay lập tức
if (obj.status === "processing") {
  obj.status = "completed";
  obj.progress = 100;
  obj.download_url = obj.preview_url;
}

// Bỏ qua thời gian chờ
obj.estimated_time = 0;

$done({body: JSON.stringify(obj)});
