// 웹툰 「우리들의 리듬」 — 화 = 과. panels 0이면 아직 그림 없음(준비 중)
// 그림: images/webtoon/epNN-K.webp (K=1..panels), 목록 썸네일 epNN-t.webp
// h: 그림 높이(폭 1080 기준). 없으면 1935(9:16). 2~9화는 4:5라 1341
// 24화에는 번외 24.5「잠깐」, 29화에는 번외 29.5「못난이의 순간」 그림이 이어서 들어 있다
var webtoonTitle = "우리들의 리듬";
var webtoonEps = [
 {
  "ep": 1,
  "title": "순서",
  "panels": 3
 },
 {
  "ep": 2,
  "title": "찾아가는 쪽",
  "panels": 2,
  "h": 1341
 },
 {
  "ep": 3,
  "title": "안 온다는 사람",
  "panels": 3,
  "h": 1341
 },
 {
  "ep": 4,
  "title": "한 장",
  "panels": 3,
  "h": 1341
 },
 {
  "ep": 5,
  "title": "나는 사랑해 너를",
  "panels": 3,
  "h": 1341
 },
 {
  "ep": 6,
  "title": "a와 s",
  "panels": 3,
  "h": 1341
 },
 {
  "ep": 7,
  "title": "셀 수 있는 것들",
  "panels": 2,
  "h": 1341
 },
 {
  "ep": 8,
  "title": "동사에 s를 붙일 때",
  "panels": 3,
  "h": 1341
 },
 {
  "ep": 9,
  "title": "뜻 없는 연결",
  "panels": 2,
  "h": 1341
 },
 {
  "ep": 10,
  "title": "지금 이 상태",
  "panels": 3
 },
 {
  "ep": 11,
  "title": "각자의 be",
  "panels": 3
 },
 {
  "ep": 12,
  "title": "지금 하고 있어",
  "panels": 3
 },
 {
  "ep": 13,
  "title": "결과만 보이는",
  "panels": 3
 },
 {
  "ep": 14,
  "title": "그때는 그랬어",
  "panels": 3
 },
 {
  "ep": 15,
  "title": "be동사 총정리",
  "panels": 3
 },
 {
  "ep": 16,
  "title": "모든 걸 가진",
  "panels": 3
 },
 {
  "ep": 17,
  "title": "경험을 갖고 있는 상태",
  "panels": 3
 },
 {
  "ep": 18,
  "title": "해야 할 이유",
  "panels": 3
 },
 {
  "ep": 19,
  "title": "가려고 하는 중",
  "panels": 3
 },
 {
  "ep": 20,
  "title": "재미를 가져",
  "panels": 3
 },
 {
  "ep": 21,
  "title": "받는 순간",
  "panels": 3
 },
 {
  "ep": 22,
  "title": "직접 집어",
  "panels": 3
 },
 {
  "ep": 23,
  "title": "셋의 차이",
  "panels": 3
 },
 {
  "ep": 24,
  "title": "have 총정리",
  "panels": 3
 },
 {
  "ep": 25,
  "title": "마음이 향해",
  "panels": 3
 },
 {
  "ep": 26,
  "title": "하려고 vs 해보니",
  "panels": 3
 },
 {
  "ep": 27,
  "title": "너를 위해서",
  "panels": 3
 },
 {
  "ep": 28,
  "title": "범위 안에",
  "panels": 2
 },
 {
  "ep": 29,
  "title": "정확한 그 점",
  "panels": 3
 },
 {
  "ep": 30,
  "title": "붙어서",
  "panels": 3
 },
 {
  "ep": 31,
  "title": "떨어져 나온",
  "panels": 3
 },
 {
  "ep": 32,
  "title": "다음 박자",
  "panels": 3
 }
];

// 쉬운 버전 — 화 = 과. 한 화에 그림 한 장(컷 3개가 세로로 붙은 1080×1935)
// 그림: images/webtoon/easy/epNN-1.webp, 썸네일 epNN-t.webp. panels 0이면 아직 그림 없음(준비 중)
// 화 제목은 따로 없고 그 과의 제목(data.js)을 쓴다
var webtoonEasyTitle = "우리들의 리듬 · 쉬운 버전";
var webtoonEasyEps = [
 {"ep": 1, "panels": 1},
 {"ep": 2, "panels": 1},
 {"ep": 3, "panels": 1},
 {"ep": 4, "panels": 1},
 {"ep": 5, "panels": 1},
 {"ep": 6, "panels": 1},
 {"ep": 7, "panels": 1},
 {"ep": 8, "panels": 1},
 {"ep": 9, "panels": 1},
 {"ep": 10, "panels": 1},
 {"ep": 11, "panels": 1},
 {"ep": 12, "panels": 1},
 {"ep": 13, "panels": 1},
 {"ep": 14, "panels": 1},
 {"ep": 15, "panels": 1},
 {"ep": 16, "panels": 1},
 {"ep": 17, "panels": 1},
 {"ep": 18, "panels": 1},
 {"ep": 19, "panels": 1},
 {"ep": 20, "panels": 1},
 {"ep": 21, "panels": 1},
 {"ep": 22, "panels": 1},
 {"ep": 23, "panels": 1},
 {"ep": 24, "panels": 1},
 {"ep": 25, "panels": 1},
 {"ep": 26, "panels": 1},
 {"ep": 27, "panels": 0},
 {"ep": 28, "panels": 0},
 {"ep": 29, "panels": 0},
 {"ep": 30, "panels": 0},
 {"ep": 31, "panels": 0},
 {"ep": 32, "panels": 0}
];
