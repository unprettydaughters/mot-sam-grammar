// 연습문제 — 과당 7문제
// t: scene 장면(4지선다) · choice 고르기(4지선다) · order 순서 맞추기

const quizData = {
  1: { core: "영어는 **순서**가 뜻이다. 주어 → 동사 → 목적어.", qs: [
    {"t":"order","ctx":"EP.1, 민준이 못난이에게 다가가 말하며","q":"민준의 대사 '나는 네가 필요해.'를 평서문으로 순서대로 놓으세요","words":["you","I","need"],"a":"I need you.","why":"주어 I 바로 뒤에 동사. 세 칸이 순서대로 찬다."},
    {"t":"order","q":"'미나가 준을 사랑해.'를 평서문으로 순서대로 놓으세요","words":["Jun","Mina","loves"],"a":"Mina loves Jun.","why":"사랑하는 쪽(주어)이 맨 앞. Mina가 앞이라 미나가 사랑한다."},
    {"t":"order","q":"'준이 미나를 사랑해.'를 평서문으로 순서대로 놓으세요","words":["loves","Mina","Jun"],"a":"Jun loves Mina.","why":"같은 단어인데 Jun이 앞이라 사랑하는 쪽이 바뀐다."},
    {"t":"order","q":"'준이 미나를 좋아해.'를 평서문으로 순서대로 놓으세요","words":["Mina","Jun","likes"],"a":"Jun likes Mina.","why":"좋아하는 사람이 맨 앞, 대상이 맨 뒤."},
    {"t":"order","q":"'나는 피자를 먹어.'를 평서문으로 순서대로 놓으세요","words":["pizza","I","eat"],"a":"I eat pizza.","why":"주어 → 동사 → 목적어. 먹는 사람이 먼저."},
    {"t":"order","q":"'우리는 영어를 공부해.'를 평서문으로 순서대로 놓으세요","words":["English","We","study"],"a":"We study English.","why":"공부하는 사람(We)이 맨 앞. 영어가 맨 뒤."},
    {"t":"order","q":"'내 여동생은 그림을 그려.'를 평서문으로 순서대로 놓으세요","words":["draws","pictures","My sister"],"a":"My sister draws pictures.","why":"우리말처럼 동사를 맨 뒤에 두지 않는다. 동사는 주어 바로 뒤."}
  ] },
  2: { core: "문장 앞 **기관차 두 칸**(주어 → 동사)이 뼈대. 뒤는 짐칸.", qs: [
    {"t":"order","ctx":"EP.2, 삼돌이가 민준을 밀어내며","q":"삼돌이의 대사 '나는 그룹은 안 해.'를 평서문으로 순서대로 놓으세요","words":["do groups","don't","I"],"a":"I don't do groups.","why":"주어 I 바로 뒤에 동사 don't do. groups는 뒤에 실린 짐."},
    {"t":"order","q":"'개가 달려.'를 평서문으로 순서대로 놓으세요","words":["runs","dog","The"],"a":"The dog runs.","why":"주어 The dog 바로 뒤에 동사 runs. 기관차 두 칸이 앞에 선다."},
    {"t":"order","q":"'내 친구는 서울에 살아.'를 평서문으로 순서대로 놓으세요","words":["Seoul","lives in","My friend"],"a":"My friend lives in Seoul.","why":"My friend → lives가 앞 두 칸. in Seoul은 뒤에 실린 짐칸."},
    {"t":"order","q":"'준은 버스 정류장에서 기다려.'를 평서문으로 순서대로 놓으세요","words":["the bus stop","Jun","waits at"],"a":"Jun waits at the bus stop.","why":"뼈대는 Jun waits. at the bus stop은 뒤에 실린 짐칸이다."},
    {"t":"order","q":"'새는 아침에 노래해.'를 평서문으로 순서대로 놓으세요","words":["the morning","sings in","bird","The"],"a":"The bird sings in the morning.","why":"뼈대는 The bird sings. in the morning은 짐칸이라 맨 뒤."},
    {"t":"order","q":"'우리 팀은 방과 후에 연습해.'를 평서문으로 순서대로 놓으세요","words":["school","practices after","team","Our"],"a":"Our team practices after school.","why":"기관차 Our team practices가 먼저, after school은 뒤 짐칸."},
    {"t":"order","q":"'우리 할아버지는 공원에서 걸으셔.'를 평서문으로 순서대로 놓으세요","words":["the park","walks in","grandfather","My"],"a":"My grandfather walks in the park.","why":"우리말은 동사가 맨 끝이지만 영어는 주어 바로 뒤에 동사(walks)."}
  ] },
  3: { core: "주어 → 동사 → 목적어 **세 칸 틀**에 낱말만 갈아 끼운다.", qs: [
    {"t":"order","ctx":"EP.3, 민준이 못난이의 노트를 다 읽었다며","q":"민준의 대사 '나는 그걸 읽었어.'를 평서문으로 순서대로 놓으세요","words":["it","read","I"],"a":"I read it.","why":"I(주어) → read(동사) → it(목적어). 세 칸이 순서대로 찬다."},
    {"t":"order","q":"'나는 김밥을 먹어.'를 평서문으로 순서대로 놓으세요","words":["gimbap","I","eat"],"a":"I eat gimbap.","why":"나 → 먹는다 → 김밥을. 동사가 두 번째 칸이다."},
    {"t":"order","q":"'나는 음악을 좋아해.'를 평서문으로 순서대로 놓으세요","words":["music","like","I"],"a":"I like music.","why":"틀은 그대로, 낱말만 갈아 끼운다. 동사는 두 번째."},
    {"t":"order","q":"'나는 내 작은 강아지를 사랑해.'를 평서문으로 순서대로 놓으세요","words":["my little dog","I","love"],"a":"I love my little dog.","why":"목적어 my little dog은 낱말이 셋이어도 세 번째 한 칸."},
    {"t":"order","q":"'우리 엄마가 저녁을 요리해.'를 평서문으로 순서대로 놓으세요","words":["dinner","cooks","My mom"],"a":"My mom cooks dinner.","why":"주어 My mom → 동사 cooks → 목적어 dinner. 순서가 뜻이다."},
    {"t":"order","q":"'엠마가 창문을 열어.'를 평서문으로 순서대로 놓으세요","words":["window","opens","Emma","the"],"a":"Emma opens the window.","why":"Emma(주어) → opens(동사) → the window(목적어)."},
    {"t":"order","q":"'미나는 자기 새 노래를 써.'를 평서문으로 순서대로 놓으세요","words":["song","her","writes","new","Mina"],"a":"Mina writes her new song.","why":"우리말처럼 동사를 맨 끝에 두지 않는다. 동사는 두 번째 칸."}
  ] },
  4: { core: "긴 주어는 **한 덩어리**. He·She·It·They로 바꿔 보면 진짜 동사가 남는다.", qs: [
    {"t":"order","ctx":"EP.4, 삼돌이가 한참 뒤 종이를 보며","q":"삼돌이의 대사 '이 종이에 적힌 말은 나쁘지 않아.'를 평서문으로 순서대로 놓으세요","words":["bad","are","The words on this page","not"],"a":"The words on this page are not bad.","why":"긴 첫 칸 The words on this page를 다 채운 뒤에 동사 are."},
    {"t":"order","q":"'빨간 모자를 쓴 남자는 행복해.'를 평서문으로 순서대로 놓으세요","words":["happy","is","The man with a red hat"],"a":"The man with a red hat is happy.","why":"긴 첫 칸 전체가 주어. 그 뒤에 나오는 is가 동사다."},
    {"t":"order","q":"'밤에 짖는 개는 내 침대에서 자.'를 평서문으로 순서대로 놓으세요","words":["my bed","sleeps on","The dog that barks at night"],"a":"The dog that barks at night sleeps on my bed.","why":"barks는 설명 속 동사. 덩어리를 It으로 바꾸면 sleeps가 남는다."},
    {"t":"order","q":"'홀에서 노래하는 여자아이가 내 여동생이야.'를 「여자아이」가 주어인 평서문으로 순서대로 놓으세요","words":["my sister","The girl who sings in the hall","is"],"a":"The girl who sings in the hall is my sister.","why":"The girl who sings in the hall → She. 남는 동사 is."},
    {"t":"order","q":"'미나가 쓴 노래는 길지 않아.'를 평서문으로 순서대로 놓으세요","words":["long","is","The song that Mina wrote","not"],"a":"The song that Mina wrote is not long.","why":"wrote는 설명 속 동사. 덩어리 뒤의 is가 진짜 동사, not은 그 뒤."},
    {"t":"order","q":"'우리 차를 고치는 남자는 아주 친절해.'를 「남자」가 주어인 평서문으로 순서대로 놓으세요","words":["kind","is","The man who fixes our car","very"],"a":"The man who fixes our car is very kind.","why":"fixes는 덩어리 안 동사. 덩어리 다음 is가 진짜 동사다."},
    {"t":"order","q":"'옆집에 사는 사람들은 아주 친절해.'를 평서문으로 순서대로 놓으세요","words":["very","who live next door","friendly","are","The people"],"a":"The people who live next door are very friendly.","why":"live는 who 설명 속 동사. 우리말처럼 꾸밈을 앞에 두지 않고 The people 뒤에."}
  ] },
  5: { core: "셀 수 있는 것엔 **딱지**. 하나면 a(an) 같은 앞말, 여럿이면 -s.", qs: [
    {"t":"order","ctx":"EP.5, 삼돌이가 혼자 추겠다고 버티며","q":"삼돌이의 대사 '나는 팀이 필요 없어.'를 평서문으로 순서대로 놓으세요","words":["a team","don't","need","I"],"a":"I don't need a team.","why":"team은 하나라서 앞에 a. 하나인 명사는 혼자 서지 못한다."},
    {"t":"order","q":"'나는 개가 한 마리 있어.'를 평서문으로 순서대로 놓으세요","words":["a dog","have","I"],"a":"I have a dog.","why":"한 마리라서 a 딱지. 딱지가 하나 붙은 명사."},
    {"t":"order","q":"'나는 개가 두 마리 있어.'를 평서문으로 순서대로 놓으세요","words":["two dogs","have","I"],"a":"I have two dogs.","why":"두 마리 이상이라 dogs. two가 있어도 s 딱지는 필요하다."},
    {"t":"order","q":"'나는 생각이 하나 있어.'를 평서문으로 순서대로 놓으세요","words":["an idea","have","I"],"a":"I have an idea.","why":"idea는 모음 소리로 시작해서 a가 아니라 an."},
    {"t":"order","q":"'우리는 의자가 두 개 필요해.'를 평서문으로 순서대로 놓으세요","words":["chairs","need","two","We"],"a":"We need two chairs.","why":"여럿이니까 chairs에 s 딱지. 순서는 주어 → 동사 → 목적어."},
    {"t":"order","q":"'엠마는 오렌지를 하나 먹어.'를 평서문으로 순서대로 놓으세요","words":["orange","an","eats","Emma"],"a":"Emma eats an orange.","why":"orange는 모음 소리라서 an 딱지. 딱지는 명사 바로 앞."},
    {"t":"order","q":"'준은 큰 우산을 하나 갖고 있어.'를 평서문으로 순서대로 놓으세요","words":["umbrella","a","big","has","Jun"],"a":"Jun has a big umbrella.","why":"a는 바로 뒤 낱말 big의 소리를 따른다. 동사는 우리말처럼 끝에 안 둔다."}
  ] },
  6: { core: "숫자 **스위치**: 하나면 is + a, 여럿이면 are + s.", qs: [
    {"t":"order","ctx":"EP.6, 민준이 떠나는 삼돌이의 등에 대고","q":"민준의 대사 '이 동아리에는 회원이 세 명 있어.'를 평서문으로 순서대로 놓으세요","words":["three members","This club","has"],"a":"This club has three members.","why":"세 명이라 members에 s. 숫자가 셋이면 여럿 스위치."},
    {"t":"order","q":"'책이 한 권 있어.'를 평서문으로 순서대로 놓으세요","words":["book","a","There is"],"a":"There is a book.","why":"하나라서 is + a book. 스위치가 단수 쪽."},
    {"t":"order","q":"'달걀이 두 개 있어.'를 평서문으로 순서대로 놓으세요","words":["eggs","two","There are"],"a":"There are two eggs.","why":"two가 붙으면 여럿. be 동사는 are, 명사는 eggs."},
    {"t":"order","q":"'아이가 세 명 있어.'를 평서문으로 순서대로 놓으세요","words":["children","three","There are"],"a":"There are three children.","why":"child의 복수는 children. 여럿이니까 are."},
    {"t":"order","q":"'열쇠가 두 개 있어.'를 평서문으로 순서대로 놓으세요","words":["keys","two","There are"],"a":"There are two keys.","why":"여럿 스위치니까 be 동사도 are, 명사도 keys."},
    {"t":"order","q":"'큰 개가 두 마리 있어.'를 평서문으로 순서대로 놓으세요","words":["dogs","big","two","There are"],"a":"There are two big dogs.","why":"숫자 → 꾸밈말 → 명사 순서. 여럿이라 are + dogs."},
    {"t":"order","q":"'남은 사람이 많지 않아.'를 평서문으로 순서대로 놓으세요","words":["left","people","There are","many","not"],"a":"There are not many people left.","why":"people은 여럿이라 are. 「남은 사람」 순서로 left를 앞에 두기 쉽다."}
  ] },
  7: { core: "세는 건 **알갱이**, 못 세는 물은 **그릇**에 담아 센다.", qs: [
    {"t":"order","ctx":"EP.7, 못난이가 민준 옆에 앉아 빈 캔들을 보며","q":"못난이의 대사 '너 커피를 세 캔이나 마셨어.'를 「너」로 시작하는 평서문으로 순서대로 놓으세요","words":["of coffee","three cans","You","drank"],"a":"You drank three cans of coffee.","why":"세는 건 커피가 아니라 그릇(cans). 그래서 three cans of coffee."},
    {"t":"order","q":"'나는 물이 있어.'를 평서문으로 순서대로 놓으세요","words":["water","have","I"],"a":"I have water.","why":"water는 못 세니 a도 s도 없이 그대로 온다."},
    {"t":"order","q":"'나는 사과가 두 개 있어.'를 평서문으로 순서대로 놓으세요","words":["two apples","have","I"],"a":"I have two apples.","why":"apple은 알갱이라 셀 수 있다. 두 개니까 apples."},
    {"t":"order","q":"'우리는 돈이 필요해.'를 평서문으로 순서대로 놓으세요","words":["money","We","need"],"a":"We need money.","why":"money는 못 세는 것. a도 s도 안 붙는다."},
    {"t":"order","q":"'나는 달걀이 두 개 필요해.'를 평서문으로 순서대로 놓으세요","words":["eggs","two","need","I"],"a":"I need two eggs.","why":"달걀은 세는 알갱이. 두 개라서 eggs."},
    {"t":"order","q":"'엠마는 우유 한 잔을 원해.'를 평서문으로 순서대로 놓으세요","words":["a glass","of milk","wants","Emma"],"a":"Emma wants a glass of milk.","why":"milk는 못 세니 그릇을 센다. 그릇이 하나라서 a glass."},
    {"t":"order","q":"'나는 물 두 잔이 필요해.'를 평서문으로 순서대로 놓으세요","words":["of","water","two glasses","need","I"],"a":"I need two glasses of water.","why":"우리말은 「물 두 잔」이라 물이 먼저. 영어는 그릇이 먼저: two glasses of water."}
  ] },
  8: { core: "**자리**를 지키고, **숫자**를 밝히고, he·she·it 뒤 동사에 **s**.", qs: [
    {"t":"order","ctx":"EP.8, 삼돌이가 한참 뒤 픽 웃으며","q":"삼돌이의 대사 '그 애는 그걸 생각해 봐.'를 평서문으로 순서대로 놓으세요","words":["about it","She","thinks"],"a":"She thinks about it.","why":"She는 나·너가 아닌 하나(3인칭 단수). 그래서 동사에 s: thinks."},
    {"t":"order","q":"'그는 피자를 좋아해.'를 평서문으로 순서대로 놓으세요","words":["pizza","likes","He"],"a":"He likes pizza.","why":"He는 3인칭 단수라서 동사에 s: likes."},
    {"t":"order","q":"'그들은 피자를 좋아해.'를 평서문으로 순서대로 놓으세요","words":["like","pizza","They"],"a":"They like pizza.","why":"They는 여럿이라 동사에 s가 없다. like 그대로."},
    {"t":"order","q":"'너는 물이 필요해.'를 평서문으로 순서대로 놓으세요","words":["water","need","You"],"a":"You need water.","why":"You는 한 명이어도 s가 없다. water도 a·s가 없다."},
    {"t":"order","q":"'개가 공원에서 달려.'를 평서문으로 순서대로 놓으세요","words":["the park","runs in","dog","The"],"a":"The dog runs in the park.","why":"The dog는 it으로 바뀐다. 그래서 runs. in the park는 뒤 짐칸."},
    {"t":"order","q":"'내 여동생은 개가 두 마리 있어.'를 평서문으로 순서대로 놓으세요","words":["two dogs","has","sister","My"],"a":"My sister has two dogs.","why":"My sister는 she로 바뀐다. 그래서 have가 haves 아닌 has로 바뀐다."},
    {"t":"order","q":"'그녀는 우유 한 잔을 마셔.'를 평서문으로 순서대로 놓으세요","words":["of","milk","a glass","She","drinks"],"a":"She drinks a glass of milk.","why":"우리말처럼 동사를 끝에 두지 않는다. She 뒤 동사엔 s: drinks."}
  ] },
  9: { core: "be 동사는 뜻이 없는 **빈 컵**. 주어와 상태를 등호처럼 잇는다.", qs: [
    {"t":"order","ctx":"EP.9, 돌아온 삼돌이가 씩 웃으며","q":"삼돌이의 대사 '나 돌아왔어.'를 평서문으로 순서대로 놓으세요","words":["back","I","am"],"a":"I am back.","why":"am은 뜻 없이 I와 back을 잇는 등호. 돌아온 상태를 담았다."},
    {"t":"order","q":"'나는 행복해.'를 평서문으로 순서대로 놓으세요","words":["happy","am","I"],"a":"I am happy.","why":"빈 컵 am이 I와 happy를 잇는다. I = happy."},
    {"t":"order","q":"'그녀는 키가 커.'를 평서문으로 순서대로 놓으세요","words":["tall","is","She"],"a":"She is tall.","why":"is도 뜻 없이 She = tall을 잇는다."},
    {"t":"order","q":"'그는 내 선생님이야.'를 평서문으로 순서대로 놓으세요","words":["my teacher","He","is"],"a":"He is my teacher.","why":"컵에는 상태뿐 아니라 이름(my teacher)도 담긴다."},
    {"t":"order","q":"'그 방은 비어 있어.'를 평서문으로 순서대로 놓으세요","words":["empty","The room","is"],"a":"The room is empty.","why":"방 = 비어 있음. be는 주어와 상태 사이에서 잇는다."},
    {"t":"order","q":"'너는 내 가장 친한 친구야.'를 평서문으로 순서대로 놓으세요","words":["best friend","are","You","my"],"a":"You are my best friend.","why":"You 다음엔 are. You = my best friend로 등호처럼 잇는다."},
    {"t":"order","q":"'네 새 신발은 정말 예뻐.'를 평서문으로 순서대로 놓으세요","words":["very nice","are","Your","new shoes"],"a":"Your new shoes are very nice.","why":"함정: 우리말은 '정말 예뻐'가 끝이라 be를 끝에 두기 쉽다. be는 사이에."}
  ] },
  10: { core: "행동은 **손발**의 일, 상태는 be가 다는 **명찰**. be 뒤에 상태 말이 오면 상태다.", qs: [
    {"t":"order","ctx":"EP.10, 무너진 민준이 애써 버티며","q":"민준의 대사 '나 괜찮아.'를 평서문으로 순서대로 놓으세요","words":["fine","I","am"],"a":"I am fine.","why":"괜찮다는 건 행동이 아니라 명찰(상태). 그런데 손은 떨리고 있다."},
    {"t":"order","q":"'나는 피곤해.'를 평서문으로 순서대로 놓으세요","words":["tired","am","I"],"a":"I am tired.","why":"am tired는 달리는 행동이 아니라 지금 달린 명찰이다."},
    {"t":"order","q":"'그녀는 선생님이야.'를 평서문으로 순서대로 놓으세요","words":["a teacher","She","is"],"a":"She is a teacher.","why":"선생님이라는 명찰도 be가 잇는다."},
    {"t":"order","q":"'그는 체육관에 있어.'를 평서문으로 순서대로 놓으세요","words":["in the gym","He","is"],"a":"He is in the gym.","why":"「~에 있다」도 명찰. 장소가 지금의 상태를 알려 준다."},
    {"t":"order","q":"'그 아이들은 배고파.'를 평서문으로 순서대로 놓으세요","words":["hungry","The kids","are"],"a":"The kids are hungry.","why":"여럿이라 are. 배고픔은 행동이 아니라 상태다."},
    {"t":"order","q":"'내 형은 아주 피곤해.'를 평서문으로 순서대로 놓으세요","words":["very tired","is","brother","My"],"a":"My brother is very tired.","why":"주어(My brother) 바로 뒤에 be, 그 뒤에 명찰(very tired)."},
    {"t":"order","q":"'내 새 선생님은 아주 친절해.'를 평서문으로 순서대로 놓으세요","words":["very kind","is","teacher","My","new"],"a":"My new teacher is very kind.","why":"함정: 우리말은 '친절해'가 끝이라 be를 끝에 두기 쉽다. be는 주어 뒤."}
  ] },
  11: { core: "**좌석 셋**: I는 am, 한 명·하나는 is, You와 여럿은 are.", qs: [
    {"t":"order","ctx":"EP.11, 웃음을 참지 못하면서","q":"삼돌이의 대사 '나 안 웃고 있어.'를 평서문으로 순서대로 놓으세요","words":["laughing","not","I","am"],"a":"I am not laughing.","why":"주어가 I니까 am 자리. not은 be 바로 뒤에 온다."},
    {"t":"order","q":"'그들은 내 사촌이야.'를 평서문으로 순서대로 놓으세요","words":["my cousins","are","They"],"a":"They are my cousins.","why":"여럿(They)이라 are 자리에 앉는다."},
    {"t":"order","q":"'그는 내 남동생이야.'를 평서문으로 순서대로 놓으세요","words":["my brother","is","He"],"a":"He is my brother.","why":"한 명(He)이라 is 자리."},
    {"t":"order","q":"'우리는 준비됐어.'를 평서문으로 순서대로 놓으세요","words":["ready","are","We"],"a":"We are ready.","why":"We도 여럿 자리 are. am은 I 전용석이다."},
    {"t":"order","q":"'미나와 준은 친구야.'를 평서문으로 순서대로 놓으세요","words":["friends","are","Mina and Jun"],"a":"Mina and Jun are friends.","why":"둘이니까 여럿 자리 are. 한 명씩일 때만 is."},
    {"t":"order","q":"'그 영화는 아주 길어.'를 평서문으로 순서대로 놓으세요","words":["very long","is","movie","The"],"a":"The movie is very long.","why":"movie는 하나라서 is 자리."},
    {"t":"order","q":"'내 두 여동생은 아주 키가 커.'를 평서문으로 순서대로 놓으세요","words":["very tall","are","My two","sisters"],"a":"My two sisters are very tall.","why":"함정: sisters는 여럿이라 are. 끝에 be를 두지 말고 주어 바로 뒤에."}
  ] },
  12: { core: "진행형은 **사진 한 장**. be + -ing, 지금 이 순간의 모습.", qs: [
    {"t":"order","ctx":"EP.12, 화이트보드에 쓰던 민준이","q":"민준의 대사 '나는 네 노래를 쓰고 있어.'를 평서문으로 순서대로 놓으세요","words":["your song","writing","I'm"],"a":"I'm writing your song.","why":"be(I'm) + -ing. 쓰는 중인 순간을 사진처럼 붙잡는다."},
    {"t":"order","q":"'나는 춤추고 있어.'를 평서문으로 순서대로 놓으세요","words":["dancing","am","I"],"a":"I am dancing.","why":"am + dancing. 지금 이 순간의 사진 한 장."},
    {"t":"order","q":"'그녀는 노래하고 있어.'를 평서문으로 순서대로 놓으세요","words":["singing","is","She"],"a":"She is singing.","why":"is + singing. 틀(be)과 행동(-ing)이 한 쌍이다."},
    {"t":"order","q":"'그들은 춤추고 있어.'를 평서문으로 순서대로 놓으세요","words":["dancing","are","They"],"a":"They are dancing.","why":"여럿이면 틀이 are로 바뀐다. -ing는 그대로."},
    {"t":"order","q":"'아기가 울고 있어.'를 평서문으로 순서대로 놓으세요","words":["crying","is","The baby"],"a":"The baby is crying.","why":"울고 있는 지금 모습. be 없이 -ing만 쓰면 문장이 안 선다."},
    {"t":"order","q":"'우리는 영어를 공부하고 있어.'를 평서문으로 순서대로 놓으세요","words":["studying English","are","We"],"a":"We are studying English.","why":"We는 are 틀. 그 안에 studying이 들어간다."},
    {"t":"order","q":"'내 여동생은 피아노를 연습하고 있어.'를 평서문으로 순서대로 놓으세요","words":["practicing","the piano","is","sister","My"],"a":"My sister is practicing the piano.","why":"함정: 동사가 끝인 우리말과 달리 be + -ing가 주어 바로 뒤에 온다."}
  ] },
  13: { core: "**결과표**: 누가 했는지보다 지금 어떤 결과인지를 말한다.", qs: [
    {"t":"order","ctx":"EP.13, 삼돌이가 민준을 노려보며","q":"삼돌이의 대사 '내 동작이 빠졌어.'를 평서문으로 순서대로 놓으세요","words":["dropped","My move","is"],"a":"My move is dropped.","why":"뺀 사람이 아니라 빠진 결과를 말한다. be + 과거분사(dropped)."},
    {"t":"order","q":"'창문이 깨져 있어.'를 평서문으로 순서대로 놓으세요","words":["broken","The window","is"],"a":"The window is broken.","why":"부순 사람은 말하지 않고 깨진 결과만 말한다."},
    {"t":"order","q":"'가게가 닫혀 있어.'를 평서문으로 순서대로 놓으세요","words":["is","closed","The shop"],"a":"The shop is closed.","why":"지금 문이 닫혀 있다는 결과. be + closed."},
    {"t":"order","q":"'파일이 저장돼 있어.'를 평서문으로 순서대로 놓으세요","words":["saved","is","The file"],"a":"The file is saved.","why":"누가 저장했든 저장된 결과가 중요하다."},
    {"t":"order","q":"'창문은 깨지지 않았어.'를 평서문으로 순서대로 놓으세요","words":["broken","is","The window","not"],"a":"The window is not broken.","why":"not은 be 바로 뒤에 온다. be + not + 과거분사."},
    {"t":"order","q":"'보고서는 끝나지 않았어.'를 평서문으로 순서대로 놓으세요","words":["finished","The report","not","is"],"a":"The report is not finished.","why":"끝난 결과가 아니라는 말. be + not + 과거분사."},
    {"t":"order","q":"'그 음식은 안 익었어.'를 평서문으로 순서대로 놓으세요","words":["cooked","is","The food","not"],"a":"The food is not cooked.","why":"함정: 우리말은 '안 익었어'로 끝난다. 영어는 be + not + 과거분사 순서."}
  ] },
  14: { core: "be going to = **이미 출발한 발걸음**. 앞으로 일어날 일을 말한다.", qs: [
    {"t":"order","ctx":"EP.14, 삼돌이가 엔딩을 불안해하며","q":"삼돌이의 대사 '엔딩은 실패할 거야!'를 평서문으로 순서대로 놓으세요","words":["fail","is","The ending","going to"],"a":"The ending is going to fail!","why":"is + going to + 동사. 발이 이미 실패 쪽으로 향했다고 느끼는 거다."},
    {"t":"order","q":"'비가 올 거야.'를 평서문으로 순서대로 놓으세요","words":["rain","is","going to","It"],"a":"It is going to rain.","why":"구름이라는 눈앞의 신호로 아는 일. be + going to + 동사."},
    {"t":"order","q":"'아기가 울 것 같아.'를 평서문으로 순서대로 놓으세요","words":["cry","The baby","is","going to"],"a":"The baby is going to cry.","why":"눈앞에 보이는 신호로 아는 일. going to 뒤는 동사 원래 모양."},
    {"t":"order","q":"'나는 노래 안 할 거야.'를 평서문으로 순서대로 놓으세요","words":["sing","not going to","am","I"],"a":"I am not going to sing.","why":"not은 be 바로 뒤에 온다. going to 뒤는 동사 원래 모양."},
    {"t":"order","q":"'그녀는 떠나지 않을 거야.'를 평서문으로 순서대로 놓으세요","words":["leave","She","is","not going to"],"a":"She is not going to leave.","why":"not going to가 be 바로 뒤에 온다. 우리말 '~하지 않을 거야'와 순서가 다르다."},
    {"t":"order","q":"'우리 팀이 이길 거야.'를 평서문으로 순서대로 놓으세요","words":["win","going to","Our","team","is"],"a":"Our team is going to win.","why":"team은 하나라서 is. 그 뒤에 going to + 동사."},
    {"t":"order","q":"'우리 부모님은 내 이모를 방문할 거야.'를 평서문으로 순서대로 놓으세요","words":["visit","my aunt","are","going to","My","parents"],"a":"My parents are going to visit my aunt.","why":"함정: 우리말은 '방문할 거야'가 끝. 영어는 going to를 동사 앞에 둔다."}
  ] },
  15: { core: "과거 be는 **어제 칸**으로 옮긴 be. am·is는 was, are는 were.", qs: [
    {"t":"order","ctx":"EP.15, 민준이 삼돌이에게 인정하며","q":"민준의 대사 '네 말이 맞았어.'를 평서문으로 순서대로 놓으세요","words":["right","You","were"],"a":"You were right.","why":"You는 오늘 are였으니 어제 칸에서는 were."},
    {"t":"order","q":"'나는 집에 있었어.'를 평서문으로 순서대로 놓으세요","words":["at home","was","I"],"a":"I was at home.","why":"I는 오늘 am이었으니 어제 칸에서는 was."},
    {"t":"order","q":"'우리는 식탁에 있었어.'를 평서문으로 순서대로 놓으세요","words":["at the table","were","We"],"a":"We were at the table.","why":"We의 are를 어제 칸으로 옮기면 were."},
    {"t":"order","q":"'그는 가수였어.'를 평서문으로 순서대로 놓으세요","words":["a singer","was","He"],"a":"He was a singer.","why":"He는 is였으니 어제는 was. 그때의 모습을 말한다."},
    {"t":"order","q":"'그녀는 아주 피곤했어.'를 평서문으로 순서대로 놓으세요","words":["very tired","was","She"],"a":"She was very tired.","why":"She는 was. 지금은 어떤지 이 문장은 말하지 않는다."},
    {"t":"order","q":"'우리 부모님은 아주 행복했어.'를 평서문으로 순서대로 놓으세요","words":["very happy","were","parents","My"],"a":"My parents were very happy.","why":"parents는 여럿이라 were. 어제 칸에서도 자리표는 그대로."},
    {"t":"order","q":"'내 두 형제는 아주 키가 컸어.'를 평서문으로 순서대로 놓으세요","words":["very tall","were","brothers","My","two"],"a":"My two brothers were very tall.","why":"함정: brothers가 둘이라 were. 끝에 be를 두지 말고 주어 바로 뒤에."}
  ] },
  16: { core: "be 하나에 다섯 얼굴: 상태·진행·수동·미래·과거. 뒤에 오는 말이나 be의 모양이 정한다.", qs: [
    {"t":"order","ctx":"EP.16, 걸레질을 멈춘 못난이가 노트를 말하며","q":"못난이의 대사 '그것들은 내 목소리야.'를 평서문으로 순서대로 놓으세요","words":["my voice","are","They"],"a":"They are my voice.","why":"상태 얼굴: 여럿(They)이라 are. be가 They와 my voice를 등호처럼 잇는다."},
    {"t":"order","q":"'그는 보고 있어.'를 평서문으로 순서대로 놓으세요","words":["watching","is","He"],"a":"He is watching.","why":"진행 얼굴: be + -ing. 지금 이 순간의 사진 한 장."},
    {"t":"order","q":"'나는 배고파.'를 평서문으로 순서대로 놓으세요","words":["hungry","am","I"],"a":"I am hungry.","why":"상태 얼굴: I는 am. 배고픔은 지금 달린 명찰."},
    {"t":"order","q":"'그녀는 피곤했어.'를 평서문으로 순서대로 놓으세요","words":["tired","was","She"],"a":"She was tired.","why":"과거 얼굴: be의 모양이 어제 칸(was)으로 바뀐다."},
    {"t":"order","q":"'우리는 춤출 거야.'를 평서문으로 순서대로 놓으세요","words":["dance","We","are","going to"],"a":"We are going to dance.","why":"미래 얼굴: be + going to + 동사. We는 are 자리."},
    {"t":"order","q":"'문이 잠겨 있어.'를 평서문으로 순서대로 놓으세요","words":["locked","is","door","The"],"a":"The door is locked.","why":"수동 얼굴: be + 과거분사. 누가 했는지 말고 지금 결과."},
    {"t":"order","q":"'시험은 쉬울 거야.'를 평서문으로 순서대로 놓으세요","words":["easy","going to","is","The test","be"],"a":"The test is going to be easy.","why":"함정: going to 뒤에 be가 한 번 더 온다. 우리말 '식을 거야'처럼 몰지 않는다."}
  ] },
  17: { core: "have는 소유가 아니라 **끈**. 물건·사람·시간·꿈을 나와 잇는다.", qs: [
    {"t":"order","ctx":"EP.17, 삼돌이가 옥상에서 옛날 이야기를 꺼내며","q":"삼돌이의 대사 '나한테도 그런 곳이 있었어.'를 평서문으로 순서대로 놓으세요","words":["a place","had","I"],"a":"I had a place.","why":"I 바로 뒤에 had. 나와 그런 곳이 끈으로 이어져 있었다."},
    {"t":"order","q":"'나는 펜이 있어.'를 평서문으로 순서대로 놓으세요","words":["a pen","have","I"],"a":"I have a pen.","why":"끈 끝에 물건이 매달린다. I 바로 뒤에 have."},
    {"t":"order","q":"'그녀에게는 꿈이 있어.'를 평서문으로 순서대로 놓으세요","words":["a dream","She","has"],"a":"She has a dream.","why":"주어가 She면 have가 has로 바뀐다. 끈은 그대로다."},
    {"t":"order","q":"'나에게는 문제가 있어.'를 평서문으로 순서대로 놓으세요","words":["a problem","I","have"],"a":"I have a problem.","why":"문제도 손에 안 잡히지만 끈으로 나와 이어진다."},
    {"t":"order","q":"'나는 계획이 없어.'를 평서문으로 순서대로 놓으세요","words":["no","plan","I","have"],"a":"I have no plan.","why":"have no는 끈이 없다는 뜻. no는 have 바로 뒤에 온다."},
    {"t":"order","q":"'내 여동생은 새 휴대폰이 있어.'를 평서문으로 순서대로 놓으세요","words":["new phone","a","My sister","has"],"a":"My sister has a new phone.","why":"주어가 My sister(she)라 has. 물건도 끈 끝에 매달린다."},
    {"t":"order","q":"'민준에게는 여동생이 둘 있어.'를 평서문으로 순서대로 놓으세요","words":["sisters","has","two","Minjun","younger"],"a":"Minjun has two younger sisters.","why":"함정. 우리말은 '있다'가 맨 끝. 영어는 has를 주어 바로 뒤에 둔다."}
  ] },
  18: { core: "현재완료는 **다리**. have + 과거분사로 지난 일을 지금과 잇는다.", qs: [
    {"t":"order","ctx":"EP.18, 밤새 쓴 노트를 민준에게 내밀며","q":"못난이의 대사 '나 그거 다 끝냈어.'를 평서문으로 순서대로 놓으세요","words":["it","I've","finished"],"a":"I've finished it.","why":"끝낸 일이 지금도 곁에 있다. I've 뒤에 과거분사 finished."},
    {"t":"order","q":"'나는 밤새 깨어 있었어.'를 평서문으로 순서대로 놓으세요","words":["up all night","I've","stayed"],"a":"I've stayed up all night.","why":"I've = I have. 그 뒤에 과거분사 stayed가 온다."},
    {"t":"order","q":"'나는 그걸 어젯밤에 썼어.'를 평서문으로 순서대로 놓으세요","words":["it last night","wrote","I"],"a":"I wrote it last night.","why":"어젯밤처럼 때가 딱 있으면 과거형. have는 안 쓴다."},
    {"t":"order","q":"'나는 그걸 다 써 놨어.'를 평서문으로 순서대로 놓으세요","words":["have written","it","I"],"a":"I have written it.","why":"다 써서 지금도 곁에 있다. have 뒤에 과거분사 written."},
    {"t":"order","q":"'그들은 집에 가 버렸어.'를 평서문으로 순서대로 놓으세요","words":["gone","They","home","have"],"a":"They have gone home.","why":"have 뒤에 과거분사 gone. 지금 여기 없다는 결과가 남는다."},
    {"t":"order","q":"'그녀는 두리안을 아직 안 먹었어.'를 평서문으로 순서대로 놓으세요","words":["durian","She","not","eaten","has"],"a":"She has not eaten durian.","why":"부정은 has 바로 뒤에 not. 그 뒤에 과거분사 eaten."},
    {"t":"order","q":"'나는 서울에 가 본 적이 없어.'를 평서문으로 순서대로 놓으세요","words":["to Seoul","not","I","been","have"],"a":"I have not been to Seoul.","why":"함정. 우리말은 '적이 없어'가 끝. 영어는 have not been 순서로 잇는다."}
  ] },
  19: { core: "have to는 해야 할 일을 **짐**처럼 멘다. 규칙이 얹어도, 스스로 느껴도.", qs: [
    {"t":"order","ctx":"EP.19, 떠나려던 못난이에게 민준이 말하며","q":"민준의 대사 '너 갈 필요 없어.'를 평서문으로 순서대로 놓으세요","words":["go","have","don't","You","to"],"a":"You don't have to go.","why":"안 해도 된다는 말. don't가 have to 앞에 온다(짐이 없다)."},
    {"t":"order","q":"'나는 가야 해.'를 평서문으로 순서대로 놓으세요","words":["go","I","have to"],"a":"I have to go.","why":"가야 할 일을 짐처럼 메고 있다. have to 뒤에는 동사."},
    {"t":"order","q":"'그는 일해야 해.'를 평서문으로 순서대로 놓으세요","words":["work","He","has to"],"a":"He has to work.","why":"주어가 He면 have to가 has to로 바뀐다."},
    {"t":"order","q":"'나는 이 노래를 끝내야 해.'를 평서문으로 순서대로 놓으세요","words":["finish this song","I","have to"],"a":"I have to finish this song.","why":"꼭 해야 한다고 느끼는 일도 have to. 짐은 안에서도 온다."},
    {"t":"order","q":"'너는 교복을 입어야 해.'를 평서문으로 순서대로 놓으세요","words":["wear a uniform","You","have to"],"a":"You have to wear a uniform.","why":"학교 규칙 같은 밖의 이유도 have to로 말한다."},
    {"t":"order","q":"'내 여동생은 수학을 공부해야 해.'를 평서문으로 순서대로 놓으세요","words":["math","My sister","study","has to"],"a":"My sister has to study math.","why":"주어가 My sister(she)라 has to. 뒤에는 동사 study."},
    {"t":"order","q":"'너는 나를 도울 필요 없어.'를 평서문으로 순서대로 놓으세요","words":["help","have to","me","You","don't"],"a":"You don't have to help me.","why":"함정. 우리말은 '필요 없어'로 부정이 끝. 영어는 don't가 have to 앞."}
  ] },
  20: { core: "have + 명사는 그 명사가 든 **경험 상자**를 연다는 말이다.", qs: [
    {"t":"order","ctx":"EP.20, 넘어진 못난이를 보며 삼돌이가 웃다가","q":"삼돌이의 대사 '우리 좀 쉬자.'를 평서문으로 순서대로 놓으세요","words":["a break","have","Let's"],"a":"Let's have a break.","why":"쉬는 시간이라는 경험 상자를 연다. have + 명사."},
    {"t":"order","q":"'나는 저녁을 먹어.'를 평서문으로 순서대로 놓으세요","words":["dinner","I","have"],"a":"I have dinner.","why":"밥 먹기도 경험 상자. have 뒤에 dinner만 바꾸면 된다."},
    {"t":"order","q":"'나는 샤워를 해.'를 평서문으로 순서대로 놓으세요","words":["a shower","I","have"],"a":"I have a shower.","why":"샤워도 have 뒤에 명사를 놓아 말한다."},
    {"t":"order","q":"'우리 뭐 좀 마시자.'를 평서문으로 순서대로 놓으세요","words":["drink","a","have","Let's"],"a":"Let's have a drink.","why":"마시는 경험 상자를 연다. Let's 뒤에 have."},
    {"t":"order","q":"'그들은 즐거운 시간을 보내.'를 평서문으로 순서대로 놓으세요","words":["good time","They","a","have"],"a":"They have a good time.","why":"즐거운 시간이라는 경험 상자. a를 잊지 않는다."},
    {"t":"order","q":"'그는 긴 수다를 떨어.'를 평서문으로 순서대로 놓으세요","words":["long","a","chat","He","has"],"a":"He has a long chat.","why":"주어가 He라 has. 명사 chat 앞에 a long이 붙는다."},
    {"t":"order","q":"'우리 좋은 시간 보내자.'를 평서문으로 순서대로 놓으세요","words":["time","good","Let's","a","have"],"a":"Let's have a good time.","why":"함정. 우리말은 '보내자'가 끝. 영어는 have가 명사 앞에 온다."}
  ] },
  21: { core: "have는 방 안에 **있는** 것, get은 문턱을 **넘는** 순간이다.", qs: [
    {"t":"order","ctx":"EP.21, 복도에서 삼돌이가 뒤늦게 마음을 전하며","q":"삼돌이의 대사 '나 네 말 알아들었어.'를 평서문으로 순서대로 놓으세요","words":["what you said","I","got"],"a":"I got what you said.","why":"네 말이 문턱을 넘어 내 마음에 들어왔다. get의 과거 got."},
    {"t":"order","q":"'나는 돈을 받았어.'를 평서문으로 순서대로 놓으세요","words":["money","got","I"],"a":"I got money.","why":"돈이 들어온 순간이라 got. have면 원래 있던 돈이다."},
    {"t":"order","q":"'나는 피곤해져.'를 평서문으로 순서대로 놓으세요","words":["tired","I","get"],"a":"I get tired.","why":"피곤하지 않던 몸이 피곤해진다. get + 형용사."},
    {"t":"order","q":"'나는 편지를 받았어.'를 평서문으로 순서대로 놓으세요","words":["letter","a","I","got"],"a":"I got a letter.","why":"없던 편지가 들어왔다. got 뒤에 받은 것이 온다."},
    {"t":"order","q":"'그들은 강아지를 얻었어.'를 평서문으로 순서대로 놓으세요","words":["puppy","a","They","got"],"a":"They got a puppy.","why":"강아지가 그들에게 생긴 순간이라 got."},
    {"t":"order","q":"'우리는 새 선생님이 생겼어.'를 평서문으로 순서대로 놓으세요","words":["new","We","teacher","a","got"],"a":"We got a new teacher.","why":"없던 선생님이 생겼다. 생기는 순간은 get의 과거 got."},
    {"t":"order","q":"'내 여동생은 아주 화가 나.'를 평서문으로 순서대로 놓으세요","words":["very","angry","sister","gets","My"],"a":"My sister gets very angry.","why":"함정. 우리말은 '화가 나'로 동사가 끝. 영어는 gets가 주어 바로 뒤."}
  ] },
  22: { core: "take는 **손 뻗기**. 사람도 일도 무언가를 손으로 집어 갖는다.", qs: [
    {"t":"order","ctx":"EP.22, 동아리실에서 민준이 혼자 정한 일을 밝히며","q":"민준의 대사 '나는 늦은 순서를 잡았어.'를 평서문으로 순서대로 놓으세요","words":["the","late slot","took","I"],"a":"I took the late slot.","why":"손을 뻗어 늦은 순서를 직접 집었다. take의 과거 took."},
    {"t":"order","q":"'나는 버스를 타.'를 평서문으로 순서대로 놓으세요","words":["the bus","take","I"],"a":"I take the bus.","why":"손을 뻗어 버스를 잡아탄다. take는 무언가를 집어 갖는 손."},
    {"t":"order","q":"'시간이 걸려.'를 평서문으로 순서대로 놓으세요","words":["time","takes","It"],"a":"It takes time.","why":"이번엔 일이 주어. 일이 시간을 가져간다. 그래서 걸린다."},
    {"t":"order","q":"'나는 산책할게.'를 평서문으로 순서대로 놓으세요","words":["walk","a","take","I'll"],"a":"I'll take a walk.","why":"산책이라는 행동을 집어 든다. take + 명사."},
    {"t":"order","q":"'한 시간 걸려.'를 평서문으로 순서대로 놓으세요","words":["an","hour","takes","It"],"a":"It takes an hour.","why":"일이 한 시간을 가져간다. 주어가 It이라 takes."},
    {"t":"order","q":"'내 남동생은 버스를 타.'를 평서문으로 순서대로 놓으세요","words":["the","bus","My","takes","brother"],"a":"My brother takes the bus.","why":"주어가 My brother(he)라 takes. 손을 뻗어 버스를 잡아탄다."},
    {"t":"order","q":"'나는 한 시간 걸려.'를 평서문으로 순서대로 놓으세요","words":["me","one","hour","It","takes"],"a":"It takes me one hour.","why":"함정. 우리말은 '나는'으로 시작. 영어는 It이 주어, 사람은 takes 뒤."}
  ] },
  23: { core: "have는 사진, get은 영상, take는 손. 같은 대상도 동사로 그림이 달라진다.", qs: [
    {"t":"order","ctx":"EP.23, 연습 후 거울 앞에서 삼돌이가 못난이에게","q":"삼돌이의 대사 '너는 가사를 가지고 있어.'를 평서문으로 순서대로 놓으세요","words":["words","You","have","the"],"a":"You have the words.","why":"가사는 이미 네 안에 있는 상태. 상태는 have."},
    {"t":"order","q":"'나는 일자리를 얻었어.'를 평서문으로 순서대로 놓으세요","words":["a job","got","I"],"a":"I got a job.","why":"일자리가 내게 오는 과정이라 got."},
    {"t":"order","q":"'나는 그 일자리를 받아들였어.'를 평서문으로 순서대로 놓으세요","words":["the job","took","I"],"a":"I took the job.","why":"손을 뻗어 그 일을 집어 왔다. 행동이라 took."},
    {"t":"order","q":"'나는 일자리가 있어.'를 평서문으로 순서대로 놓으세요","words":["a","job","have","I"],"a":"I have a job.","why":"지금 일자리가 있는 상태. 상태는 have."},
    {"t":"order","q":"'그녀는 버스를 타.'를 평서문으로 순서대로 놓으세요","words":["the","bus","She","takes"],"a":"She takes the bus.","why":"손 뻗는 행동이라 take. 주어가 She라 takes."},
    {"t":"order","q":"'그는 새 휴대폰을 얻었어.'를 평서문으로 순서대로 놓으세요","words":["new","phone","a","He","got"],"a":"He got a new phone.","why":"새 폰이 그에게 오는 과정이라 got."},
    {"t":"order","q":"'삼촌은 새 일자리를 받아들였어.'를 평서문으로 순서대로 놓으세요","words":["new","job","My uncle","took","a"],"a":"My uncle took a new job.","why":"함정. 우리말은 '받아들였어'가 끝. 영어는 took이 주어 바로 뒤."}
  ] },
  24: { core: "have는 이어진 상태, get은 오는 변화, take는 내가 집는 행동.", qs: [
    {"t":"order","ctx":"EP.24, 공연 전날 밤 아무도 집에 안 가고","q":"못난이의 대사 '우리 시간 있어.'를 평서문으로 순서대로 놓으세요","words":["time","We","have"],"a":"We have time.","why":"시간이 우리에게 이어져 있다. 끈으로 이은 것은 have."},
    {"t":"order","q":"'나는 배가 고파져.'를 평서문으로 순서대로 놓으세요","words":["hungry","I","get"],"a":"I get hungry.","why":"배고프지 않던 몸이 문턱을 넘는다. get + 형용사."},
    {"t":"order","q":"'나는 사진을 찍어.'를 평서문으로 순서대로 놓으세요","words":["a picture","take","I"],"a":"I take a picture.","why":"손을 뻗어 사진을 내 쪽으로 가져온다. take + 명사."},
    {"t":"order","q":"'나는 서울에 가 본 적이 있어.'를 평서문으로 순서대로 놓으세요","words":["to Seoul","been","I","have"],"a":"I have been to Seoul.","why":"지난 일이 다리를 건너 지금 내게 있다. have + 과거분사."},
    {"t":"order","q":"'우리는 쉬었어.'를 평서문으로 순서대로 놓으세요","words":["took","We","a","break"],"a":"We took a break.","why":"쉬는 시간을 손으로 집어 왔다. take의 과거 took."},
    {"t":"order","q":"'그녀는 잠을 자야 해.'를 평서문으로 순서대로 놓으세요","words":["some sleep","She","get","has to"],"a":"She has to get some sleep.","why":"짐(has to)을 메고 있고, 잠은 내게 들어와야 한다(get)."},
    {"t":"order","q":"'우리 엄마는 버스를 타야 해.'를 평서문으로 순서대로 놓으세요","words":["take","a","bus","My mom","has to"],"a":"My mom has to take a bus.","why":"함정. 우리말은 '타야 해'가 끝. 영어는 has to를 앞에 둔다."}
  ] },
  25: { core: "to는 **화살표**. 몸도 물건도 마음도 도착점으로 간다.", qs: [
    {"t":"order","ctx":"EP.25, 삼돌이가 사라진 아침, 못난이가 벌떡 일어나며","q":"못난이의 대사 '나는 그녀를 찾아야 해.'를 평서문으로 순서대로 놓으세요","words":["find","her","I","to","need"],"a":"I need to find her.","why":"찾는 일은 아직 안 했다. 마음이 먼저 to 화살표를 탔다."},
    {"t":"order","q":"'나는 자고 싶어.'를 평서문으로 순서대로 놓으세요","words":["sleep","want","to","I"],"a":"I want to sleep.","why":"마음이 '자기'로 먼저 간다. to 뒤에 아직 안 한 행동이 온다."},
    {"t":"order","q":"'그는 나에게 왔어.'를 He로 시작하는 평서문으로 순서대로 놓으세요","words":["me","to","He","came"],"a":"He came to me.","why":"몸이 움직여 to 뒤의 사람에게 도착한다. 화살촉 끝은 me."},
    {"t":"order","q":"'나는 그것을 엄마께 보낼 거야.'를 평서문으로 순서대로 놓으세요","words":["my mom","I'll","to","it","send"],"a":"I'll send it to my mom.","why":"카드가 날아가 엄마에게 도착한다. 도착점이 to 뒤에 온다."},
    {"t":"order","q":"'그녀는 공원으로 걸어가.'를 평서문으로 순서대로 놓으세요","words":["walks","the","She","park","to"],"a":"She walks to the park.","why":"몸이 화살표를 따라 공원에 도착한다. to 바로 뒤가 도착점."},
    {"t":"order","q":"'그는 나에게 인사해.'를 He로 시작하는 평서문으로 순서대로 놓으세요","words":["hello","me","says","He","to"],"a":"He says hello to me.","why":"인사말이 날아가 me에게 도착한다. 말도 화살표를 탄다."},
    {"t":"order","q":"'그녀는 너에게 말하고 싶어 해.'를 평서문으로 순서대로 놓으세요","words":["you","talk to","She","to","wants"],"a":"She wants to talk to you.","why":"함정: 우리말은 '너에게'가 먼저지만 영어는 talk to you로 to + 사람이 뒤."}
  ] },
  26: { core: "to는 아직 안 한 일로 가는 화살표, -ing는 이미 한 일 돌아보기.", qs: [
    {"t":"order","ctx":"EP.26, 옥상에서 삼돌이가 못난이에게","q":"삼돌이의 대사 '작별 인사하러 올라왔어.'를 I로 시작하는 평서문으로 순서대로 놓으세요","words":["goodbye","came up","I","say","to"],"a":"I came up to say goodbye.","why":"인사는 아직 안 했다. to가 앞으로 할 행동을 가리킨다."},
    {"t":"order","q":"'나는 그녀를 만난 게 기억나.'를 평서문으로 순서대로 놓으세요","words":["her","meeting","I","remember"],"a":"I remember meeting her.","why":"이미 만난 일이라 -ing. her를 앞에 두면 뜻이 달라진다."},
    {"t":"order","q":"'나는 그걸 잠근 게 기억나.'를 평서문으로 순서대로 놓으세요","words":["locking","remember","it","I"],"a":"I remember locking it.","why":"이미 잠근 일이라 -ing. 뒤를 돌아보는 그림이다."},
    {"t":"order","q":"'나는 그걸 잠그는 걸 잊지 않을게.'를 평서문으로 순서대로 놓으세요","words":["lock","I'll","it","to","remember"],"a":"I'll remember to lock it.","why":"잠그는 건 앞으로 할 일. to 화살표가 앞으로 간다."},
    {"t":"order","q":"'우리는 부산에 가기로 계획해.'를 평서문으로 순서대로 놓으세요","words":["visit","plan","We","Busan","to"],"a":"We plan to visit Busan.","why":"계획한 행동은 아직 안 했다. to 뒤에 동사 원래 모양."},
    {"t":"order","q":"'그는 그녀에게 전화하는 걸 잊었어.'를 평서문으로 순서대로 놓으세요","words":["call","forgot","He","her","to"],"a":"He forgot to call her.","why":"해야 할 앞일을 못 했다. forgot to + 동사가 그 그림이다."},
    {"t":"order","q":"'내 여동생은 영어를 배우고 싶어 해.'를 평서문으로 순서대로 놓으세요","words":["English","to","My","wants","sister","learn"],"a":"My sister wants to learn English.","why":"함정: 우리말은 '영어를'이 앞이지만 영어는 to learn 뒤에 English."}
  ] },
  27: { core: "for는 **마음의 방향**. 마음이 향한 사람이나 이유 앞에 온다.", qs: [
    {"t":"order","ctx":"EP.27, 복도에서 삼돌이가 민준에게","q":"삼돌이의 대사 '기다려 줘서 고마워.'를 평서문으로 순서대로 놓으세요","words":["waiting","Thanks","for"],"a":"Thanks for waiting.","why":"고마운 마음이 '기다려 준 일'을 향한다. for 뒤가 이유."},
    {"t":"order","q":"'이건 너를 위한 거야.'를 평서문으로 순서대로 놓으세요","words":["you","for","It's"],"a":"It's for you.","why":"마음이 you를 향한다. for 뒤에 향한 사람이 온다."},
    {"t":"order","q":"'그건 아빠를 위한 거야.'를 평서문으로 순서대로 놓으세요","words":["dad","my","It's","for"],"a":"It's for my dad.","why":"케이크를 받을 아빠 쪽으로 마음이 향한다."},
    {"t":"order","q":"'케이크 고마워요.'를 평서문으로 순서대로 놓으세요","words":["cake","the","Thank","for","you"],"a":"Thank you for the cake.","why":"고마운 마음이 케이크를 향한다. for 뒤가 고마운 이유."},
    {"t":"order","q":"'나는 내 동생을 기다리고 있어.'를 평서문으로 순서대로 놓으세요","words":["sister","waiting","I'm","my","for"],"a":"I'm waiting for my sister.","why":"몸은 여기 있어도 마음은 동생을 향한다. 기다림도 for."},
    {"t":"order","q":"'그 표는 그를 위한 거야.'를 평서문으로 순서대로 놓으세요","words":["him","ticket","is","The","for"],"a":"The ticket is for him.","why":"표를 받을 사람 쪽으로 마음이 향한다."},
    {"t":"order","q":"'그 케이크는 누구를 위한 거야?'를 for를 문장 끝에 두는 일상 말투의 질문으로 순서대로 놓으세요","words":["for","cake","Who","the","is"],"a":"Who is the cake for?","why":"함정: 우리말은 '누구를 위한'이지만 영어는 for가 문장 끝에 남는다."}
  ] },
  28: { core: "in은 **테두리**. 공간·때·상황, 테두리 안이면 in이다.", qs: [
    {"t":"order","ctx":"EP.28, 무대 직전 셋이 손을 포개고","q":"민준의 대사 '우리 이 일 함께 하는 거야.'를 평서문으로 순서대로 놓으세요","words":["in","this together","We're"],"a":"We're in this together.","why":"셋이 같은 테두리 안에 들어와 있다. in + 그 상황."},
    {"t":"order","q":"'그는 수업 중이야.'를 평서문으로 순서대로 놓으세요","words":["class","in","He's"],"a":"He's in class.","why":"수업이라는 테두리 안에 들어 있다."},
    {"t":"order","q":"'그건 네 가방 안에 있어.'를 평서문으로 순서대로 놓으세요","words":["bag","your","It's","in"],"a":"It's in your bag.","why":"가방이라는 눈에 보이는 테두리 안이다."},
    {"t":"order","q":"'나는 서두르는 중이야.'를 평서문으로 순서대로 놓으세요","words":["hurry","in","I'm","a"],"a":"I'm in a hurry.","why":"서두름이라는 상황 테두리 안에 들어 있다."},
    {"t":"order","q":"'파티는 저녁에 있어.'를 평서문으로 순서대로 놓으세요","words":["the evening","is","The","party","in"],"a":"The party is in the evening.","why":"저녁이라는 시간 테두리 안에 파티가 들어 있다."},
    {"t":"order","q":"'모두가 방 안에 있어.'를 평서문으로 순서대로 놓으세요","words":["room","in","the","is","Everyone"],"a":"Everyone is in the room.","why":"방이라는 테두리 안에 모두가 들어 있다."},
    {"t":"order","q":"'내 남동생은 음악에 관심이 있어.'를 평서문으로 순서대로 놓으세요","words":["music","in","brother","interested","My","is"],"a":"My brother is interested in music.","why":"함정: 우리말은 '음악에'지만 영어는 interested 뒤에 in + 음악."}
  ] },
  29: { core: "at은 **핀 하나**. 장소·시각·눈길을 딱 한 점에 꽂는다.", qs: [
    {"t":"order","ctx":"EP.29, 삐끗한 민준이 굳은 채 속으로","q":"민준의 속말 '모두가 나를 보고 있어.'를 평서문으로 순서대로 놓으세요","words":["at","looking","is","Everyone","me"],"a":"Everyone is looking at me.","why":"모든 눈길이 민준이라는 한 점에 꽂혔다. 눈길도 at."},
    {"t":"order","q":"'그는 집에 있어.'를 평서문으로 순서대로 놓으세요","words":["home","at","He's"],"a":"He's at home.","why":"집이라는 한 점에 있다. 장소를 콕 찍었다."},
    {"t":"order","q":"'나는 정문에 있어.'를 평서문으로 순서대로 놓으세요","words":["gate","the","I'm","at"],"a":"I'm at the gate.","why":"정문이라는 정확한 한 점에 핀을 꽂았다."},
    {"t":"order","q":"'나는 그 가수를 보고 있어.'를 평서문으로 순서대로 놓으세요","words":["singer","at","the","looking","I'm"],"a":"I'm looking at the singer.","why":"눈길이 가수 한 사람에게 꽂힌다. 초점 하나가 at."},
    {"t":"order","q":"'그녀는 노래를 잘해.'를 평서문으로 순서대로 놓으세요","words":["singing","at","She","good","is"],"a":"She is good at singing.","why":"잘하는 점 하나를 콕 찍는다. good at + 분야."},
    {"t":"order","q":"'우리는 버스 정류장에 있어.'를 평서문으로 순서대로 놓으세요","words":["bus stop","the","We","at","are"],"a":"We are at the bus stop.","why":"정류장이라는 정확한 한 점. 장소도 핀 하나."},
    {"t":"order","q":"'그들은 내 농담에 웃었어.'를 평서문으로 순서대로 놓으세요","words":["joke","laughed","my","at","They"],"a":"They laughed at my joke.","why":"함정: 우리말은 '농담에'라 at이 안 보이지만 영어는 laughed at."}
  ] },
  30: { core: "on은 **접촉**. 벽에도 활동에도 딱 붙어 있으면 on이다.", qs: [
    {"t":"order","ctx":"EP.30, 못난이가 눈빛을 주고받고 백업하며","q":"못난이의 대사 '나는 박자를 타고 있어.'를 평서문으로 순서대로 놓으세요","words":["beat","I'm","on","the"],"a":"I'm on the beat.","why":"박자에 딱 붙어 있다는 뜻. 활동·상태에 붙으면 on."},
    {"t":"order","q":"'그건 금요일이야.'를 평서문으로 순서대로 놓으세요","words":["Friday","on","It's"],"a":"It's on Friday.","why":"금요일이라는 날에 딱 붙어 있다."},
    {"t":"order","q":"'그건 벽에 붙어 있어.'를 평서문으로 순서대로 놓으세요","words":["wall","the","It's","on"],"a":"It's on the wall.","why":"벽에 닿아 붙어 있다. 위가 아니라 접촉이다."},
    {"t":"order","q":"'나는 다이어트 중이야.'를 평서문으로 순서대로 놓으세요","words":["diet","on","a","I'm"],"a":"I'm on a diet.","why":"다이어트라는 활동에 붙어 있다. 상태도 접촉."},
    {"t":"order","q":"'그녀는 여행 중이야.'를 평서문으로 순서대로 놓으세요","words":["trip","on","is","She","a"],"a":"She is on a trip.","why":"여행이라는 활동에 딱 붙어 있다."},
    {"t":"order","q":"'그 공연은 금요일이야.'를 평서문으로 순서대로 놓으세요","words":["Friday","show","The","on","is"],"a":"The show is on Friday.","why":"달력의 금요일에 공연이 딱 붙어 있다."},
    {"t":"order","q":"'컵은 탁자 위에 있어.'를 The cup으로 시작하는 평서문으로 순서대로 놓으세요","words":["the table","The","is","cup","on"],"a":"The cup is on the table.","why":"함정: 우리말 '탁자 위에'는 뒤에 붙지만 영어 on은 명사 앞. 닿아 있어서 on."}
  ] },
  31: { core: "of는 머릿속 관계, off는 붙은 게 떨어짐. 둘 다 '떨어져 나옴'.", qs: [
    {"t":"order","ctx":"EP.31, 삼돌이가 남는다고 밝힌 뒤 못난이가 코를 훌쩍이며","q":"못난이의 대사 '나는 네가 자랑스러워.'를 평서문으로 순서대로 놓으세요","words":["of","proud","you","I'm"],"a":"I'm proud of you.","why":"자랑스러운 마음이 you에게서 나온다. 머릿속 관계는 of."},
    {"t":"order","q":"'뚜껑이 벗겨져 있어.'를 평서문으로 순서대로 놓으세요","words":["off","lid","is","The"],"a":"The lid is off.","why":"뚜껑이 붙어 있던 자리에서 떨어져 있다. 떨어진 상태는 off."},
    {"t":"order","q":"'나는 자전거에서 떨어졌어.'를 평서문으로 순서대로 놓으세요","words":["bike","fell","my","off","I"],"a":"I fell off my bike.","why":"자전거에 붙어 있던 몸이 실제로 떨어졌다. 몸의 동작은 off."},
    {"t":"order","q":"'그건 차 한 잔이야.'를 평서문으로 순서대로 놓으세요","words":["tea","of","a","It's","cup"],"a":"It's a cup of tea.","why":"차라는 큰 것에서 나온 한 잔. 머릿속 관계라 of."},
    {"t":"order","q":"'그녀는 담에서 뛰어내렸어.'를 평서문으로 순서대로 놓으세요","words":["wall","jumped","She","off","the"],"a":"She jumped off the wall.","why":"담에 붙어 있던 몸이 떨어져 나왔다. 몸의 동작이라 off."},
    {"t":"order","q":"'그는 내 친구들 중 한 명이야.'를 평서문으로 순서대로 놓으세요","words":["mine","friend","of","He","a","is"],"a":"He is a friend of mine.","why":"'내 친구들'에서 나온 한 명. 머릿속 관계라 of."},
    {"t":"order","q":"'그녀는 우리 팀의 주장이야.'를 평서문으로 순서대로 놓으세요","words":["team","captain","of","She","the","our","is"],"a":"She is the captain of our team.","why":"함정: 우리말은 '우리 팀의 주장'이지만 영어는 the captain of our team."}
  ] },
  32: { core: "전치사는 단어가 아니라 **그림**이다. 그림만 고르면 된다.", qs: [
    {"t":"order","ctx":"EP.32, 편의점 앞 계단에서 못난이가 캔을 들고","q":"못난이의 대사 '우리는 같은 팀이야.'를 평서문으로 순서대로 놓으세요","words":["same","team","the","We're","in"],"a":"We're in the same team.","why":"같은 팀이라는 테두리 안에 있다. 테두리면 in. 그림만 고르면 된다."},
    {"t":"order","q":"'나는 수영하고 싶어.'를 평서문으로 순서대로 놓으세요","words":["swim","I","to","want"],"a":"I want to swim.","why":"'수영'이라는 앞일을 향해 가는 화살표. to 뒤에 동사가 온다."},
    {"t":"order","q":"'그건 선반 위에 있어.'를 평서문으로 순서대로 놓으세요","words":["shelf","the","on","It's"],"a":"It's on the shelf.","why":"선반에 닿아 있다. 접촉이면 on."},
    {"t":"order","q":"'이 선물은 그녀를 위한 거야.'를 평서문으로 순서대로 놓으세요","words":["her","gift","is","This","for"],"a":"This gift is for her.","why":"마음이 그녀를 향한다. 마음의 방향은 for."},
    {"t":"order","q":"'그녀는 부엌에 있어.'를 평서문으로 순서대로 놓으세요","words":["kitchen","in","She","the","is"],"a":"She is in the kitchen.","why":"부엌이라는 테두리 안에 있다. 테두리는 in."},
    {"t":"order","q":"'그녀는 체스를 잘해.'를 평서문으로 순서대로 놓으세요","words":["chess","at","good","is","She"],"a":"She is good at chess.","why":"잘하는 점 하나를 콕 찍는다. 한 점은 at."},
    {"t":"order","q":"'그녀는 버스를 기다리고 있어.'를 평서문으로 순서대로 놓으세요","words":["bus","for","waiting","the","She","is"],"a":"She is waiting for the bus.","why":"함정: 우리말은 '버스를'이라 for가 안 보이지만 영어는 waiting for."}
  ] },
  33: { core: "with는 **딱 붙어서 함께**. 사람도 도구도 몸의 모습도 붙어 있으면 with.", qs: [
    {"t":"order","ctx":"EP.33, 버스에서 튀어나온 강아지가 발목에 붙자 진이","q":"진의 대사 '쟤가 나랑 같이 왔다고?!'를 He로 시작하는 평서문 어순으로 순서대로 놓으세요","words":["me","He","with","came"],"a":"He came with me?!","why":"함께 온 강아지가 진 곁에 딱 붙었다. 같이 온 상대 앞에 with."},
    {"t":"order","q":"'나는 동생이랑 가는 중이야.'를 I'm으로 시작하는 평서문으로 순서대로 놓으세요","words":["with my brother","I'm","going"],"a":"I'm going with my brother.","why":"동생이 옆에 딱 붙어서 같이 간다. 같이 가는 사람 앞이 with."},
    {"t":"order","q":"'그녀는 머리가 긴 여자애야.'를 She's로 시작하는 평서문으로 순서대로 놓으세요","words":["with long hair","She's","the girl"],"a":"She's the girl with long hair.","why":"긴 머리가 그 애한테 딱 붙어 있다. 몸에 붙은 모습도 with."},
    {"t":"order","q":"'나는 개와 함께 산책해.'를 I로 시작하는 평서문으로 순서대로 놓으세요","words":["my dog","walk","I","with"],"a":"I walk with my dog.","why":"개가 옆에 딱 붙어 함께 걷는다. 같이 있는 상대 앞에 with."},
    {"t":"order","q":"'그녀는 빨간 펜으로 써.'를 She로 시작하는 평서문으로 순서대로 놓으세요","words":["a red pen","writes","with","She"],"a":"She writes with a red pen.","why":"펜이 손에 딱 붙어 같이 움직인다. 손에 쥔 도구 앞이 with."},
    {"t":"order","q":"'그들은 강아지랑 놀고 있어.'를 They로 시작하는 평서문으로 순서대로 놓으세요","words":["playing","the puppy","They","with","are"],"a":"They are playing with the puppy.","why":"강아지가 곁에 붙어 함께 논다. 같이 노는 상대 앞이 with."},
    {"t":"order","q":"'나는 파란 모자를 쓴 남자애를 알아.'를 I로 시작하는 평서문으로 순서대로 놓으세요","words":["the boy","with","I","a blue hat","know"],"a":"I know the boy with a blue hat.","why":"함정: 우리말은 '파란 모자를 쓴'이 앞이지만 영어는 the boy with a blue hat으로 뒤에 붙는다."}
  ] },
  34: { core: "by는 **바로 곁**. 곁의 자리·방법·만든 사람·마감 앞에 온다.", qs: [
    {"t":"order","ctx":"EP.34, 고장 난 버스 옆 길가 돌 위에 앉은 수가","q":"수의 대사 '우리는 길가에 앉아 있어.'를 We're로 시작하는 평서문으로 순서대로 놓으세요","words":["by","the road","We're","sitting"],"a":"We're sitting by the road.","why":"길 바로 곁에 앉았다. 곁에 있는 자리 앞이 by."},
    {"t":"order","q":"'나는 금요일까지 그걸 끝낼 거야.'를 I'll로 시작하는 평서문으로 순서대로 놓으세요","words":["by Friday","it","I'll finish"],"a":"I'll finish it by Friday.","why":"금요일 곁에 닿으면 끝이다. 마감 앞이 by, 일찍 끝내도 된다."},
    {"t":"order","q":"'그건 지수가 그린 거야.'를 It으로 시작하는 평서문으로 순서대로 놓으세요","words":["by Jisu","It","was painted"],"a":"It was painted by Jisu.","why":"그림 곁에 선 사람이 그린 사람이다. 만든 사람 앞이 by."},
    {"t":"order","q":"'우리는 기차로 거기 가.'를 We로 시작하는 평서문으로 순서대로 놓으세요","words":["train","We","go there","by"],"a":"We go there by train.","why":"기차가 곁에서 우리를 대신 움직여 준다. 탈것 앞이 by(방법)."},
    {"t":"order","q":"'그녀는 문 곁에 서 있어.'를 She로 시작하는 평서문으로 순서대로 놓으세요","words":["the door","stands","She","by"],"a":"She stands by the door.","why":"문 바로 곁에 선다. 곁에 있는 자리 앞이 by."},
    {"t":"order","q":"'이 노래는 내 여동생이 썼어.'를 This song으로 시작하는 평서문으로 순서대로 놓으세요","words":["by","This song","was written","my","sister"],"a":"This song was written by my sister.","why":"노래 곁에 선 사람이 쓴 사람이다. 만든 사람 앞이 by."},
    {"t":"order","q":"'나는 6시까지 집에 있을 거야.'를 I'll로 시작하는 평서문으로 순서대로 놓으세요","words":["six","by","home","I'll","be"],"a":"I'll be home by six.","why":"함정: 우리말은 '6시까지 집에'지만 영어는 be home by six, 마감이 뒤에 온다."}
  ] },
  35: { core: "from은 화살표의 **꼬리**. to가 머리라면 from은 출발한 곳.", qs: [
    {"t":"order","ctx":"EP.35, 항구 식당에서 주인이 서울 얘기를 듣고","q":"주인의 대사 '그건 여기서 멀어.'를 That's로 시작하는 평서문으로 순서대로 놓으세요","words":["from here","far","That's"],"a":"That's far from here.","why":"여기를 꼬리로 두고 멀어진다. 떨어진 기준점 앞이 from."},
    {"t":"order","q":"'나는 부산 출신이야.'를 I'm으로 시작하는 평서문으로 순서대로 놓으세요","words":["Busan","from","I'm"],"a":"I'm from Busan.","why":"부산이 화살표의 꼬리다. 출발한 곳 앞이 from."},
    {"t":"order","q":"'그건 할머니가 보낸 거야.'를 It's로 시작하는 평서문으로 순서대로 놓으세요","words":["my grandma","from","It's"],"a":"It's from my grandma.","why":"할머니 손이 꼬리다. 편지가 거기서 출발해 왔다."},
    {"t":"order","q":"'나는 학교에서 왔어.'를 I로 시작하는 평서문으로 순서대로 놓으세요","words":["came","school","I","from"],"a":"I came from school.","why":"학교가 꼬리다. 떠나온 곳 앞이 from."},
    {"t":"order","q":"'우리 삼촌은 작은 마을 출신이야.'를 My로 시작하는 평서문으로 순서대로 놓으세요","words":["a small town","My","from","uncle","is"],"a":"My uncle is from a small town.","why":"작은 마을이 꼬리다. 출신지는 출발한 곳이라 from."},
    {"t":"order","q":"'나는 이 모자를 언니한테서 받았어.'를 I로 시작하는 평서문으로 순서대로 놓으세요","words":["this hat","I","from","my sister","got"],"a":"I got this hat from my sister.","why":"언니 손이 꼬리다. 모자가 거기서 출발해 나에게 왔다."},
    {"t":"order","q":"'이 편지는 누구한테서 온 거야?'를 Who로 시작해 from이 문장 끝에 오는 질문으로 순서대로 놓으세요","words":["this","from","Who","letter","is"],"a":"Who is this letter from?","why":"함정: 우리말은 '누구한테서'가 앞이지만 영어는 from이 문장 끝에 남는다."}
  ] },
  36: { core: "about은 한 점의 **둘레**. 그래서 '대략'과 '~에 대해'가 된다.", qs: [
    {"t":"order","ctx":"EP.36, 호숫가 모닥불 앞에서 수가 제이에게","q":"수의 대사 '그 노래 뭐에 대한 거야?'를 What으로 시작해 about이 문장 끝에 오는 질문으로 순서대로 놓으세요","words":["about","is","What","that song"],"a":"What is that song about?","why":"노래 이야기가 둘레를 돈다. 주제 앞이 about이고 끝에 남는다."},
    {"t":"order","q":"'12시쯤이야.'를 It's로 시작하는 평서문으로 순서대로 놓으세요","words":["twelve o'clock","about","It's"],"a":"It's about twelve o'clock.","why":"12시 한 점이 아니라 그 둘레다. 대략은 about."},
    {"t":"order","q":"'우리는 학교에 대해 얘기했어.'를 We로 시작하는 평서문으로 순서대로 놓으세요","words":["about","We talked","school"],"a":"We talked about school.","why":"이야기가 학교 둘레를 돈다. 얘기한 주제 앞이 about."},
    {"t":"order","q":"'나는 점심을 생각하고 있어.'를 I'm으로 시작하는 평서문으로 순서대로 놓으세요","words":["lunch","thinking","about","I'm"],"a":"I'm thinking about lunch.","why":"머릿속이 점심 둘레를 맴돈다. 생각의 주제 앞도 about."},
    {"t":"order","q":"'스무 명쯤 왔어.'를 About으로 시작하는 평서문으로 순서대로 놓으세요","words":["people","twenty","came","About"],"a":"About twenty people came.","why":"스무 명 한 점이 아니라 그 둘레다. 대략은 about."},
    {"t":"order","q":"'그녀는 자기 개에 대한 책을 썼어.'를 She로 시작하는 평서문으로 순서대로 놓으세요","words":["a book","She","about","wrote","her dog"],"a":"She wrote a book about her dog.","why":"책 이야기가 개 둘레를 돈다. 주제 앞이 about."},
    {"t":"order","q":"'내 여행에 대해 너한테 말해 줄게.'를 I'll로 시작하는 평서문으로 순서대로 놓으세요","words":["my trip","you","I'll","about","tell"],"a":"I'll tell you about my trip.","why":"함정: 우리말은 '여행에 대해 너한테'지만 영어는 tell you about my trip."}
  ] },
  37: { core: "over는 위로 **넘어간다**, under는 그 **밑**. 진짜 위아래도 숫자의 선도.", qs: [
    {"t":"order","ctx":"EP.37, 언덕을 걸어 넘어와 숨이 찬 진이","q":"진의 대사 '우리는 언덕을 넘어왔어.'를 We로 시작하는 평서문으로 순서대로 놓으세요","words":["the hill","over","went","We"],"a":"We went over the hill.","why":"몸이 언덕 위를 넘어 반대편으로 갔다. 넘어가는 그림은 over."},
    {"t":"order","q":"'그건 자동차 밑에 있어.'를 It's로 시작하는 평서문으로 순서대로 놓으세요","words":["the car","under","It's"],"a":"It's under the car.","why":"고양이가 차 밑에 있다. 그 밑자리는 under."},
    {"t":"order","q":"'그걸 뛰어넘자!'를 Let's로 시작하는 문장으로 순서대로 놓으세요","words":["over","Let's jump","it"],"a":"Let's jump over it!","why":"웅덩이 위로 훌쩍 넘어간다. 넘어가는 그림은 over."},
    {"t":"order","q":"'너는 열 살이 넘어야 해.'를 You로 시작하는 평서문으로 순서대로 놓으세요","words":["over ten","You","be","must"],"a":"You must be over ten.","why":"열 살이라는 선을 넘어야 한다. 숫자의 선을 넘는 것도 over."},
    {"t":"order","q":"'그는 식탁 밑에서 자.'를 He로 시작하는 평서문으로 순서대로 놓으세요","words":["under","the table","He","sleeps"],"a":"He sleeps under the table.","why":"식탁 밑에 자리 잡았다. 그 밑은 under."},
    {"t":"order","q":"'새 한 마리가 우리 위로 날아갔어.'를 A bird로 시작하는 평서문으로 순서대로 놓으세요","words":["us","A bird","over","flew"],"a":"A bird flew over us.","why":"닿지 않고 우리 머리 위를 지나갔다. 넘어가는 그림은 over."},
    {"t":"order","q":"'침대 밑에 뭔가 있어.'를 There로 시작하는 평서문으로 순서대로 놓으세요","words":["the bed","under","There is","something"],"a":"There is something under the bed.","why":"함정: 우리말은 '침대 밑에'가 앞이지만 영어는 there is ... under the bed."}
  ] },
  38: { core: "into는 안으로 들어가는 **화살표**, out of는 밖으로 나오는 화살표.", qs: [
    {"t":"order","ctx":"EP.38, 호숫가에서 수가 카메라를 들고 제이가 뛰어드는 걸 보며","q":"수의 대사 '제이가 물속으로 뛰어들었어.'를 Jay로 시작하는 평서문으로 순서대로 놓으세요","words":["into","the water","jumped","Jay"],"a":"Jay jumped into the water.","why":"몸이 호수 경계를 넘어 안으로 들어갔다. 들어가는 화살표는 into."},
    {"t":"order","q":"'그는 방 안으로 들어왔어.'를 He로 시작하는 평서문으로 순서대로 놓으세요","words":["into","He came","the room"],"a":"He came into the room.","why":"몸이 방의 경계를 넘어 안으로 들어왔다. 들어옴은 into."},
    {"t":"order","q":"'그녀는 침대에서 나왔어.'를 She로 시작하는 평서문으로 순서대로 놓으세요","words":["out of","bed","She got"],"a":"She got out of bed.","why":"몸이 침대 경계를 넘어 밖으로 나왔다. 나옴은 out of."},
    {"t":"order","q":"'나는 수영장에 뛰어들고 있어.'를 I'm으로 시작하는 평서문으로 순서대로 놓으세요","words":["jumping","into","I'm","the pool"],"a":"I'm jumping into the pool.","why":"수영장 경계를 넘어 안으로 들어간다. 화살촉이 물속에서 멈춘다."},
    {"t":"order","q":"'그녀는 집 밖으로 뛰어나와.'를 She로 시작하는 평서문으로 순서대로 놓으세요","words":["out of","She","the house","runs"],"a":"She runs out of the house.","why":"집 경계를 넘어 밖으로 나온다. 나오는 화살표는 out of."},
    {"t":"order","q":"'그들은 차에서 내렸어.'를 They로 시작하는 평서문으로 순서대로 놓으세요","words":["the","out of","car","They","got"],"a":"They got out of the car.","why":"몸이 차라는 경계를 넘어 밖으로 나왔다. 나오는 화살표는 out of."},
    {"t":"order","q":"'얼음이 물로 변하고 있어.'를 The ice로 시작하는 평서문으로 순서대로 놓으세요","words":["into","The ice","water","is","turning"],"a":"The ice is turning into water.","why":"함정: 우리말은 '물로 변하고'라 into를 앞에 두기 쉽지만 영어는 turning into water."}
  ] },
  39: { core: "up은 **위쪽 화살표**, down은 **아래쪽 화살표**. 길·숫자·마음이 오르내린다.", qs: [
    {"t":"order","ctx":"EP.39, 타세요가 내리막을 덜컹거리며 내려올 때 수가 투덜대며","q":"수의 대사 '내 기분이 가라앉고 있어.'를 평서문으로 순서대로 놓으세요","words":["going","My mood","down","is"],"a":"My mood is going down.","why":"기분이 아래쪽 화살표를 탔다. 마음이 내려가면 down."},
    {"t":"order","q":"'사다리를 올라가.'라고 시키는 말을 평서문으로 순서대로 놓으세요","words":["the ladder","Climb","up"],"a":"Climb up the ladder.","why":"몸이 위쪽 화살표를 따라 간다. up 뒤에 올라가는 길이 온다."},
    {"t":"order","q":"'미끄럼틀을 타고 내려와.'라고 시키는 말을 평서문으로 순서대로 놓으세요","words":["down","the slide","Go"],"a":"Go down the slide.","why":"꼭대기에서 아래쪽 화살표를 탄다. 내려가는 길은 down 뒤에."},
    {"t":"order","q":"'온도가 올라가고 있어.'를 평서문으로 순서대로 놓으세요","words":["is","up","The temperature","going"],"a":"The temperature is going up.","why":"눈금이 위쪽 화살표를 탄다. 숫자가 오르면 up."},
    {"t":"order","q":"'그 엘리베이터는 내려가고 있어.'를 평서문으로 순서대로 놓으세요","words":["is","going","The elevator","down"],"a":"The elevator is going down.","why":"엘리베이터가 아래쪽 화살표를 따라간다. 내려가면 down."},
    {"t":"order","q":"'우유 값이 올라가고 있어.'를 평서문으로 순서대로 놓으세요","words":["up","of milk","The price","going","is"],"a":"The price of milk is going up.","why":"값이 위쪽 화살표를 탄다. 숫자의 오르내림도 같은 그림."},
    {"t":"order","q":"'우리 할머니는 계단을 내려가고 계셔.'를 평서문으로 순서대로 놓으세요","words":["the stairs","is","down","My grandma","going"],"a":"My grandma is going down the stairs.","why":"함정: 우리말은 '계단을 내려가'로 계단이 먼저지만 영어는 down the stairs."}
  ] },
  40: { core: "전치사는 **그림**이다. 붙고 · 곁에 서고 · 떠나고 · 돌고 · 넘고 · 드나들고 · 오르내린다.", qs: [
    {"t":"order","ctx":"EP.40, 기념품 가게 앞 벤치에서 진이 꼬마에게 노트를 보여 주며","q":"진의 대사 '이 노트는 우리에 대한 거야.'를 평서문으로 순서대로 놓으세요","words":["about","is","us","This notebook"],"a":"This notebook is about us.","why":"노트가 우리 둘레를 빙 돈다. 한 점의 둘레는 about."},
    {"t":"order","q":"'나랑 같이 춤춰.'라고 시키는 말을 평서문으로 순서대로 놓으세요","words":["me","Dance","with"],"a":"Dance with me.","why":"내게 딱 붙어서 같이 움직인다. 붙어서 함께는 with."},
    {"t":"order","q":"'창가에 앉아.'라고 시키는 말을 평서문으로 순서대로 놓으세요","words":["the window","by","Sit"],"a":"Sit by the window.","why":"창문 바로 곁에 앉는다. 바로 곁은 by."},
    {"t":"order","q":"'그건 엄마가 준 거야.'를 평서문으로 순서대로 놓으세요","words":["from","my mom","It's"],"a":"It's from my mom.","why":"엄마 손에서 출발한 선물이다. 출발한 곳은 from."},
    {"t":"order","q":"'침대 밑을 봐.'라고 시키는 말을 평서문으로 순서대로 놓으세요","words":["Look","the bed","under"],"a":"Look under the bed.","why":"떨어져서 그 밑이다. 밑은 under."},
    {"t":"order","q":"'나는 호수에 뛰어들었어.'를 평서문으로 순서대로 놓으세요","words":["the lake","jumped","I","into"],"a":"I jumped into the lake.","why":"호숫물이라는 경계 안으로 들어가는 화살표. 안으로는 into."},
    {"t":"order","q":"'그는 차에서 내리고 있어.'를 평서문으로 순서대로 놓으세요","words":["the car","out of","is","He","getting"],"a":"He is getting out of the car.","why":"함정: 우리말은 '차에서'로 차가 먼저지만 영어는 out of the car."}
  ] },
  41: { core: "through는 **터널**. 한쪽으로 들어가서 반대쪽으로 나온다. into는 들어가서 끝.", qs: [
    {"t":"order","ctx":"EP.41, 캄캄한 터널 끝에서 작은 빛이 보이고 진이","q":"진의 대사 '우리 빠져나왔어!'를 평서문으로 순서대로 놓으세요","words":["came","We","through"],"a":"We came through!","why":"들어가서 반대쪽으로 나왔다. 빠져나오는 터널이라 through."},
    {"t":"order","q":"'동굴을 지나가.'라고 시키는 말을 평서문으로 순서대로 놓으세요","words":["the cave","Go","through"],"a":"Go through the cave.","why":"입구로 들어가 반대쪽 출구로 나온다. 터널은 through."},
    {"t":"order","q":"'비가 지붕을 뚫고 들어왔어.'를 Rain으로 시작하는 평서문으로 순서대로 놓으세요","words":["came","the roof","through","Rain"],"a":"Rain came through the roof.","why":"구멍 한쪽으로 들어와 반대쪽으로 나왔다. 뚫고 지나감."},
    {"t":"order","q":"'고양이가 상자 안으로 들어갔어.'를 The cat으로 시작하는 평서문으로 순서대로 놓으세요","words":["into","The cat","the box","went"],"a":"The cat went into the box.","why":"들어가서 거기서 끝이다. 반대쪽으로 안 나오면 into."},
    {"t":"order","q":"'공이 구멍을 통과했어.'를 The ball로 시작하는 평서문으로 순서대로 놓으세요","words":["the hole","The ball","through","went"],"a":"The ball went through the hole.","why":"구멍 한쪽으로 들어가 반대쪽으로 나왔다. 통과는 through."},
    {"t":"order","q":"'우리는 숲을 지나갈 수 있어.'를 평서문으로 순서대로 놓으세요","words":["walk","the forest","can","through","We"],"a":"We can walk through the forest.","why":"숲 한쪽으로 들어가 반대쪽으로 나온다. 지나가는 길은 through."},
    {"t":"order","q":"'그 기차는 긴 터널을 지나가.'를 The train으로 시작하는 평서문으로 순서대로 놓으세요","words":["a","through","long tunnel","The train","goes"],"a":"The train goes through a long tunnel.","why":"함정: 우리말은 '터널을 지나'로 말이 뒤에 붙지만 영어는 through가 a long tunnel 앞에 온다."}
  ] },
  42: { core: "between은 **둘 사이**, among은 **여럿 속**. 이웃이 몇인지로 고른다.", qs: [
    {"t":"order","ctx":"EP.42, 사탕을 들고 돌아온 제이가 어깨를 으쓱하며","q":"제이의 대사 '나는 친구들 속에 있었어.'를 평서문으로 순서대로 놓으세요","words":["among","friends","was","I"],"a":"I was among friends.","why":"친구가 여럿이다. 여럿 속에 섞이면 among."},
    {"t":"order","q":"'아빠와 나 사이에 앉아.'라고 시키는 말을 평서문으로 순서대로 놓으세요","words":["Dad and me","between","Sit"],"a":"Sit between Dad and me.","why":"양쪽에 하나씩, 딱 둘이다. 둘 사이에 끼면 between."},
    {"t":"order","q":"'2시와 3시 사이에 와.'라고 시키는 말을 평서문으로 순서대로 놓으세요","words":["two and three","Come","between"],"a":"Come between two and three.","why":"시간의 두 끝 사이. 끼어 있는 게 둘이면 between."},
    {"t":"order","q":"'그는 아이들 속에 있어.'를 평서문으로 순서대로 놓으세요","words":["is","the kids","among","He"],"a":"He is among the kids.","why":"아이들이 여럿이다. 그 속에 섞이면 among."},
    {"t":"order","q":"'그건 두 언덕 사이에 있어.'를 평서문으로 순서대로 놓으세요","words":["hills","two","between","It's"],"a":"It's between two hills.","why":"언덕이 딱 둘이다. 둘 사이는 between."},
    {"t":"order","q":"'누가 우리 사이에 앉아 있어?'를 질문으로 순서대로 놓으세요","words":["sitting","us","Who","between","is"],"a":"Who is sitting between us?","why":"양쪽에 우리 둘이 있다. 둘 사이에 끼면 between."},
    {"t":"order","q":"'그는 두 나무 사이에 서 있어.'를 평서문으로 순서대로 놓으세요","words":["two trees","is","between","He","standing"],"a":"He is standing between two trees.","why":"함정: 우리말은 '두 나무 사이에'로 사이가 뒤에 오지만 영어는 between이 two trees 앞에 온다."}
  ] },
  43: { core: "before는 줄의 **앞**, after는 줄의 **뒤**. 시계도 숫자도 같은 줄이다.", qs: [
    {"t":"order","ctx":"EP.43, 해가 뜬 뒤 진이 노트에 줄 선 사람들을 그리며","q":"진의 대사 'before는 줄의 맨 앞이야.'를 평서문으로 순서대로 놓으세요","words":["the front","Before","of the line","is"],"a":"Before is the front of the line.","why":"줄에서 앞은 before다. 앞줄이 before, 뒷줄이 after."},
    {"t":"order","q":"'아직 9시 전이야.'를 평서문으로 순서대로 놓으세요","words":["nine","It's","before"],"a":"It's before nine.","why":"9시라는 자리보다 줄 앞이다. 아직 안 왔으면 before."},
    {"t":"order","q":"'이제 9시가 지났어.'를 평서문으로 순서대로 놓으세요","words":["after","It's","nine"],"a":"It's after nine.","why":"9시라는 자리보다 줄 뒤다. 이미 지났으면 after."},
    {"t":"order","q":"'9 다음에 뭐가 와?'를 질문으로 순서대로 놓으세요","words":["nine","comes","What","after"],"a":"What comes after nine?","why":"숫자 줄에서 9의 뒤를 묻는다. 뒤는 after."},
    {"t":"order","q":"'금요일 다음에 뭐가 와?'를 질문으로 순서대로 놓으세요","words":["Friday","after","comes","What"],"a":"What comes after Friday?","why":"달력 줄에서 금요일의 뒤를 묻는다. 뒤는 after."},
    {"t":"order","q":"'9시에서 5분 지났어.'를 평서문으로 순서대로 놓으세요","words":["nine","five","It's","minutes","after"],"a":"It's five minutes after nine.","why":"9시 자리의 뒤로 5분 섰다. 뒤는 after."},
    {"t":"order","q":"'9시가 되기 10분 전이야.'를 평서문으로 순서대로 놓으세요","words":["minutes","nine","It's","before","ten"],"a":"It's ten minutes before nine.","why":"함정: 우리말은 '9시 10분 전'으로 9시가 앞이지만 영어는 ten minutes가 앞, before nine이 뒤."}
  ] },
  44: { core: "above는 선보다 **위**, below는 선보다 **아래**. 거리는 안 따진다.", qs: [
    {"t":"order","ctx":"EP.44, 눈을 뜬 진이 떨리는 손으로 난간을 잡고","q":"진의 대사 '나는 구름 위에 있어!'를 평서문으로 순서대로 놓으세요","words":["above","I","the clouds","am"],"a":"I am above the clouds!","why":"구름이라는 선보다 높은 곳. 선보다 위는 above."},
    {"t":"order","q":"'그건 은행 위층에 있어.'를 평서문으로 순서대로 놓으세요","words":["the bank","above","It's"],"a":"It's above the bank.","why":"은행 층이라는 선보다 위다. 위 층은 above."},
    {"t":"order","q":"'그것들은 줄 아래에 있어.'를 평서문으로 순서대로 놓으세요","words":["the line","are","below","They"],"a":"They are below the line.","why":"줄이라는 선보다 낮다. 선보다 아래는 below."},
    {"t":"order","q":"'내 머리가 빨간 줄 위에 있어?'를 질문으로 순서대로 놓으세요","words":["my head","above","the red line","Is"],"a":"Is my head above the red line?","why":"빨간 줄이 기준선이다. 그 줄보다 높으면 above."},
    {"t":"order","q":"'나는 가게 위층에 살아.'를 평서문으로 순서대로 놓으세요","words":["live","the shop","I","above"],"a":"I live above the shop.","why":"가게 층이라는 선보다 위다. 위층은 above."},
    {"t":"order","q":"'우리는 구름보다 한참 아래에 있어.'를 평서문으로 순서대로 놓으세요","words":["are","far","We","the clouds","below"],"a":"We are far below the clouds.","why":"거리는 안 따진다. 멀어도 선보다 아래면 below."},
    {"t":"order","q":"'그녀는 내 아파트 바로 아래층에 살아.'를 평서문으로 순서대로 놓으세요","words":["my apartment","lives","right","She","below"],"a":"She lives right below my apartment.","why":"함정: 우리말은 '내 아파트 바로 아래'로 아래가 끝이지만 영어는 right below가 my apartment 앞."}
  ] },
  45: { core: "around는 **빙 둘러**. 가운데를 둘러싸거나 한 바퀴 돌아서 간다.", qs: [
    {"t":"order","ctx":"EP.45, 호수 산책길 갈림길에서","q":"수의 대사 '이쪽 길은 호수를 빙 돌아가.'를 평서문으로 순서대로 놓으세요","words":["around","the lake","goes","This way"],"a":"This way goes around the lake.","why":"길이 호수 둘레를 빙 돈다. 둘레를 도는 그림이 around."},
    {"t":"order","q":"'그건 모퉁이를 돌면 있어.'를 평서문으로 순서대로 놓으세요","words":["around","the corner","It's"],"a":"It's around the corner.","why":"한 번 돌아서 가야 나온다. 돌아서 가는 그림이 around."},
    {"t":"order","q":"'3시쯤이야.'를 평서문으로 순서대로 놓으세요","words":["three o'clock","It's","around"],"a":"It's around three o'clock.","why":"3시라는 점의 둘레라서 '쯤'. 시각 앞에서도 around."},
    {"t":"order","q":"'불 둘레에 앉자.'를 Let's로 시작하는 평서문으로 순서대로 놓으세요","words":["sit","the fire","Let's","around"],"a":"Let's sit around the fire.","why":"불이 가운데, 사람이 동그랗게. 둘러싸는 자리도 around."},
    {"t":"order","q":"'달은 지구를 돌아.'를 The moon으로 시작하는 평서문으로 순서대로 놓으세요","words":["goes","around","The moon","the earth"],"a":"The moon goes around the earth.","why":"달이 지구 둘레를 빙 돈다. 돌아서 가는 그림이 around."},
    {"t":"order","q":"'그녀는 목에 스카프를 두르고 있어.'를 She로 시작하는 평서문으로 순서대로 놓으세요","words":["around","She","a scarf","her neck","wears"],"a":"She wears a scarf around her neck.","why":"스카프가 목 둘레를 빙 감싼다. 둘러싸는 그림은 around."},
    {"t":"order","q":"'우리는 연못을 한 바퀴 돌았어.'를 We로 시작하는 평서문으로 순서대로 놓으세요","words":["the","pond","around","We","walked"],"a":"We walked around the pond.","why":"함정: 우리말은 '연못을 한 바퀴'로 말이 뒤에 붙지만 영어는 around가 the pond 앞에 온다."}
  ] },
  46: { core: "across는 **가로지르기**, along은 **따라가기**. 끝에서 끝이냐, 길이만큼 쭉이냐.", qs: [
    {"t":"order","ctx":"EP.46, 해안 도로를 달리는 타세요 안에서","q":"제이의 대사 '우리는 해안을 따라 달리고 있어.'를 We're로 시작하는 평서문으로 순서대로 놓으세요","words":["along","driving","the coast","We're"],"a":"We're driving along the coast.","why":"해안이 뻗은 방향 그대로 따라간다. 따라가기는 along."},
    {"t":"order","q":"'그 길은 강을 따라 이어져.'를 It으로 시작하는 평서문으로 순서대로 놓으세요","words":["goes","along","the river","It"],"a":"It goes along the river.","why":"강이 뻗은 방향 그대로 이어진다. 길이만큼 쭉은 along."},
    {"t":"order","q":"'우리는 다리를 걸어서 건너.'를 We로 시작하는 평서문으로 순서대로 놓으세요","words":["across","walk","the bridge","We"],"a":"We walk across the bridge.","why":"다리의 이쪽 끝에서 저쪽 끝으로 간다. 끝에서 끝은 across."},
    {"t":"order","q":"'그는 강을 헤엄쳐 건너.'를 He로 시작하는 평서문으로 순서대로 놓으세요","words":["swims","across","He","the river"],"a":"He swims across the river.","why":"강의 이쪽 끝에서 저쪽 끝으로 간다. 겉면 위를 건너면 across."},
    {"t":"order","q":"'나는 해변을 따라 달려.'를 I로 시작하는 평서문으로 순서대로 놓으세요","words":["along","I","the beach","run"],"a":"I run along the beach.","why":"해변이 뻗은 방향을 따라 간다. 따라가기는 along."},
    {"t":"order","q":"'강을 가로질러 다리가 하나 있어.'를 There is로 시작하는 평서문으로 순서대로 놓으세요","words":["bridge","the river","There is","across","a"],"a":"There is a bridge across the river.","why":"다리가 강의 이쪽 끝에서 저쪽 끝까지 놓여 있다. 끝에서 끝은 across."},
    {"t":"order","q":"'길을 따라 나무들이 서 있어.'를 There are로 시작하는 평서문으로 순서대로 놓으세요","words":["road","trees","There are","the","along"],"a":"There are trees along the road.","why":"함정: 우리말은 '길을 따라'가 먼저지만 영어는 There are trees 뒤에 along the road."}
  ] },
  47: { core: "behind는 **뒤쪽**, beside는 **나란한 옆**. 뒤면 behind, 나란히면 beside.", qs: [
    {"t":"order","ctx":"EP.47, 달리는 타세요 안에서 진이 수에게","q":"진의 대사 '네 옆에 앉아도 돼?'를 질문으로 순서대로 놓으세요","words":["beside","sit","I","you","Can"],"a":"Can I sit beside you?","why":"나란히 앉는 옆자리. 나란히 서는 그림은 beside."},
    {"t":"order","q":"'그녀는 나무 뒤에 있어.'를 평서문으로 순서대로 놓으세요","words":["behind","the tree","She's"],"a":"She's behind the tree.","why":"나무에 가려진 뒤쪽이다. 뒤쪽은 behind."},
    {"t":"order","q":"'그녀는 내 옆에 있어.'를 평서문으로 순서대로 놓으세요","words":["me","She's","beside"],"a":"She's beside me.","why":"나란히 서 있는 옆자리. 나란한 옆은 beside."},
    {"t":"order","q":"'그건 네 뒤에 있어.'를 평서문으로 순서대로 놓으세요","words":["you","behind","It's"],"a":"It's behind you.","why":"가려지지 않아도 네 뒤쪽이면 behind."},
    {"t":"order","q":"'네 뒤에 누가 있어?'를 질문으로 순서대로 놓으세요","words":["you","Who","behind","is"],"a":"Who is behind you?","why":"네 뒤쪽에 있는 사람을 묻는다. 뒤쪽은 behind."},
    {"t":"order","q":"'예린은 나무 뒤에 있어?'를 질문으로 순서대로 놓으세요","words":["the tree","Yerin","behind","Is"],"a":"Is Yerin behind the tree?","why":"나무에 가려졌는지 묻는다. 가려진 뒤쪽은 behind."},
    {"t":"order","q":"'나는 네 옆에 앉고 싶어.'를 I로 시작하는 평서문으로 순서대로 놓으세요","words":["beside","sit","you","want","I","to"],"a":"I want to sit beside you.","why":"함정: 우리말은 '네 옆에'가 먼저지만 영어는 sit 뒤에 beside you가 온다."}
  ] },
  48: { core: "이번 달 그림은 **길·자리·줄**. 그림부터 고르면 전치사가 따라온다.", qs: [
    {"t":"order","ctx":"EP.48, 주차장에 세운 타세요 안에서","q":"제이의 대사 '우리는 터널을 차로 통과했어.'를 We로 시작하는 평서문으로 순서대로 놓으세요","words":["through","drove","We","the tunnel"],"a":"We drove through the tunnel.","why":"터널 한쪽으로 들어가 반대쪽으로 나온다. 터널은 through."},
    {"t":"order","q":"'기온이 0도보다 아래야.'를 평서문으로 순서대로 놓으세요","words":["zero","below","It's"],"a":"It's below zero.","why":"0이라는 선보다 아래다. 선 아래는 below."},
    {"t":"order","q":"'그건 문 뒤에 있어.'를 평서문으로 순서대로 놓으세요","words":["behind","the door","It's"],"a":"It's behind the door.","why":"문에 가려진 뒤쪽이다. 뒤쪽은 behind."},
    {"t":"order","q":"'그들은 호수를 헤엄쳐 건넜어.'를 They로 시작하는 평서문으로 순서대로 놓으세요","words":["swam","across","They","the lake"],"a":"They swam across the lake.","why":"호수의 이쪽 끝에서 저쪽 끝으로 간다. 끝에서 끝은 across."},
    {"t":"order","q":"'그들은 식탁에 둘러앉았어.'를 They로 시작하는 평서문으로 순서대로 놓으세요","words":["around","They","the table","sat"],"a":"They sat around the table.","why":"식탁이 가운데, 사람이 동그랗게 앉는다. 둘러싸면 around."},
    {"t":"order","q":"'그는 책들 속에서 표를 찾았어.'를 He로 시작하는 평서문으로 순서대로 놓으세요","words":["among","the books","He","a ticket","found"],"a":"He found a ticket among the books.","why":"책 여러 권 속에 섞여 있었다. 여럿 속은 among."},
    {"t":"order","q":"'나는 저녁 먹기 전에 손을 씻어.'를 I로 시작하는 평서문으로 순서대로 놓으세요","words":["before","dinner","wash","I","my hands"],"a":"I wash my hands before dinner.","why":"함정: 우리말은 '저녁 먹기 전에'가 먼저지만 영어는 wash my hands 뒤에 before dinner."}
  ] },
  49: { core: "during은 **시간의 띠**. 일이 벌어지는 동안은 during, 길이는 for.", qs: [
    {"t":"order","ctx":"EP.49, 폭풍 속에 멈춘 타세요 안에서","q":"제이의 대사 '그 불은 가장 심한 폭풍 동안에도 꺼진 적이 없어.'를 It으로 시작하는 평서문으로 순서대로 놓으세요","words":["during","never","went out","the worst storm","It"],"a":"It never went out during the worst storm.","why":"폭풍이라는 일이 벌어지는 띠 안이다. 사건 동안은 during."},
    {"t":"order","q":"'나는 두 시간 동안 잤어.'를 I로 시작하는 평서문으로 순서대로 놓으세요","words":["two hours","for","slept","I"],"a":"I slept for two hours.","why":"두 시간은 길이다. 길이는 during이 아니라 for."},
    {"t":"order","q":"'이틀 동안 비가 왔어.'를 It으로 시작하는 평서문으로 순서대로 놓으세요","words":["two days","rained","for","It"],"a":"It rained for two days.","why":"이틀은 길이다. 길이를 말하면 for."},
    {"t":"order","q":"'수업 중에 전화가 울렸어.'를 The phone으로 시작하는 평서문으로 순서대로 놓으세요","words":["rang","the class","The phone","during"],"a":"The phone rang during the class.","why":"수업이라는 띠 안에서 생긴 일이다. 사건 동안은 during."},
    {"t":"order","q":"'나는 영화 보는 중에 잠들었어.'를 I로 시작하는 평서문으로 순서대로 놓으세요","words":["asleep","the movie","I","during","fell"],"a":"I fell asleep during the movie.","why":"영화라는 일이 벌어지는 띠 안에서 잠들었다. 그래서 during."},
    {"t":"order","q":"'우리는 폭풍 동안 집에 있었어.'를 We로 시작하는 평서문으로 순서대로 놓으세요","words":["home","stayed","the storm","We","during"],"a":"We stayed home during the storm.","why":"폭풍이라는 일이 벌어지는 띠 안이다. 사건 앞에는 during."},
    {"t":"order","q":"'폭풍 동안 뭐 했어?'를 What으로 시작하는 질문으로 순서대로 놓으세요","words":["do","the storm","What","during","you","did"],"a":"What did you do during the storm?","why":"함정: 우리말은 '폭풍 동안'이 먼저지만 영어는 What did you do 뒤에 during."}
  ] },
  50: { core: "until은 **끝 말뚝**까지 쭉, since는 **시작 말뚝**에서 지금까지 쭉.", qs: [
    {"t":"order","ctx":"EP.50, 비 오는 갓길에서 수가 손목시계를 보며","q":"수의 대사 '난 그칠 때까지 기다릴 거야.'를 I'll로 시작하는 평서문으로 순서대로 놓으세요","words":["until","it stops","wait","I'll"],"a":"I'll wait until it stops.","why":"비가 그칠 끝 말뚝까지 기다림이 쭉 이어진다. 끝까지는 until."},
    {"t":"order","q":"'우리는 6시까지 기다릴 거야.'를 We'll로 시작하는 평서문으로 순서대로 놓으세요","words":["until","six","wait","We'll"],"a":"We'll wait until six.","why":"6시라는 끝 말뚝까지 기다림이 쭉 이어진다. 끝까지 쭉은 until."},
    {"t":"order","q":"'나는 정오부터 기다려 왔어.'를 I've로 시작하는 평서문으로 순서대로 놓으세요","words":["since","noon","waited","I've"],"a":"I've waited since noon.","why":"정오 시작 말뚝에서 지금까지 이어진 줄이다. 시작부터는 since."},
    {"t":"order","q":"'그녀는 어두워질 때까지 공부했어.'를 She로 시작하는 평서문으로 순서대로 놓으세요","words":["until","She","dark","studied"],"a":"She studied until dark.","why":"어두워지는 끝 말뚝까지 공부가 이어졌다. 끝까지는 until."},
    {"t":"order","q":"'그녀는 월요일부터 계속 아파.'를 She로 시작하는 평서문으로 순서대로 놓으세요","words":["sick","since","She","Monday","has been"],"a":"She has been sick since Monday.","why":"월요일 시작 말뚝에서 지금까지 이어진다. since에는 보통 has가 같이 온다."},
    {"t":"order","q":"'우리는 2020년부터 친구야.'를 We로 시작하는 평서문으로 순서대로 놓으세요","words":["friends","We","since","have been","2020"],"a":"We have been friends since 2020.","why":"2020 시작 말뚝에서 지금까지 친구로 이어진다. since에는 보통 have가 같이 온다."},
    {"t":"order","q":"'네가 돌아올 때까지 기다릴게.'를 I will로 시작하는 평서문으로 순서대로 놓으세요","words":["until","will","wait","you","I","come back"],"a":"I will wait until you come back.","why":"함정: 우리말은 '네가 돌아올 때까지'가 먼저지만 영어는 I will wait 뒤에 until."}
  ] },
  51: { core: "without은 **빈자리**. with에서 빠져 자리가 비었다.", qs: [
    {"t":"order","ctx":"EP.51, 멈춰 선 타세요 앞에서 진이 묻는다","q":"진의 대사 '타세요 없이 우리는 어떻게 가?'를 Without으로 시작하는 질문으로 순서대로 놓으세요","words":["how","we","Taseyo","go","do","Without"],"a":"Without Taseyo, how do we go?","why":"타세요 자리가 비었다. with가 빠진 빈자리는 without."},
    {"t":"order","q":"'그녀는 친구 없이 집에 갔어.'를 She로 시작하는 평서문으로 순서대로 놓으세요","words":["without","She went home","her friend"],"a":"She went home without her friend.","why":"친구 자리가 비었다. 없는 사람 앞이 without."},
    {"t":"order","q":"'그는 개 없이 걸어.'를 He로 시작하는 평서문으로 순서대로 놓으세요","words":["his dog","without","He walks"],"a":"He walks without his dog.","why":"함께 걷던 개의 자리가 비었다. with의 반대쪽 그림."},
    {"t":"order","q":"'나는 안경 없이는 못 봐.'를 I로 시작하는 평서문으로 순서대로 놓으세요","words":["can't see","my glasses","I","without"],"a":"I can't see without my glasses.","why":"안경 자리가 비면 볼 수 없다. 물건이 빠진 빈자리도 without."},
    {"t":"order","q":"'그녀는 음악 없이는 못 자.'를 She로 시작하는 평서문으로 순서대로 놓으세요","words":["music","without","She","can't sleep"],"a":"She can't sleep without music.","why":"음악 자리가 비면 잠도 안 온다. 빠진 것이 빈자리를 만든다."},
    {"t":"order","q":"'너는 아침을 안 먹고 학교에 가면 안 돼.'를 You로 시작하는 평서문으로 순서대로 놓으세요","words":["eating","go to school","You","without","breakfast","can't"],"a":"You can't go to school without eating breakfast.","why":"빠진 게 '먹기'라는 행동이다. without 뒤 행동은 -ing."},
    {"t":"order","q":"'그는 한마디도 없이 떠났어.'를 He로 시작하는 평서문으로 순서대로 놓으세요","words":["a","saying","without","He","word","left"],"a":"He left without saying a word.","why":"함정: 우리말은 '한마디 없이 떠났다'지만 영어는 left가 먼저, without saying a word가 뒤."}
  ] },
  52: { core: "against는 **맞대고 미는 힘**. 기댐·겨룸·반대가 한 그림이다.", qs: [
    {"t":"order","ctx":"EP.52, 바닷가 절벽 도로에서 맞바람에 차가 힘겹게 달릴 때","q":"진의 대사 '바람이 우리를 맞받아 밀고 있어.'를 The로 시작하는 평서문으로 순서대로 놓으세요","words":["against","The","is","us","pushing","wind"],"a":"The wind is pushing against us.","why":"바람이 우리 쪽으로 힘을 싣고 민다. 맞대고 미는 힘은 against."},
    {"t":"order","q":"'나는 그것에 반대해.'를 평서문으로 순서대로 놓으세요","words":["against","I'm","it"],"a":"I'm against it.","why":"마음이 반대쪽에서 맞서 민다. be 동사 뒤에 against가 바로 온다."},
    {"t":"order","q":"'그는 문에 기대.'를 He로 시작하는 평서문으로 순서대로 놓으세요","words":["the door","against","He leans"],"a":"He leans against the door.","why":"몸무게를 싣고 문을 민다. 닿기만 한 on과 달리 힘이 오간다."},
    {"t":"order","q":"'모두가 그 생각에 반대해.'를 평서문으로 순서대로 놓으세요","words":["against","the idea","is","Everyone"],"a":"Everyone is against the idea.","why":"모두가 그 생각과 반대쪽에 서서 민다. 반대도 맞대고 미는 힘."},
    {"t":"order","q":"'누가 새 규칙에 반대해?'를 질문으로 순서대로 놓으세요","words":["the new rule","is","Who","against"],"a":"Who is against the new rule?","why":"규칙과 반대쪽에 선 사람이 누구냐고 묻는다. 반대 = against."},
    {"t":"order","q":"'그녀는 문에 등을 대고 눌렀어.'를 She로 시작하는 평서문으로 순서대로 놓으세요","words":["against","pressed","the door","She","her back"],"a":"She pressed her back against the door.","why":"등이 문을 맞대고 민다. 힘이 오가는 접촉은 against."},
    {"t":"order","q":"'우리는 바람을 거슬러 자전거를 탔어.'를 We로 시작하는 평서문으로 순서대로 놓으세요","words":["rode","We","against","our bikes","the wind"],"a":"We rode our bikes against the wind.","why":"함정: 우리말은 '바람을 거슬러'가 앞이지만 영어는 against the wind가 뒤."}
  ] },
  53: { core: "like는 **거울**(닮음), as는 **명찰**(맡은 역할).", qs: [
    {"t":"order","ctx":"EP.53, 공터 캠핑 의자에서 수가 진의 모습을 보고","q":"수의 대사 '그녀는 운전사처럼 보여.'를 She로 시작하는 평서문으로 순서대로 놓으세요","words":["like","a driver","looks","She"],"a":"She looks like a driver.","why":"운전사 모습이 거울에 비친다. 닮은 모습이라 like."},
    {"t":"order","q":"'그는 의사처럼 보여.'를 He로 시작하는 평서문으로 순서대로 놓으세요","words":["like","a doctor","He looks"],"a":"He looks like a doctor.","why":"의사 같은 모습이 비친다. 닮음은 거울, like."},
    {"t":"order","q":"'그녀는 간호사로 일해.'를 She로 시작하는 평서문으로 순서대로 놓으세요","words":["a nurse","She works","as"],"a":"She works as a nurse.","why":"간호사 명찰을 달고 일한다. 역할은 as."},
    {"t":"order","q":"'그들은 로봇처럼 춤춰.'를 They로 시작하는 평서문으로 순서대로 놓으세요","words":["dance","robots","like","They"],"a":"They dance like robots.","why":"진짜 로봇은 아니고 모습만 닮았다. 거울이라 like."},
    {"t":"order","q":"'그녀는 가수처럼 들려.'를 She로 시작하는 평서문으로 순서대로 놓으세요","words":["like","sounds","a singer","She"],"a":"She sounds like a singer.","why":"소리가 가수를 닮았을 뿐이다. 닮음이라 like."},
    {"t":"order","q":"'우리는 이 상자를 의자로 쓸 수 있어.'를 We로 시작하는 평서문으로 순서대로 놓으세요","words":["use","as","We can","a chair","this box"],"a":"We can use this box as a chair.","why":"상자가 의자 명찰을 달고 역할을 맡는다. 역할은 as."},
    {"t":"order","q":"'내 여동생은 새처럼 노래해.'를 My로 시작하는 평서문으로 순서대로 놓으세요","words":["like","sister","a bird","sings","My"],"a":"My sister sings like a bird.","why":"함정: 우리말은 '새처럼'이 동사 앞이지만 영어는 sings like a bird로 뒤."}
  ] },
  54: { core: "because of는 이유를 **등에 업고**, despite는 걸림돌을 **지나쳐** 간다.", qs: [
    {"t":"order","ctx":"EP.54, 폭풍이 지나간 도로에서 수가 한숨 쉬며","q":"수의 대사 '우리는 폭풍 때문에 늦었어.'를 We're로 시작하는 평서문으로 순서대로 놓으세요","words":["the","because of","storm","We're late"],"a":"We're late because of the storm.","why":"폭풍이라는 이유를 등에 업고 늦었다. 이유 = because of."},
    {"t":"order","q":"'나는 차가 막혀서 늦었어.'를 I'm으로 시작하는 평서문으로 순서대로 놓으세요","words":["because of","I'm late","the traffic"],"a":"I'm late because of the traffic.","why":"차가 막힌다는 이유를 업고 늦었다. because of 뒤에 이유가 온다."},
    {"t":"order","q":"'우리는 비가 왔는데도 경기했어.'를 We로 시작하는 평서문으로 순서대로 놓으세요","words":["despite","We played","the rain"],"a":"We played despite the rain.","why":"비라는 걸림돌을 지나쳐 그대로 했다. 걸림돌 앞은 despite."},
    {"t":"order","q":"'그녀는 선물 때문에 웃었어.'를 She로 시작하는 평서문으로 순서대로 놓으세요","words":["because of","the","She smiled","gift"],"a":"She smiled because of the gift.","why":"선물이라는 이유를 등에 업고 웃었다. 이유는 because of."},
    {"t":"order","q":"'그는 다쳤는데도 이겼어.'를 He로 시작하는 평서문으로 순서대로 놓으세요","words":["his","despite","injury","He won"],"a":"He won despite his injury.","why":"부상이라는 걸림돌을 지나쳐 이겼다. 뜻밖의 결과는 despite."},
    {"t":"order","q":"'그 버스는 눈 때문에 늦었어.'를 The로 시작하는 평서문으로 순서대로 놓으세요","words":["snow","because of","The bus was late","the"],"a":"The bus was late because of the snow.","why":"눈이라는 이유를 업고 늦었다. because of 뒤에 명사가 온다."},
    {"t":"order","q":"'폭우가 와도 그는 계속 걸었어.'를 He로 시작하는 평서문으로 순서대로 놓으세요","words":["heavy","the","He kept walking","despite","rain"],"a":"He kept walking despite the heavy rain.","why":"함정: 우리말은 '폭우가 와도'가 앞이지만 영어는 He kept walking 뒤에 despite."}
  ] },
  55: { core: "toward는 **가리키며 가는 중**, beyond는 선 **너머 저편**.", qs: [
    {"t":"order","ctx":"EP.55, 해안 언덕길에서 진이 나침반을 보며","q":"진의 대사 '우리는 빛 쪽으로 가고 있어.'를 We로 시작하는 평서문으로 순서대로 놓으세요","words":["toward","heading","We","are","the light"],"a":"We are heading toward the light.","why":"빛을 가리키며 가는 중이다. 아직 도착 전이라 toward."},
    {"t":"order","q":"'그건 저 언덕 너머에 있어.'를 평서문으로 순서대로 놓으세요","words":["beyond","It's","that hill"],"a":"It's beyond that hill.","why":"언덕이라는 선을 넘은 저편에 있다. 넘은 저편은 beyond."},
    {"t":"order","q":"'그는 문 쪽으로 달려.'를 He로 시작하는 평서문으로 순서대로 놓으세요","words":["toward","the gate","He runs"],"a":"He runs toward the gate.","why":"문 쪽을 가리키며 달리는 중이다. 닿았는지는 모른다."},
    {"t":"order","q":"'그 버스는 바다 쪽으로 가고 있어.'를 The bus로 시작하는 평서문으로 순서대로 놓으세요","words":["toward","The bus","the sea","is going"],"a":"The bus is going toward the sea.","why":"바다를 가리키며 가는 중이다. 방향이 그쪽이면 toward."},
    {"t":"order","q":"'공원은 다리 너머에 있어.'를 평서문으로 순서대로 놓으세요","words":["beyond","is","The park","the bridge"],"a":"The park is beyond the bridge.","why":"다리라는 선을 넘은 저편에 공원이 있다. 저편은 beyond."},
    {"t":"order","q":"'작은 소년이 문 쪽으로 걸어갔어.'를 A로 시작하는 평서문으로 순서대로 놓으세요","words":["door","toward","walked","the","A little boy"],"a":"A little boy walked toward the door.","why":"문을 가리키며 걸어갔다. 도착은 안 말하고 방향만 말한다."},
    {"t":"order","q":"'저 언덕 너머에 작은 마을이 있어.'를 There로 시작하는 평서문으로 순서대로 놓으세요","words":["hill","beyond","There is","a small village","that"],"a":"There is a small village beyond that hill.","why":"함정: 우리말은 '언덕 너머에'가 앞이지만 영어는 There is 먼저, beyond가 뒤."}
  ] },
  56: { core: "전치사는 외울 목록이 아니라 **그림이 모인 지도**다.", qs: [
    {"t":"order","ctx":"EP.56, 등대 앞에서 수가 지나온 길을 돌아보며","q":"수의 대사 '우리는 빛 쪽으로 걸어왔어.'를 We로 시작하는 평서문으로 순서대로 놓으세요","words":["toward","We","walked","the light"],"a":"We walked toward the light.","why":"빛을 가리키며 걸어왔다. 그쪽으로 가는 그림은 toward."},
    {"t":"order","q":"'그녀는 영화 하는 동안 잤어.'를 She로 시작하는 평서문으로 순서대로 놓으세요","words":["during","She slept","the movie"],"a":"She slept during the movie.","why":"영화라는 일이 벌어지는 띠 안이다. 사건 동안은 during."},
    {"t":"order","q":"'그는 코트 없이 떠났어.'를 He로 시작하는 평서문으로 순서대로 놓으세요","words":["his coat","without","He left"],"a":"He left without his coat.","why":"코트 자리가 비었다. with가 빠진 빈자리는 without."},
    {"t":"order","q":"'사다리가 벽에 기대 있어.'를 The로 시작하는 평서문으로 순서대로 놓으세요","words":["leans","the wall","against","The ladder"],"a":"The ladder leans against the wall.","why":"벽을 맞대고 미는 힘이다. 기댐도 against."},
    {"t":"order","q":"'눈이 와도 우리는 왔어.'를 We로 시작하는 평서문으로 순서대로 놓으세요","words":["the","despite","snow","We came"],"a":"We came despite the snow.","why":"눈이라는 걸림돌을 지나쳐 왔다. 뜻밖의 결과는 despite."},
    {"t":"order","q":"'나는 5월부터 여기 살고 있어.'를 I로 시작하는 평서문으로 순서대로 놓으세요","words":["since","I","May","lived here","have"],"a":"I have lived here since May.","why":"5월이라는 시작 말뚝에서 지금까지 쭉 이어진다. 시작은 since."},
    {"t":"order","q":"'그는 왕처럼 살아.'를 He로 시작하는 평서문으로 순서대로 놓으세요","words":["like","lives","king","He","a"],"a":"He lives like a king.","why":"함정: 우리말은 '왕처럼 살아'지만 영어는 lives 먼저, like a king이 뒤. 닮음은 거울."}
  ] },
};
