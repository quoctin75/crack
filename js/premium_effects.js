let obj = JSON.parse($response.body);

// Mở khóa hiệu ứng premium
if (obj.data && obj.data.effects) {
  obj.data.effects.forEach(effect => {
    effect.premium = false; // Đánh dấu hiệu ứng không phải premium
  });
}

$done({body: JSON.stringify(obj)});
