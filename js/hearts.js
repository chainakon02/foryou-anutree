const heartsContainer = document.querySelector('.hearts-container');

function createHeart() {
  // ลบหัวใจก่อนหน้านี้ถ้ามี
  heartsContainer.innerHTML = '';

  // สร้างหัวใจใหม่
  const heart = document.createElement('div');
  heart.className = 'heart';
  heart.style.left = `${Math.random() * 100}%`;
  heart.style.animationDuration = `3s`; // ระยะเวลาคงที่
  heartsContainer.appendChild(heart);

  // ลบหัวใจเมื่อ Animation จบ
  setTimeout(() => {
    heart.remove();
  }, 3000); // ตรงกับระยะเวลาของ Animation
}

// เรียกฟังก์ชัน createHeart ทุก 3 วินาที
setInterval(createHeart, 3000);
