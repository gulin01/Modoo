const carousel = document.querySelector('.carousel');
const items = document.querySelectorAll('.carousel-item');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
let index = 0;




function showItem() {
    carousel.style.transform = `translateX(-${index * 100}%)`;
}

nextBtn.addEventListener('click', () => {
    index = (index + 1) % items.length; // Loop back to the start
    showItem();
});

prevBtn.addEventListener('click', () => {
    index = (index - 1 + items.length) % items.length; // Loop to the end if negative
    showItem();
});



const reasonsBox = document.querySelector('.reasons-container');




const reasonsData = [
  { image: 'public/images/section3/image1.svg', icon:"public/images/section3/icon1.svg",title: '친환경 세제' },
  { image: 'public/images/section3/image2.svg', icon:"public/images/section3/icon2.svg",title: '구역별 걸레 분리사용' },
  { image: 'public/images/section3/image3.svg', icon:"public/images/section3/icon3.svg",title: '무료 살균 소독 스팀 서비스' },
  { image: 'public/images/section3/image4.svg', icon:"public/images/section3/icon4.svg",title: '무료 피톤치드 서비스' },
  { image: 'public/images/section3/image5.svg', icon:"public/images/section3/icon5.svg",title: 'A/S 100% 해결' },
  { image: 'public/images/section3/image6.svg', icon:"public/images/section3/icon6.svg",title: '가격 정찰제' },
  // Add more objects as needed
];

// Select the reasons-grid container
document.addEventListener('DOMContentLoaded', () => {
    reasonsData.forEach((reason,index) => {
      const itemDiv = document.createElement('div');
      itemDiv.classList.add('reason-card');
      const img = document.createElement('img');
      img.src = reason.image;
      img.alt = reason.title;
      const contentDiv = document.createElement('div');
      contentDiv.classList.add('content');
      const icon = document.createElement('img');
      icon.src = reason.icon;
      icon.alt = `${index}`;
      icon.classList.add('icon');
      const title = document.createElement('h3');

      title.textContent = reason.title;
      contentDiv.appendChild(icon)
      contentDiv.appendChild(title)
      itemDiv.appendChild(img);
      itemDiv.appendChild(contentDiv);
      reasonsBox.appendChild(itemDiv);
    });
  });