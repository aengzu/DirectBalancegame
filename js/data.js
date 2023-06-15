/*
'탠저린 탱고 ENFP', 0
'피치에코 ESFP', 1
'스노클블루 ENTP', 2
'피에스타 ENTJ', 3
'칠리페퍼 ESTP', 4
'웬지 ESTJ', 5
'루미너리 그린 ESFJ', 6
'아쿠아 스카이 ENFJ', 7
'울트라 바이올렛 INTJ', 8
'달리아 INFJ', 9
'허니 서클, infp', 10
'세룰리언 블루, istp', 11
'미모사 ISFP', 12
'래디언트 오키드 INTP', 13
'로즈 쿼츠 ISFJ', 14
'라일락그레이 ISTJ', 15
*/

const qnaList = [
  {
    q: '1. 받고 싶은 선물의 가격대는 ? ', //좋아하는 색 정보
    a: [
      { answer: 'a. 3만원 미만', kategory: ['3만원미만'], type:[] },
      { answer: 'b. 3만원 이상', kategory:  ['3만원이상'], type:[] },
    
    ]
  },
 
  {
    q: '2. 나이키 vs 아디다스 ',
    a: [
      { answer: 'a. 나이키',  kategory: ['나이키'], type:[] }, 
      { answer: 'b. 아디다스', kategory: ['아디다스'], type:[] }, 
    ]
  },
  {
    q: '3. 예쁜 선물 vs 실용적 선물 ', 
    a: [
      { answer: 'a. 예쁜 선물', type: [], kategory: ['예쁜선물'] }, 
      { answer: 'b. 실용적 선물 ', type: [], kategory: ['실용적선물'] }, 
    ]
  },
  {
  q: '4.  먹을거 선물(ex) 깊티) vs 먹을거 아닌 선물',
    a: [
      { answer: 'a. 먹을거 좋아 ', type: [], kategory: ['먹을거'] }, //T
      { answer: 'b. 먹을거 별로 ', type: [], kategory: ['먹을거별로'] }, //F
    ]
  },
  {
    q: '5. 튀는 색깔vs 무난한 색깔 ', 
    a: [
      { answer: 'a. 튀는 색깔', category: ['튀는색깔'], type: [] }, 
      { answer: 'b. 무난한 색깔', category: ['무난한색깔'], type: [] }, 

    ]
  },
  {
    q: '6. 개성있는 물건 vs 무난한 물건', 
    a: [
      { answer: 'a. 개성있는 물건', category: ['개성'],  type: [] }, 
      { answer: 'b. 무난한 물건', category: ['무난'], type: [] }, 
    ]
  },
  {
    q: '7. 지금 있는 물건을 또 받아도 되는지 vs 새로운 물건을 받고 싶은지?',
    a: [
      { answer: 'a. 또 받아도 된다  ', type: [], category: ['있던거가능'] }, //N
      { answer: 'b. 기왕이면 새로운걸 받고싶다' , type: [] ,  category: ['있던거x']}, //S
      
    ]
  },
  {
    q: '8. 현금 선물 좋다vs정없다',
    a: [
      { answer: 'a. 현금 좋아', category: ['현금'] , type: []  }, // 패션
      { answer: 'b. 현금 별로',  category: ['현금x'] , type: []}, // 실용성
    
    ]
  },
  {
    q: '9. 받고싶은 디저트 관련 기프티콘은 ? ',
    a: [
      { answer: 'a. 스타벅스', type: [] ,  category: []}, // F
      { answer: 'b. 배스킨라빈스', type: [],  category: [] }, //T
      { answer: 'c. 투썸플레이스', type: [],  category: [] },
      { answer: 'd. 설빙', type: [],  category: [] },
    ]
  },
  {
    q: '10. 가장 받고 싶은 선물은? ',
    a: [
      { answer: 'a. 신발' , category:['신발'], type: [] }, 
      { answer: 'b. 향수/디퓨저', category:['향수'] , type: [] }, 
      { answer: 'c. 먹을거 기프티콘', category:['기프티콘'], type: [] }, 
      { answer: 'd. 인형/쿠션', category:['인형'], type: [] }, 
      { answer: 'e. 먹을거 아닌 금액권(ex) 올리브영 금액권)', category:['금액권'], type: [] }, 
    ]
  },
  {
    q: '11. 흔치 않은 선물 중에 의외로 받으면 좋은 선물은? ',
    a: [
      { answer: 'a. 더치커피세트,',  category: ['더치커피세트'], type: []}, 
      { answer: 'b. 자취템(ex)식기류, 카펫류)', category:['자취템'], type: [] }, 
      { answer: 'c. 필름카메라', category:['필름카메라'], type: [] }, 
      { answer: 'd. 인센스 스틱', category:['인센스스틱'], type: [] }, 
    ]
  },
  {
    q: '12. 메가박스 vs cgv vs 롯데시네마 ',
    a: [
      { answer: 'a. 메가박스', kategory: ['메가박스'], type: [] }, 
      { answer: 'b. cgv',kategory: ['cgv'] , type: []}, 
      { answer: 'c. 롯데시네마 ', kategory: ['롯데시네마'], type: [] }, 
      { answer: 'd. 영화 별로..',kategory: ['영화x'], type: [] }, 
    ]
  },
  {
    q: '13. 선물받았을 떄 디자인은? ',
    a: [
      { answer: 'a. 귀엽고 아기자기한 디자인',  kategory: ['아기자기'], type: [] }, 
      { answer: 'b. 깔끔한 무채색 느낌', kategory: ['깔끔'], type: []}, 
    ]
  },
  {
    q: '14. 치킨 최고봉은? ',
    a: [
      { answer: 'a. bbq',  kategory: ['bbq'], type: [] }, 
      { answer: 'b. bhc', kategory: ['bhc'], type: []}, 
      { answer: 'c. 교촌', kategory: ['교촌'], type: []},  
      { answer: 'd. 굽네', kategory: ['굽네'], type: []}, 
      { answer: 'e. 치킨 별로..', kategory: ['치킨x'], type: []}, 
    ]
  },
   {
    q: '15. 옷 선물 좋다vs취향에 안맞을 수도 있으니 별로다. ',
    a: [
      { answer: 'a. 좋다.',  kategory: ['옷'], type: [] }, 
      { answer: 'b. 별로...', kategory: ['옷x'], type: []}, 
    ]
  },
   {
    q: '16. 배송상품 vs 매장상품 ',
    a: [
      { answer: 'a. 배송상품',  kategory: ['배송'], type: [] }, 
      { answer: 'b. 매장상품', kategory: ['매장'], type: []}, 
    ]
  },
  {
    q: '17. 치킨 vs 피자 ',
    a: [
      { answer: 'a. 치킨',  kategory: ['치킨'], type: [] }, 
      { answer: 'b. 피자', kategory: ['피자'], type: []}, 
    ]
  },
]

const infoList = [
  { //커피 기프티콘 
    name: '커피 기프티콘',
    desc: '부담스러운 걸 싫어하고 실용적인 당신은 커피 기프티콘을 원하시군요 ! '
  }
]
