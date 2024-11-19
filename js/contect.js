document.addEventListener("DOMContentLoaded", () => {
    // เลือกตำแหน่งที่ต้องการโหลดเนื้อหา
    const additionalContent = document.getElementById("additional-content");
  
    // ฟังก์ชันโหลดเนื้อหา
    function loadContent() {
      fetch('love.html') // ชื่อไฟล์ HTML ย่อย
        .then(response => {
          if (!response.ok) {
            throw new Error("เกิดข้อผิดพลาดในการโหลดเนื้อหา");
          }
          return response.text();
        })
        .then(data => {
          additionalContent.innerHTML = data; // ใส่เนื้อหาที่โหลดมาลงใน div
        })
        .catch(error => {
          console.error("Error loading content:", error);
          additionalContent.innerHTML = "<p>ไม่สามารถโหลดเนื้อหาได้</p>";
        });
    }
  
    // เรียกใช้ฟังก์ชันโหลดเนื้อหา
    loadContent();
  });
  