document.getElementById("submit-password").addEventListener("click", function () {
    const passwordInput = document.getElementById("password-input").value;
    const correctPassword = "05012002"; // รหัสผ่านที่ถูกต้อง
  
    if (passwordInput === correctPassword) {
      // ซ่อนฟอร์มรหัสผ่าน
      document.querySelector(".password-container").style.display = "none";
      // แสดงเนื้อหาหลัก
      document.querySelector(".container").style.display = "block";
      // แสดงเนื้อหาของ additional-content
      document.getElementById("additional-content").style.display = "block";
    } else {
      // ถ้ารหัสผ่านผิด แสดงข้อความผิด
      const errorMessage = document.getElementById("error-message");
      errorMessage.style.display = "block";
      setTimeout(() => {
        errorMessage.style.display = "none";
      }, 3000); // ซ่อนข้อความหลัง 3 วินาที
    }
  });
  