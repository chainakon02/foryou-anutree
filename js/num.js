 // คำนวณค่าเริ่มต้นและค่าเป้าหมายตามวันที่
 const today = new Date();
 const day = today.getDate();
 const month = today.getMonth(); // เดือนนับจาก 0
 const year = today.getFullYear();

 // ตรวจสอบว่าวันที่วันนี้อยู่ในช่วงวันที่กำหนด
 const isTargetDate = (day === 20 && month === 10 && year === 2024); // 20 พฤศจิกายน 2024
 const isNextTargetDate = (day === 21 && month === 10 && year === 2024); // 21 พฤศจิกายน 2024

 // กำหนดค่าเริ่มต้นและเป้าหมายตามเงื่อนไขวันที่
 let startValue, targetValue;
 if (isTargetDate) {
   startValue = 21;
   targetValue = 15;
 } else if (isNextTargetDate) {
   startValue = 21;
   targetValue = 14;
 } else {
   startValue = 21; // ค่าพื้นฐานหากไม่ตรงกับวันที่กำหนด
   targetValue = 21;
 }

 const duration = 2000; // ระยะเวลาทั้งหมดในมิลลิวินาที (2 วินาที)
 const steps = startValue - targetValue; // จำนวนขั้นตอนการนับ
 const intervalTime = duration / steps; // เวลาต่อการลดทีละ 1

 let currentValue = startValue; // กำหนดค่าเริ่มต้น

 // ฟังก์ชันอัปเดตตัวเลข
 function updateCountdown() {
   const countdownElement = document.getElementById('countdown');
   countdownElement.textContent = currentValue;

   if (currentValue > targetValue) {
     currentValue--; // ลดค่าทีละ 1
   } else {
     clearInterval(countdownInterval); // หยุดเมื่อถึงเป้าหมาย
   }
 }

 // สร้างแอนิเมชันการนับถอยหลัง
 const countdownInterval = setInterval(updateCountdown, intervalTime);

 // เรียกใช้ฟังก์ชันครั้งแรกเพื่อแสดงค่าเริ่มต้นทันที
 updateCountdown();

