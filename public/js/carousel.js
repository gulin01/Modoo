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

function createSection3 () {
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
}

const section4Data = [
    { 
        image: 'public/images/section4/image1.svg', 
        title: '현관 및 거실',
        hashtags: ["#먼지 및 오염물질 제거"],
        services:["벽","바닥","신발장","현관타일","콘센트","창틀/문틀","조명기구"]
     },
    {
         image: 'public/images/section4/image2.svg', 
         title: '화장실',
         hashtags: ["#오염제거 및 스팀청소"],
         services:["벽","바닥","신발장","현관타일","콘센트","창틀/문틀","조명기구"]

    },
    { 
        image: 'public/images/section4/image3.svg', 
        title: '주방/싱크대',
        hashtags: ["#이물질 및 오염 제거"],
        services:["벽","바닥","신발장","현관타일","콘센트","창틀/문틀","조명기구"]

     },
    { 
        image: 'public/images/section4/image4.svg',
         title: '방(ROOM)' ,
         hashtags: ["#먼지 및 오염물질 제거"],
         services:["벽","바닥","신발장","현관타일","콘센트","창틀/문틀","조명기구"]

        },
    { 
        image: 'public/images/section4/image5.svg', 
        title: '베란다/다용도실',
        hashtags: ["#먼지 및 이물질 제거"] ,
        services:["벽","바닥","신발장","현관타일","콘센트","창틀/문틀","조명기구"]

    },
    { 
        image: 'public/images/section4/image6.svg', 
        title: '피톤치드 서비스',
        hashtags: ["#새집증후군완화","#향균, 탈취효과"] ,
        services:["벽","바닥","신발장","현관타일","콘센트","창틀/문틀","조명기구"]

    },
    // Add more objects as needed
  ];
  

function createSection4 () {
    
    const section4Container = document.querySelector('.section4-container');
    
    section4Data.forEach(item => {
        const itemDiv = document.createElement('div');
        itemDiv.classList.add('section4-card');
        
        // Image element
        const img = document.createElement('img');
        img.src = item.image;
        img.alt = item.title;
        
        // Title element
        const title = document.createElement('h3');
        title.textContent = item.title;
    
        // Hashtags
        const hashtagsDiv = document.createElement('div');
        hashtagsDiv.classList.add('hashtags');
        item.hashtags.forEach(tag => {
            const span = document.createElement('span');
            span.textContent = tag;
            hashtagsDiv.appendChild(span);
        });
    
        // Services list
        const servicesDiv = document.createElement('div');
        servicesDiv.classList.add('services');
        item.services.forEach(service => {
            const serviceItem = document.createElement('span');
            serviceItem.textContent = service;
            servicesDiv.appendChild(serviceItem);
        });
    
        // Append elements to itemDiv
        itemDiv.appendChild(img);
        itemDiv.appendChild(title);
        itemDiv.appendChild(hashtagsDiv);
        itemDiv.appendChild(servicesDiv);
    
        // Append itemDiv to section4-container
        section4Container.appendChild(itemDiv);
    });
    
}
// Select the reasons-grid container
document.addEventListener('DOMContentLoaded', () => {
    createSection3()
    createSection4()
  });