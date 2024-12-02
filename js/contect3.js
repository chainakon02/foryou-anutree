document.addEventListener('DOMContentLoaded', function () {
  const container = document.querySelector('.containerlove');
  const card = document.querySelector('.card');
  const textElement = document.querySelector('.text');

  const startDate = new Date('2024-03-08'); 
  const currentDate = new Date();


  const diffTime = Math.abs(currentDate - startDate);
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  textElement.innerHTML = `รู้ไหมเรารู้จักกัน<br><br>${diffDays} วันแล้ว`;


  
});
