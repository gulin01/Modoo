// const carousel = document.querySelector('.carousel');
// const items = document.querySelectorAll('.carousel-item');
// const prevBtn = document.getElementById('prevBtn');
// const nextBtn = document.getElementById('nextBtn');
// let index = 0;




// function showItem() {
//     carousel.style.transform = `translateX(-${index * 100}%)`;
// }

// nextBtn.addEventListener('click', () => {
//     index = (index + 1) % items.length; // Loop back to the start
//     showItem();
// });

// prevBtn.addEventListener('click', () => {
//     index = (index - 1 + items.length) % items.length; // Loop to the end if negative
//     showItem();
// });



//section 2

const section2Data = [
    {
        title:"청소서비스",
        image:"public/images/section2/image1.svg",
        description:"깨끗한 공간, 행복한 일상",
        features:["입주 청소","이사 청소","인테리어 청소","사업장 청소"]
    },
    {
        title:"전문시공",
        image:"public/images/section2/image2.svg",
        description:"공간의 가치를 높이는 전문 솔루션",
        features:["줄눈 시공","탄성 코트","곰팡이 제거"]
    },
    {
        title:"코팅시공",
        image:"public/images/section2/image3.svg",
        description:"내구성과 아름다움을 한번에",
        features:["마루 코팅","나노 코팅","대리석 연마","상판 코팅"]
    }

]


function createSection2() {

    const section2Container = document.querySelector('.section2-container');

    section2Data.forEach(item => {
        // Create item div
        const itemDiv = document.createElement('div');
        itemDiv.classList.add('section2-item');

        // Create image element
        const img = document.createElement('img');
        img.classList.add("mainImg")
        img.src = item.image;
        img.alt = item.title;
        img.style.width = "100%"; // Ensure the image fits within the item

        // Create title element
        const title = document.createElement('h3');
        title.textContent = item.title;

        // Create description element
        const description = document.createElement('p');
        description.classList.add("description")
        description.textContent = item.description || ''; // Only show if exists

        // Create features list element
        const featuresList = document.createElement('div');
        featuresList.classList.add('features-list');
        item.features.forEach(feature => {
            const featureDiv = document.createElement('div');
             featureDiv.classList.add("featureDiv")
            const icon = document.createElement("img")
            icon.src = "public/images/section2/check.svg"
            icon.classList.add("check")
            icon.alt = "check"
            const text = document.createElement('p');
            text.textContent = feature;
            featureDiv.appendChild(icon)
            featureDiv.appendChild(text)
            featuresList.appendChild(featureDiv);
        });

        // Append elements to itemDiv
        itemDiv.appendChild(img);
        itemDiv.appendChild(title);
        itemDiv.appendChild(description);
        itemDiv.appendChild(featuresList)
       
     // To track the active item


        // Append itemDiv to section2-container
        section2Container.appendChild(itemDiv);
    });

    var element = document.querySelectorAll('.section2-item');
    console.log(element,"ELEMENT")
    if (element) {
    
        element.forEach(function(el, key){
          
           el.addEventListener('click', function () {
              console.log(key);
           
              el.classList.toggle("active");
              
               element.forEach(function(ell, els){
                   if(key !== els) {
                       ell.classList.remove('active');
                   }
               });
           });
        });
      }
    

}





//section 3
const reasonsBox = document.querySelector('.reasons-container');
const reasonsData = [
  { image: 'public/images/section3/image1.png', icon:"public/images/section3/icon1.svg",title: '친환경 세제' },
  { image: 'public/images/section3/image2.png', icon:"public/images/section3/icon2.svg",title: '구역별 걸레 분리사용' },
  { image: 'public/images/section3/image3.png', icon:"public/images/section3/icon3.svg",title: '무료 살균 소독 스팀 서비스' },
  { image: 'public/images/section3/image4.png', icon:"public/images/section3/icon4.svg",title: '무료 피톤치드 서비스' },
  { image: 'public/images/section3/image5.png', icon:"public/images/section3/icon5.svg",title: 'A/S 100% 해결' },
  { image: 'public/images/section3/image6.png', icon:"public/images/section3/icon6.svg",title: '가격 정찰제' },
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
        image: 'public/images/section4/image1.png', 
        title: '현관 및 거실',
        hashtags: ["#먼지 및 오염물질 제거"],
        services:["벽","바닥","신발장","현관타일","콘센트","창틀/문틀","조명기구"]
     },
    {
         image: 'public/images/section4/image2.png', 
         title: '화장실',
         hashtags: ["#오염제거 및 스팀청소"],
         services:["벽","바닥","신발장","현관타일","콘센트","창틀/문틀","조명기구"]

    },
    { 
        image: 'public/images/section4/image3.png', 
        title: '주방/싱크대',
        hashtags: ["#이물질 및 오염 제거"],
        services:["벽","바닥","신발장","현관타일","콘센트","창틀/문틀","조명기구"]

     },
    { 
        image: 'public/images/section4/image4.png',
         title: '방(ROOM)' ,
         hashtags: ["#먼지 및 오염물질 제거"],
         services:["벽","바닥","신발장","현관타일","콘센트","창틀/문틀","조명기구"]

        },
    { 
        image: 'public/images/section4/image5.png', 
        title: '베란다/다용도실',
        hashtags: ["#먼지 및 이물질 제거"] ,
        services:["벽","바닥","신발장","현관타일","콘센트","창틀/문틀","조명기구"]

    },
    { 
        image: 'public/images/section4/image6.png', 
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

        const img = document.createElement('img');
        img.src = item.image;
        img.alt = item.title;

        const contentDiv = document.createElement('div');
        contentDiv.classList.add("content")
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
          serviceItem.classList.add("service")
          serviceItem.textContent = service;
          servicesDiv.appendChild(serviceItem);
      });
 
        contentDiv.appendChild(title)
        contentDiv.appendChild(hashtagsDiv)
        contentDiv.appendChild(servicesDiv)
      
    
        // Append elements to itemDiv 
        itemDiv.appendChild(img);
        itemDiv.appendChild(contentDiv);

        // Append itemDiv to section4-container
        section4Container.appendChild(itemDiv);
    });
    
}


// Select the reasons-grid container
document.addEventListener('DOMContentLoaded', () => {
    createSection2()
    createSection3()
    createSection4()
  });