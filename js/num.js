
const today = new Date();
const day = today.getDate();
const month = today.getMonth(); // เดือนนับจาก 0
const year = today.getFullYear();

// ตรวจสอบและกำหนดค่าเริ่มต้นและเป้าหมายตามวันที่
let startValue, targetValue;

if (day === 20 && month === 10 && year === 2024) { // 20 พ.ย. 2024
  startValue = 21;
  targetValue = 15;
} else if (day === 21 && month === 10 && year === 2024) { // 21 พ.ย. 2024
  startValue = 21;
  targetValue = 14;
} else if (day === 22 && month === 10 && year === 2024) { // 22 พ.ย. 2024
  startValue = 21;
  targetValue = 13;
} else if (day === 23 && month === 10 && year === 2024) { // 23 พ.ย. 2024
  startValue = 21;
  targetValue = 12;
} else if (day === 24 && month === 10 && year === 2024) { // 24 พ.ย. 2024
  startValue = 21;
  targetValue = 11;
} else if (day === 25 && month === 10 && year === 2024) { // 25 พ.ย. 2024
  startValue = 21;
  targetValue = 10;
} else if (day === 26 && month === 10 && year === 2024) { // 26 พ.ย. 2024
  startValue = 21;
  targetValue = 9;
} else if (day === 27 && month === 10 && year === 2024) { // 27 พ.ย. 2024
  startValue = 21;
  targetValue = 8;
} else {
  // ค่าพื้นฐานหากไม่ตรงกับวันที่ที่กำหนด
  startValue = 21;
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
