 // ค่าเริ่มต้นคือ 15 ในวันที่ 20 พฤศจิกายน 2024
 const initialValue = 15;
 const startDate = new Date(2024, 10, 20); // วันที่เริ่มนับ (20 พฤศจิกายน 2024, เดือนนับจาก 0)

 function calculateValue() {
   const today = new Date();
   const daysPassed = Math.floor((today - startDate) / (1000 * 60 * 60 * 24)); // คำนวณวันที่ผ่านไป
   return initialValue - daysPassed; // คำนวณค่าที่ลดลง
 }

 function updateCountdown() {
   const countdownElement = document.getElementById('countdown');
   countdownElement.textContent = calculateValue();
 }

 // อัปเดตค่าเริ่มต้นเมื่อโหลดหน้า
 updateCountdown();