let obj = JSON.parse($response.body);

// Mở khóa template Pro
if (obj.data && obj.data.templates) {
  obj.data.templates.forEach(template => {
    template.premium = false; // Đánh dấu template không phải premium
  });
}

$done({body: JSON.stringify(obj)});
