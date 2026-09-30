// 우리들의 리듬 (Our Rhythm) — 못난이와 삼돌이 초급 대본
// 렌더 규칙: [ ]는 장소, ( )는 지문, '이름: 대사'는 대사

const dramaTitle = "우리들의 리듬";
const dramaSubtitle = "Our Rhythm";

const dramaScenes = {
  1: [
    { no: "1", title: "순서", lines: [
        "[학교 복도. 댄스 동아리실 앞. 늦은 오후.]",
        "(노을빛이 창문을 넘어 길게 늘어진다. 동아리 모집 공고문 클로즈업. 신청자 '0'명. 못난이, 공고문 앞에 우두커니 서 있다. 낡은 노트를 쥔 손이 머뭇거린다.)",
        "(카메라, 노트 한 귀퉁이에 적힌 문장으로 줌인. \"I have a lot to say. But I don't know how to say it loud.\" 못난이, 공고문을 한 번 더 보다가 손을 뻗는다. 멈춘다. 다시 뻗는다.)",
        "못난이: (작은 한숨) I really like this song... (혼잣말)",
        "(복도 끝에서 묵직한 발소리. 민준이 무심하게 걸어오다 못난이의 열린 노트에 시선이 꽂힌다. 카메라, 노트에 적힌 문장 [Even in the dark, we find our rhythm]을 줌인.)",
        "민준: (발을 멈추고) Did you write this?",
        "못난이: (화들짝 노트를 가슴에 숨기며) I... I was just translating.",
        "민준: (못난이를 똑바로 보며 훅 치고 들어간다) I need you.",
        "(이때 뒤에서 딸기 우유를 마시며 오던 삼돌이, 빨대를 문 채로 멈칫한다. 못난이도 굳는다. 민준은 대답도 안 듣고 쿨하게 동아리실 문을 열고 들어간다.)"
      ] }
  ],
  2: [
    { no: "2", title: "찾아가는 쪽", lines: [
        "[학교 운동장 구석. 방과 후.]",
        "(아무도 없는 줄 알았던 공간. 이어폰을 끼고 혼자 춤추는 삼돌이. 절제된 동작인데 눈을 뗄 수가 없다. 민준, 멀찍이 서서 끝까지 본다. 음악이 끝나자 삼돌이가 뒤를 돌아본다.)",
        "삼돌이: (이어폰 빼며 무덤덤하게) How long have you been there?",
        "민준: Long enough. You dance well.",
        "삼돌이: (가방 챙기며) I dance alone. I don't do groups.",
        "민준: I know.",
        "삼돌이: Then why are you here?",
        "민준: Because you're the best I've seen.",
        "(삼돌이, 대답 없이 그냥 걸어나간다.)"
      ] }
  ],
  3: [
    { no: "3", title: "안 온다는 사람", lines: [
        "[동아리실. 다음 날. 민준과 못난이 둘뿐.]",
        "(못난이의 노트가 화이트보드 정중앙에 떡하니 붙어 있다.)",
        "못난이: (당황하며) That's mine.",
        "민준: (진지한 얼굴로) I read it. All of it.",
        "못난이: You didn't ask.",
        "민준: (마카를 집어 들며) No. But I need it.",
        "(보드에 큼지막하게 적는다. \"She. He. They.\")",
        "민준: This is our concept.",
        "못난이: (황당하지만 홀린 듯 노트를 떼어 가슴에 품으며) She's not coming?",
        "민준: She said no.",
        "못난이: Did you tell her what we're doing?",
        "민준: I told her she's the best.",
        "못난이: (조용히) That's not a reason to join. That's a reason to stay alone.",
        "(민준, 잠깐 굳는다. 못난이의 노트를 본다.)",
        "민준: Can I borrow one page?"
      ] }
  ],
  4: [
    { no: "4", title: "한 장", lines: [
        "[운동장 구석. 다음 날 아침.]",
        "(삼돌이의 사물함에 노트 한 장이 끼워져 있다. 꺼내 읽는 삼돌이. 카메라, 문장 줌인. \"Even in the dark, we find our rhythm.\" 삼돌이, 한참을 본다. 접어서 주머니에 넣는다.)",
        "(방과 후. 동아리실 문 앞. 삼돌이, 문고리를 잡았다 놨다 한다. 결국 확 열고 들어간다.)",
        "삼돌이: (가방을 툭 던지며) One week.",
        "민준: (고개도 안 들고) I know. The boy who never says yes said yes.",
        "삼돌이: (접은 종이를 흔들며 방 안을 둘러본다) The person who wrote this is here.",
        "삼돌이: (못난이에게서 눈이 멈추고) Your words?",
        "못난이: (화들짝) I... yes.",
        "삼돌이: (한 박자 있다가) The words on this page are not bad.",
        "삼돌이: (주머니에서 접은 종이를 꺼내 못난이 책상 위에 올려놓으며) ...Keep it.",
        "(못난이, 얼굴이 빨개진다. 민준의 입꼬리가 아주 살짝 올라간다.)"
      ] }
  ],
  5: [
    { no: "5", title: "나는 사랑해 너를", lines: [
        "[동아리실. 첫 합동 연습.]",
        "민준: (지휘봉 같은 펜을 들고) You dance. She writes songs. I make a plan.",
        "삼돌이: (벽에 삐딱하게 기대어) I dance alone. I don't need a team.",
        "민준: (단호하게) One week. Give it a try.",
        "삼돌이: And if I hate it?",
        "민준: You leave.",
        "(팽팽한 긴장감. 삼돌이, 민준을 뚫어지게 보다가 픽 웃는다.)",
        "삼돌이: ...One week.",
        "(카메라, 못난이의 노트로 이동. 못난이가 꾹꾹 눌러 쓴다. \"She stayed.\")"
      ] }
  ],
  6: [
    { no: "6", title: "a와 s", lines: [
        "[연습실. 늦은 저녁. 조명이 어둡다.]",
        "삼돌이: (가방을 메며 무덤덤하게) I'm leaving.",
        "민준: (음악 끄며) What?",
        "삼돌이: I transfer next month. I change schools every year.",
        "못난이: (충격받은 표정으로) You knew?",
        "삼돌이: Yes.",
        "못난이: And you didn't say anything?",
        "(삼돌이, 대답 없이 문고리를 잡는다. 덜컥, 문이 열리는 소리.)",
        "못난이: There are friends here! There is a place for you!",
        "민준: (등 뒤에 대고) This club has three members. We would have asked you to stay.",
        "(삼돌이의 어깨가 미세하게 떨린다. 멈춰 서지만, 끝내 돌아보지 않고 나간다. 닫히는 문.)"
      ] }
  ],
  7: [
    { no: "7", title: "셀 수 있는 것들", lines: [
        "[새벽 2시. 연습실.]",
        "(문틈으로 새어 나오는 불빛. 못난이가 조심스레 들어간다. 민준이 땀범벅인 채 바닥에 널브러져 있다. 주변엔 구겨진 안무 노트와 빈 캔들.)",
        "못난이: (조심스레) How long?",
        "민준: (천장만 보며) I lost count.",
        "(못난이, 바스락거리며 민준 옆에 쭈그려 앉는다.)",
        "못난이: (빈 캔들을 보며) You drank three cans of coffee.",
        "민준: (천장만 보며) I need water. I need sleep.",
        "못난이: How many days left?",
        "민준: Fourteen days. We have no time.",
        "못난이: Two isn't enough.",
        "민준: No.",
        "못난이: We need her back.",
        "민준: She chose to leave.",
        "못난이: (단호하게) She didn't choose. She decided.",
        "(민준, 고개를 돌려 못난이의 단단해진 눈빛을 본다.)"
      ] }
  ],
  8: [
    { no: "8", title: "동사에 s를 붙일 때", lines: [
        "[삼돌이 집 앞. 아침.]",
        "(급하게 달려온 듯 숨을 몰아쉬는 못난이. 초인종을 다급하게 누른다. 삐걱, 문을 연 삼돌이가 놀란다.)",
        "삼돌이: You look angry.",
        "못난이: (눈물이 고인 채 쏟아낸다) She runs. She hides. She disappears.",
        "삼돌이: (당황하며) Hey—",
        "못난이: (말 끊으며) He needs you. I need you!",
        "(삼돌이, 문을 잡은 손마디가 하얘지도록 꽉 쥔다.)",
        "못난이: She comes back. That's the ending I want.",
        "삼돌이: (한참을 못난이를 보다가, 픽 웃으며) ...She thinks about it."
      ] }
  ],
  9: [
    { no: "9", title: "뜻 없는 연결", lines: [
        "[동아리실. 다음 날 아침.]",
        "(민준과 못난이, 어색하게 스트레칭 중. '끼익' 문이 열린다. 삼돌이가 시크하게 들어와 늘 던지던 자리에 가방을 툭 던진다.)",
        "못난이: (눈이 커지며) You're here.",
        "삼돌이: (운동화 끈을 고쳐 매며) I thought about it.",
        "민준: (애써 덤덤한 척) And?",
        "삼돌이: (고개를 들며 씩 웃는다) I'm here. I am back.",
        "(못난이, 활짝 웃는다. 삼돌이는 쑥스러운 듯 헛기침하며 거울 쪽으로 고개를 돌린다.)",
        "못난이: (활짝 웃으며) We are a team again.",
        "민준: (입가에 번지는 미소를 숨기며) You are late.",
        "삼돌이: I am. But I'm ready.",
        "민준: (크게 소리친다) Music start!"
      ] }
  ],
  10: [
    { no: "10", title: "지금 이 상태", lines: [
        "[강당. 예비 리허설.]",
        "(다른 동아리들이 팔짱을 끼고 지켜본다. 음악 큐. 민준, 센터에서 화려하게 턴을 하다가 스텝이 꼬여 휘청한다. 정적. 웅성거리는 학생들.)",
        "민준: (굳어버린다)",
        "삼돌이: (음악 뚫고 크게) Keep going!",
        "민준: (패닉 상태) I messed up the timing.",
        "삼돌이: I know! Keep going!",
        "(민준, 이를 악물고 끝까지 안무를 마친다. 리허설 끝. 무대 뒤 구석에 처박힌 민준. 못난이가 다가간다.)",
        "못난이: Are you okay?",
        "민준: I am fine. (하지만 손이 떨린다)",
        "못난이: You don't look fine.",
        "민준: (무릎에 고개를 묻으며) I'm... not okay."
      ] }
  ],
  11: [
    { no: "11", title: "각자의 be", lines: [
        "[편의점 앞 계단. 해 질 녘.]",
        "(셋이 나란히 앉아 아이스크림을 먹고 있다.)",
        "못난이: We are in trouble.",
        "민준: (한숨) Yes. I am tired.",
        "삼돌이: (단호박) It is very bad.",
        "(못난이, 갑자기 벌떡 일어나 민준이 휘청거리던 우스꽝스러운 동작을 과장해서 따라 한다.)",
        "민준: (정색하며) Please, don't.",
        "(못난이, 아랑곳하지 않고 한 번 더 넘어지는 시늉을 한다. 삼돌이, 입을 틀어막고 큭큭거린다.)",
        "민준: You are laughing!",
        "삼돌이: I am not laughing. (어깨가 들썩거린다)",
        "(민준, 끝까지 폼을 잡으려다 결국 '푸핫' 하고 무너져 폭소한다. 세 사람의 웃음소리가 골목을 채운다.)",
        "삼돌이: (눈물을 훔치며) He is laughing now. We are a mess.",
        "못난이: We are okay."
      ] }
  ],
  12: [
    { no: "12", title: "지금 하고 있어", lines: [
        "[동아리실.]",
        "(민준, 화이트보드에 맹렬히 뭔가를 적고 있다. 못난이가 들어오다 자신의 노트 내용임을 깨닫고 멈춘다.)",
        "못난이: That's mine.",
        "민준: (쓰면서) I know. I'm writing your song.",
        "못난이: You're using my words. You didn't ask.",
        "(민준, 마카를 멈추고 지우개를 집어 든다.)",
        "민준: Fine. I'm erasing it.",
        "못난이: Wait.",
        "(민준, 보드를 향한 채 멈춘다.)",
        "못난이: ...Don't erase it.",
        "민준: Are you sure?",
        "못난이: (미소 지으며) I'm still deciding."
      ] }
  ],
  13: [
    { no: "13", title: "결과만 보이는", lines: [
        "[연습실.]",
        "(음악 재생 중. 삼돌이 파트에서 민준이 갑자기 치고 들어와 동선을 바꾼다.)",
        "삼돌이: (음악을 탁 끄며) The second part is different.",
        "민준: I changed it.",
        "삼돌이: Without asking?",
        "민준: It flows better. The ending is fixed now.",
        "삼돌이: My move is dropped.",
        "민준: I needed it done.",
        "(삼돌이, 뚜벅뚜벅 민준 코앞까지 걸어간다. 살벌한 기싸움.)",
        "삼돌이: The steps are planned for this stage. Everything is decided. Ask next time.",
        "민준: (기세에 눌려 헛기침하며) ...You're right.",
        "(삼돌이, 쿨하게 돌아서서 다시 음악을 튼다.)"
      ] }
  ],
  14: [
    { no: "14", title: "앞으로 일어날 일", lines: [
        "[연습실. 공연 이틀 전.]",
        "(습기로 거울이 뿌옇다. 세 사람 모두 예민함이 극에 달했다.)",
        "삼돌이: The ending is going to fail!",
        "민준: We are going to run it again!",
        "삼돌이: It is going to fail again!",
        "못난이: Guys, maybe we change—",
        "민준: (말 끊으며) No time!",
        "삼돌이: Your plan is going to break us!",
        "민준: I am going to plan it. Nobody else is going to!",
        "못난이: (비명 지르듯) Stop!",
        "(둘, 숨을 헐떡이며 못난이를 본다.)",
        "못난이: We are going to be on that stage in two days!",
        "(침묵. 에어컨 소리만 윙윙거린다.)",
        "민준: (머리를 헝클어뜨리며) We're scared. That's why we're fighting.",
        "삼돌이: (바닥을 툭툭 차며 기어들어 가는 목소리로) ...Me too.",
        "못난이: (분위기 풀려 풋 웃으며) Me three."
      ] }
  ],
  15: [
    { no: "15", title: "그때는 그랬어", lines: [
        "[연습실. 공연 하루 전.]",
        "(민준 홀로 바닥에 주저앉아 있다. 폰을 들었다 놨다 하다가 눈 딱 감고 전송. \"Can you come? I need help.\")",
        "(얼마 안 가 쾅! 문이 열리며 삼돌이가 숨을 몰아쉬며 들어온다.)",
        "삼돌이: (숨을 몰아쉬며) I was at the store. I ran here! You need help?",
        "민준: Yes. I was wrong.",
        "삼돌이: About what?",
        "민준: Everything.",
        "(이때 못난이가 \"비켜비켜!\" 하며 뛰어 들어와 넘어진다.)",
        "못난이: I was on the bus! Is everything okay?!",
        "민준: (둘을 보고 안도하며) It will be.",
        "못난이: How do you know?",
        "민준: You're both here.",
        "삼돌이: (가방을 바닥에 패대기치며 씩 웃는다) What do we fix first?",
        "민준: The ending.",
        "삼돌이: I told you.",
        "민준: You were right.",
        "삼돌이: I know. (거드름 피우며 민준 옆에 털썩 앉는다)"
      ] }
  ],
  16: [
    { no: "16", title: "모든 걸 가진", lines: [
        "[연습 끝. 동아리실. 민준과 못난이.]",
        "(조명을 하나만 켜둔 아늑한 실내. 민준이 바닥을 닦다 말고 묻는다.)",
        "민준: You are writing again. Why?",
        "못난이: What?",
        "민준: The songs. The words. Why?",
        "못난이: (걸레질을 멈추고) I have a lot to say. But I can't say it loud. I was always quiet.",
        "민준: So your songs are written down in that notebook.",
        "못난이: Yes. They are my voice.",
        "민준: Does it help?",
        "못난이: Sometimes. Someday it is going to be loud.",
        "(민준, 고개를 끄덕이며 묵묵히 다시 바닥을 닦는다. 못난이, 그런 민준의 등 뒤를 보며 왠지 모를 든든함을 느낀다.)"
      ] }
  ],
  17: [
    { no: "17", title: "나와 이어진 것", lines: [
        "[학교 옥상. 노을.]",
        "(삼돌이가 난간에 기대 밖을 보고 있다. 끼익, 문이 열리고 못난이가 온다.)",
        "못난이: Why do you always transfer?",
        "삼돌이: My mom's job. We move every year.",
        "못난이: Do you have a place you want to call home?",
        "삼돌이: No. Not now.",
        "못난이: Did you ever have one?",
        "삼돌이: (바람에 날리는 머리칼을 넘기며 씁쓸하게 웃는다) Once. I had a place. A long time ago.",
        "못난이: What happened?",
        "삼돌이: I wanted to stay, but I left anyway.",
        "못난이: Did you regret it?",
        "삼돌이: (시선을 멀리 둔 채) I still think about it. Every day since."
      ] }
  ],
  18: [
    { no: "18", title: "지금 내 손에", lines: [
        "[동아리실. 아침.]",
        "(아침 햇살. 못난이가 책상에 엎드려 자고 있다. 얼굴엔 볼펜 자국. 민준이 조심스레 들어오다 노트를 본다.)",
        "민준: (조그맣게) Have you been here all night?",
        "못난이: (부스스 깨며) Yes. I've finished it.",
        "(민준, 노트를 들고 가사를 찬찬히 읽어 내려간다. 눈빛이 흔들린다.)",
        "민준: This is it. I've never read words like these.",
        "못난이: Is it okay?",
        "민준: We've found our song. Let's use it.",
        "못난이: Have you asked 삼돌이?",
        "민준: She'll say yes.",
        "못난이: (검지손가락 흔들며) You haven't asked her yet.",
        "(민준, 못 이기겠다는 듯 픽 웃으며 고개를 끄덕인다.)"
      ] }
  ],
  19: [
    { no: "19", title: "어깨에 멘 짐", lines: [
        "[동아리실. 텅 빈 방.]",
        "(못난이, 노트에 펜슬로 적는다. \"I'm sorry. I don't belong here.\" 눈물이 툭 떨어진다. 그때 덜컥 문이 열리고 민준이 들어온다. 못난이, 황급히 노트를 덮는다.)",
        "민준: You okay?",
        "못난이: (눈물 훔치며) I have to go. I have to leave a note first.",
        "민준: Why do you have to go?",
        "못난이: I'm not a dancer. I just write words.",
        "민준: I asked for those words.",
        "못난이: You asked for the words. Not for me.",
        "(무거운 침묵. 민준이 다가와 보드에 붙은 못난이의 가사지를 톡톡 친다.)",
        "민준: You don't have to go.",
        "못난이: (작게) ...I thought I had to.",
        "민준: (미소) 'Thought.'",
        "(못난이, 노트를 가방에 쓱 밀어 넣는다.)"
      ] }
  ],
  20: [
    { no: "20", title: "재미를 가져", lines: [
        "[연습실. 오후.]",
        "(비트가 빠른 음악. 셋이 군무를 맞춘다. 삼돌이가 장난기가 발동해 예정에 없던 현란한 웨이브를 넣는다.)",
        "삼돌이: (웨이브를 넣으며) Let's have fun today!",
        "(못난이가 엉거주춤 따라 하다가 자기 발에 걸려 '꽈당' 넘어진다.)",
        "삼돌이: (화들짝) Are you okay?!",
        "못난이: (바닥에 납작 엎드린 채 엄지만 치켜든다) I'm good.",
        "민준: (뒤돌아서 어깨를 파르르 떨며 웃음을 참는다) Do you want to have a break?",
        "못난이: (벌떡 일어나) No! Let me have another try.",
        "(못난이, 다시 춤추다 또 미끄러진다.)",
        "삼돌이: (결국 배를 잡고 뒹군다) Okay, okay. Let's have a break!",
        "민준: (바닥을 치며 박장대소한다) We always have a good time with you!",
        "못난이: (얼굴 빨개져서) It's not funny!",
        "삼돌이: (숨넘어가며) It's a little funny!",
        "(셋이 바닥에 뒹굴며 웃는다. 그간의 긴장감이 완전히 녹아내린다.)"
      ] }
  ],
  21: [
    { no: "21", title: "받는 순간", lines: [
        "[연습 끝. 어둑한 복도.]",
        "(가방을 메고 가던 삼돌이가 못난이를 불러 세운다.)",
        "삼돌이: Hey.",
        "못난이: Yeah?",
        "삼돌이: The other day. My house.",
        "못난이: Oh, it's fine.",
        "삼돌이: (멈추며) No. It's not fine. I mean— (헛기침) I got what you said.",
        "못난이: What?",
        "삼돌이: Your words. \"She comes back. That's the ending I want.\"",
        "못난이: (조용히) Yeah.",
        "삼돌이: (말을 고르다가) Nobody ever... I got it. I get it now.",
        "못난이: (동그란 눈으로) You get it?",
        "삼돌이: (귀가 살짝 붉어진 채 휙 돌아서며 작게) Thank you.",
        "(못난이, 멍하니 서 있다가 이내 세상을 다 가진 듯 환하게 웃는다. 카메라, 삼돌이의 빠른 걸음을 따라가다 멈춘다.)"
      ] }
  ],
  22: [
    { no: "22", title: "직접 집어", lines: [
        "[교무실 앞 복도. 민준 혼자.]",
        "(결연한 표정의 민준, 교무실 문을 열고 들어간다. 컷 전환. 동아리실.)",
        "삼돌이: Where did you go?",
        "민준: I talked to the teacher.",
        "못난이: About what?",
        "민준: I took the late slot. For the performance.",
        "삼돌이: (눈을 치켜뜨며) You took it by yourself?",
        "민준: Yes.",
        "삼돌이: Why?",
        "민준: The early slot has more pressure. The late slot... people are warmed up. They listen better.",
        "삼돌이: (팔짱 끼며) Next time, take us with you.",
        "민준: Okay.",
        "못난이: Was it the last slot?",
        "민준: Yes.",
        "못난이: (안도하며 가슴을 쓸어내린다) Good. I hate going first."
      ] }
  ],
  23: [
    { no: "23", title: "셋의 차이", lines: [
        "[연습실. 공연 사흘 전.]",
        "(연습 후 땀에 젖어 거울 앞에 쪼르르 앉은 셋.)",
        "민준: She dances. I plan. You write.",
        "못난이: That's it?",
        "민준: That's everything.",
        "삼돌이: I have the moves. You have the words. He takes the lead.",
        "못난이: Is that enough?",
        "삼돌이: It has to be.",
        "민준: It is.",
        "(정적. 거울 속 자신들을 본다.)",
        "못난이: I write because I have things I can't say.",
        "삼돌이: I dance because I have things I can't write.",
        "민준: (둘을 번갈아 보며) I plan because I don't want to lose either of you.",
        "(삼돌이와 못난이, 놀란 듯 민준을 쳐다본다.)",
        "삼돌이: (능청스럽게) ...That's the most you've said in weeks.",
        "민준: (다시 쿨하게) Don't get used to it."
      ] }
  ],
  24: [
    { no: "24", title: "have 총정리", lines: [
        "[연습실. 공연 전날 밤.]",
        "(벽시계 바늘이 11시를 넘긴다.)",
        "민준: (짐 챙기며) You should go home and get some sleep.",
        "삼돌이: I'm fine here.",
        "민준: It's late.",
        "못난이: We have time. One more run.",
        "민준: We've done it twenty times.",
        "삼돌이: (씨익 웃으며) Twenty-one is better.",
        "(민준, 고개를 절레절레 흔들면서도 입가엔 웃음이 묻어있다.)",
        "민준: One more.",
        "(음악 온. 셋의 그림자가 거울에 완벽한 하나로 움직인다. 절도와 부드러움의 완벽한 조화. 음악이 끝나도 아무도 집에 갈 채비를 하지 않는다.)"
      ] },
    { no: "24.5", title: "잠깐", lines: [
        "[편의점. 자정 직전.]",
        "(공연 전날 밤. 긴장을 풀러 나온 셋. 삼돌이가 아이스크림을 고르다 못난이 쪽으로 하나 던진다. 못난이, 못 받고 바닥에 떨어뜨린다.)",
        "못난이: (멍하니 바닥을 보며) ...I wasn't ready.",
        "삼돌이: (어이없다는 듯) You never are.",
        "민준: (아이스크림 집어 들며 태연하게) Five-second rule.",
        "못난이: (경악하며) You're not serious.",
        "민준: (한 박자 있다가 쓰레기통에 버리며) I'm not.",
        "(삼돌이, 또 하나 꺼내 못난이한테 건넨다. 이번엔 천천히, 확실하게.)",
        "삼돌이: Take it. Ready?",
        "못난이: (두 손으로 꼭 잡으며) Ready.",
        "(민준, 둘을 보다가 혼자 계산대로 간다. 입꼬리가 올라가 있다.)"
      ] }
  ],
  25: [
    { no: "25", title: "마음이 향해", lines: [
        "[공연 당일 아침. 동아리실.]",
        "(헤어 메이크업을 하던 민준과 못난이. 시계는 계속 흘러가는데 삼돌이의 자리가 비어있다.)",
        "못난이: (초조하게 폰을 쥐고) She's not answering.",
        "민준: I'll call again.",
        "못난이: (벌떡 일어나며) I need to find her.",
        "민준: Where do you want to go?",
        "못난이: I think I know where she is.",
        "민준: How?",
        "못난이: Just a feeling. I'll bring her back to you.",
        "민준: (결연하게 고개 끄덕이며) Go to her. I'll wait here."
      ] }
  ],
  26: [
    { no: "26", title: "하려고 vs 해보니", lines: [
        "[학교 옥상.]",
        "(철문이 쾅 열린다. 난간에 기대 폰을 쥐고 있는 삼돌이. 누군가와 통화 중이다. \"Mom, about the transfer...\" 못난이의 인기척에 통화를 끊는다.)",
        "못난이: (숨 헐떡이며) I ran everywhere to find you!",
        "삼돌이: I needed air.",
        "못난이: Today is the show!",
        "삼돌이: I know.",
        "못난이: Then why are you up here?",
        "삼돌이: I came up to say goodbye.",
        "못난이: To who?",
        "삼돌이: To this place.",
        "(삼돌이, 난간 너머 운동장을 본다. 잠시 말이 없다.)",
        "삼돌이: Last time, I left without looking back. I told myself, never again. Don't look back, it doesn't hurt.",
        "못난이: (조용히) But you're looking now.",
        "삼돌이: (스스로도 놀란 듯) ...Yeah.",
        "못난이: (다가가며 정곡을 찌른다) You came up to leave. But you're still here. That means something.",
        "(삼돌이, 못난이의 말을 듣고 들고 있던 핸드폰을 주머니에 깊숙이 넣는다. 그리고 계단 쪽으로 몸을 돌린다.)"
      ] }
  ],
  27: [
    { no: "27", title: "너를 위해서", lines: [
        "[복도. 무대 두 시간 전.]",
        "(민준이 복도 끝을 서성인다. 계단을 내려오는 둘을 발견하고 안도한다.)",
        "민준: You're here.",
        "삼돌이: (씩씩하게) I'm here. Thanks for waiting.",
        "민준: (뜸 들이다가) I have something to ask.",
        "삼돌이: Ask.",
        "민준: The ending. I want to change it. For you.",
        "삼돌이: For me?",
        "민준: The last move. It should be yours. Not mine.",
        "삼돌이: We practiced it your way.",
        "민준: I know. But it works better for you.",
        "삼돌이: (민준을 빤히 보며) You're asking. Not telling.",
        "민준: Yes.",
        "삼돌이: (씨익 웃으며) ...Show me the change."
      ] }
  ],
  28: [
    { no: "28", title: "범위 안에", lines: [
        "[무대 뒤. 공연 직전.]",
        "(무대 너머 관객들의 엄청난 함성 소리. 좁은 대기실, 셋의 숨소리가 거칠다.)",
        "못난이: (입술 달달 떨며) I'm scared.",
        "삼돌이: (침 꼴깍 삼키며) Me too.",
        "민준: (손에 땀 닦으며) Me three.",
        "(정적. 못난이가 덜덜 떨리는 손을 내민다. 삼돌이가 덥석 잡는다. 민준이 그 위로 손을 포갠다. 꽉 쥔 세 손.)",
        "민준: We're in this together.",
        "삼돌이: In the same mess.",
        "못난이: In the same team.",
        "(큐 사인. 암전된 무대를 향해 셋이 발을 내디딘다.)"
      ] }
  ],
  29: [
    { no: "29", title: "정확한 그 점", lines: [
        "[무대 위. 공연 중.]",
        "(조명 폭발. 비트에 맞춘 완벽한 칼군무. 관객들 환호성. 완벽하게 흘러가던 중, 브릿지 파트. 민준이 다시 한번 10화 때와 같은 위치에서 삐끗하며 밸런스를 잃는다. 음악은 흐르는데 민준의 몸이 0.5초 굳어버린다.)",
        "민준: (입술만 움직여) Not again. I'm stuck at the same spot.",
        "(관객석에서 '어?' 하는 공기 흐름이 느껴진다. 모든 시선이 민준 한 명에게 꽂힌다.)",
        "민준: (속으로) Everyone is looking at me."
      ] },
    { no: "29.5", title: "못난이의 순간", lines: [
        "[무대 위. 공연 중. 브릿지 파트.]",
        "(민준이 삐끗하고 삼돌이가 구해내는 찰나. 관객석에서 미세한 동요가 느껴진다. 이때 못난이가 예정에 없던 앞으로 나선다. 마이크 없이, 그냥 목소리로.)",
        "못난이: (숨을 삼키며) One step. Just one.",
        "못난이: (앞으로 나서며, 작지만 또렷하게) Look at me.",
        "못난이: (관객을 향해, 떨리지만 또렷하게) Even in the dark—",
        "(관객, 조용해진다.)",
        "못난이: —we find our rhythm.",
        "(그 사이 민준과 삼돌이, 대형 재정비 완료. 비트가 다시 터진다. 관객 환호. 무대 뒤. 삼돌이가 못난이를 본다.)",
        "삼돌이: (낮게) That was yours.",
        "못난이: (숨 헐떡이며, 처음으로 당당하게) I know."
      ] }
  ],
  30: [
    { no: "30", title: "붙어서", lines: [
        "[무대 위. 같은 순간.]",
        "(민준이 멘붕에 빠지려는 찰나, 삼돌이가 짐승처럼 반 박자 빠르게 치고 들어온다. 민준의 어깨를 탁 치며 넘어가는 기지개 켜듯 유연한 프리스타일 웨이브. 원래 있던 안무처럼 완벽하게 민준의 실수를 '디자인' 해버린다.)",
        "민준: (얼어붙은 채 입술만 움직여) I lost the beat.",
        "삼돌이: (어깨를 탁 치며 옆으로 미끄러진다, 속삭이듯) Stay on the beat.",
        "민준: (입술만 움직여) I can't. I'm stuck on this step.",
        "삼돌이: (웨이브를 타며 속삭이듯) Then move your arms.",
        "민준: (작게) My arms?",
        "삼돌이: Yes. Just stay on your toes.",
        "(못난이, 눈빛 교환 후 동선 맞춰 백업. 관객들 환호성 폭발.)",
        "못난이: (백업하며 작게) I'm on the beat.",
        "삼돌이: (스쳐 지나가며 입모양으로 씹어뱉듯) Keep going, idiot.",
        "(민준, 정신이 번쩍 들며 다시 미친 듯이 박자를 타기 시작한다. 무대 완벽 마무리.)"
      ] }
  ],
  31: [
    { no: "31", title: "떨어져 나온", lines: [
        "[무대 뒤. 공연 직후.]",
        "(무대가 끝난 뒤, 백스테이지. 숨이 턱끝까지 차오른 셋.)",
        "못난이: We did it!",
        "민준: (바닥에 주저앉으며) We did.",
        "삼돌이: (벽에 기대 물을 마시다가 무심하게 던진다) I called my mom.",
        "못난이: When?",
        "삼돌이: This morning. On the roof.",
        "민준: And?",
        "삼돌이: I'm not transferring.",
        "민준: Off the transfer list?",
        "삼돌이: (씨익 웃으며) Off the list.",
        "못난이: (입을 떡 벌린다)",
        "삼돌이: She said okay. (볼을 긁적이며) I said I found something worth staying for.",
        "못난이: What is it?",
        "삼돌이: (둘을 보며) Two friends of mine.",
        "못난이: (코를 훌쩍이며) I'm proud of you."
      ] }
  ],
  32: [
    { no: "32", title: "다음 박자", lines: [
        "[편의점 앞 계단. 밤.]",
        "(가로등 불빛 아래. 각자 캔 음료로 짠! 부딪힌다.)",
        "못난이: We're in the same team.",
        "삼돌이: We are.",
        "민준: At the same school.",
        "삼돌이: For now.",
        "못난이: In the same mess.",
        "삼돌이: Always. On the same beat.",
        "못난이: So. What's next?",
        "민준: A bigger stage.",
        "삼돌이: A better ending.",
        "(못난이, 가방에서 낡은 노트를 꺼내 펼친다. 빈 페이지. 잠깐 멈추더니 꾹꾹 눌러 적기 시작한다. 카메라 줌인. \"Even in the dark, we find our rhythm.\" 그 아래 한 줄 더. \"Now I know why.\")",
        "못난이: I'll write it.",
        "삼돌이: She writes.",
        "민준: He plans.",
        "삼돌이: I dance.",
        "(셋이 동시에 빵 터져 웃는다. 밤하늘 위로 기분 좋은 비트의 음악이 페이드인 되며 올라간다. 카메라 천천히 줌아웃.)"
      ] }
  ],
  // ─── 5월 · 「할머니의 여름 목록」 (Grandma's Summer List) ───
  33: [
    { no: "33", title: "같이 갈래?", lines: [
        "[제이네 집 앞 도로. 아침.]",
        "(노란 통학버스가 앞바퀴에 벽돌을 괸 채 서 있다. 옆구리에 손글씨로 「타세요」. 진이 캐리어를 끌고 온다. 지붕 위에서 제이가 손을 흔들고, 아래에서 수가 필름카메라로 진을 벌써 찍고 있다.)",
        "제이: You're late! Come with us!",
        "진: With you? Where?",
        "수: (셔터 소리) With him. (버스를 툭 친다.)",
        "제이: Grandma Heesoon left a list. Twenty-four places. One summer.",
        "진: Him? …The bus?",
        "제이: With Taseyo. He's got a lot of personality.",
        "진: Taseyo? That's Korean. It means \"please get on.\"",
        "제이: Grandma painted it on the door. Everybody says it wrong.",
        "수: He has no brakes.",
        "제이: He has some brakes.",
        "(진이 노트를 펼쳐 「with = 같이」라고 적고, 옆에 버스와 세 사람을 손그림으로 그린다.)",
        "진: I can't drive.",
        "제이: I can! With my eyes closed.",
        "수: Please don't.",
        "(버스 문이 삐걱 열린다. 안에서 강아지 한 마리가 튀어나와 진의 발목에 붙는다.)",
        "진: He came with me?!",
        "제이: Waffle picks people. Get in. First stop: the sea."
      ] }
  ],
  34: [
    { no: "34", title: "길가에서", lines: [
        "[바닷길 초입 도로 갓길. 저녁.]",
        "(타세요가 김을 뿜으며 멈춰 있다. 보닛이 열려 있고, 제이가 연기 속에서 기침한다. 수는 도로 옆 돌 위에 앉아 있다. 진은 리스트를 들고 있다.)",
        "진: Taseyo is dead?",
        "제이: Taseyo is resting.",
        "수: We're sitting by the road. That's not resting.",
        "진: (리스트를 펼치며) Number two. \"Sit by the road and wait for a surprise.\"",
        "제이: See? It's on the list!",
        "수: The list didn't say \"by a broken bus.\"",
        "(진이 노트에 「by = 곁」이라 적는다.)",
        "진: By… near?",
        "수: Yes. Sit by me. (옆 돌을 툭 친다.)",
        "진: (앉으며) By you. OK.",
        "(멀리서 트럭 헤드라이트가 다가온다. 트럭이 서고 창문이 내려간다.)",
        "제이: A surprise! Maybe he can fix Taseyo.",
        "수: Or he can take us home by truck.",
        "제이: No way. We go to the sea by Taseyo, or not at all."
      ] }
  ],
  35: [
    { no: "35", title: "어디서 왔어?", lines: [
        "[작은 항구 마을 식당. 점심.]",
        "(창가 자리. 식당 주인 아주머니가 물잔을 내려놓으며 세 사람을 훑어본다. 수는 벌써 음식 사진을 찍고 있다.)",
        "주인: Where are you from?",
        "제이: I'm from a town two hours from here.",
        "수: Same town. We're cousins.",
        "주인: And you, sweetie?",
        "진: (수줍게) I'm from Seoul.",
        "주인: Seoul! That's far from here.",
        "진: Yes. From Seoul to here… (손가락으로 긴 화살표를 그린다.) very long.",
        "(주인이 벽에 붙은 작은 우체통을 가리킨다.)",
        "제이: Number three on the list. \"Mail a postcard from a town you've never seen.\"",
        "수: Who do we write to?",
        "진: To Grandma Heesoon. (엽서 뒷면에 버스와 세 사람과 개를 그린다.)",
        "(진이 엽서 아래에 「From Jin」이라고 쓴다.)",
        "제이: Add this: \"From all of us.\"",
        "수: And Waffle."
      ] }
  ],
  36: [
    { no: "36", title: "그 노래 뭐야?", lines: [
        "[호숫가 모닥불 앞. 밤.]",
        "(장작이 톡톡 튄다. 제이가 기타 대신 프라이팬을 두드리며 흥얼거린다. 수는 졸린 눈으로 듣고, 진은 노트에 뭔가 적는다. 와플은 모닥불 옆에 엎드려 있다.)",
        "수: What is that song about?",
        "제이: It's about a yellow bus.",
        "진: About a bus? What about the bus?",
        "제이: It's about how Taseyo never quits.",
        "수: It's about three minutes too long.",
        "진: (웃으며) About three minutes. And about a bus. Same word?",
        "수: Same word. One is a topic. One is a number.",
        "제이: (프라이팬을 쾅 치며) Number four! \"Sing a song about your ride.\" Done!",
        "진: (조용히) I want to sing about my home. Maybe tomorrow.",
        "수: (카메라를 내리며) Tell us about it now.",
        "진: It's about… a small room in Seoul. A window, and a very loud neighbor.",
        "제이: (프라이팬을 내려놓고) Then it's a good song."
      ] }
  ],
  37: [
    { no: "37", title: "별 아래", lines: [
        "[언덕 위 풀밭. 해질녘.]",
        "(타세요를 언덕 아래에 세워 두고 셋이 걸어서 언덕을 넘어왔다. 진은 숨이 차서 배낭을 내려놓는다.)",
        "제이: We did it! Over the hill!",
        "진: We went over the hill. My legs are still on the other side.",
        "수: (하늘을 올려다보며) There's nothing over us but sky.",
        "제이: Number five. \"Climb over a hill. Sleep under the stars.\"",
        "진: Under the stars. (두리번거린다.) Where is the roof?",
        "수: The sky is the roof.",
        "(제이가 담요 세 장을 깔고 눕는다. 와플이 진의 담요 속으로 파고든다.)",
        "진: Now Waffle is under my blanket.",
        "제이: Waffle is always under something.",
        "수: There are over a hundred stars tonight.",
        "진: (손가락으로 별을 세다가) Over one hundred… I lose count.",
        "제이: That's okay. Nobody is counting.",
        "진: Under the stars is a good roof."
      ] }
  ],
  38: [
    { no: "38", title: "첨벙", lines: [
        "[숲속 작은 호수. 한낮.]",
        "(물이 반짝인다. 제이가 신발을 벗어 던지고 호숫가 끝에 서 있다. 진과 수는 물가에서 발끝만 담그고 있다.)",
        "제이: Number six! \"Jump into a lake. Come out of it laughing.\"",
        "수: I'm not going into that lake. It's cold.",
        "진: (발끝만 물에 댄다.) Very cold.",
        "제이: One, two… (호수로 첨벙 뛰어든다.)",
        "수: (셔터를 누르며) Jay jumped into the water.",
        "(제이가 물 밖으로 뛰쳐나온다. 입술이 파랗다.)",
        "제이: Cold! I'm out of the water! I'm laughing!",
        "진: You're shaking, not laughing.",
        "(그 사이 와플이 진의 신발 한 짝을 물고 호수로 뛰어든다.)",
        "진: Waffle! He ran into the lake with my shoe!",
        "제이: Waffle, come out of there!",
        "(와플이 물 밖으로 나온다. 신발은 호수 한가운데 둥둥 떠 있다.)",
        "진: The shoe is still in the water. (한숨) OK. I go into the lake."
      ] }
  ],
  39: [
    { no: "39", title: "오르고 내리고", lines: [
        "[산길 오르막. 오후.]",
        "(타세요가 낑낑거리며 올라간다. 계기판 온도 바늘이 위로 올라간다. 제이가 핸들을 쥐고 이를 악문다. 수와 진은 뒷자리에서 손잡이를 잡고 있다.)",
        "제이: Come on, Taseyo. Up, up, up.",
        "진: Taseyo is going up very slowly.",
        "수: The temperature is going up faster.",
        "제이: Don't look at that. Look up the road.",
        "(꼭대기에 도착하자 눈앞에 끝없는 내리막길이 펼쳐진다.)",
        "진: Now… down?",
        "수: Jay, what about the brakes?",
        "제이: Taseyo has some brakes. (브레이크를 밟자 삑삑 소리가 난다.) Fewer brakes.",
        "진: (눈을 감고 노트를 끌어안는다.) Down, down, down!",
        "수: The engine is going down. My stomach is going down. My mood is going down.",
        "(타세요가 내리막 끝에서 덜컹 멈춘다. 침묵. 와플이 하품한다.)",
        "제이: Number seven. \"Go up a mountain. Come down slowly.\"",
        "수: Slowly? We came down very fast.",
        "진: (눈을 뜨며) But we are alive. Up is up. Down is down."
      ] }
  ],
  40: [
    { no: "40", title: "도장 여덟 개", lines: [
        "[기념품 가게 앞 벤치. 아침.]",
        "(벽에 큰 지도가 붙어 있다. 수가 리스트에 도장을 쾅 찍는다. 도장이 벌써 일곱 개다. 가게 꼬마가 진의 노트를 빼꼼 들여다본다.)",
        "꼬마: What are you drawing?",
        "진: Pictures. One picture for each little word.",
        "꼬마: What's this one?",
        "진: That's \"with.\" Jay with Su with me with Waffle. All on one bus.",
        "꼬마: And this one?",
        "진: \"By.\" Sit by the road. Near, near, near.",
        "꼬마: What's this arrow?",
        "진: \"From.\" The tail of the arrow. I'm from Seoul.",
        "제이: And \"into\" and \"out of\"! I jumped into the lake. Then out of the lake.",
        "수: And \"over\" and \"under.\" Over the hill, under the stars.",
        "진: (마지막 장을 넘기며) \"Up\" and \"down.\" Taseyo went up a mountain and down a mountain.",
        "꼬마: Is there a picture for \"about\"?",
        "진: (웃는다.) This notebook is about us.",
        "(수가 여덟 번째 도장을 지도 위에 꾹 누른다. 점들이 이어져 하나의 긴 선이 된다.)"
      ] }
  ],

  // ─── 6월 ───
  // ─── 6월 · 「할머니의 여름 목록」 (Grandma's Summer List) ───
  41: [
    { no: "41", title: "긴 터널", lines: [
        "[산속 긴 터널 앞. 저녁.]",
        "(어두운 터널 입구가 커다란 입처럼 열려 있다. 타세요의 전조등 한쪽이 깜빡인다.)",
        "제이: Number nine. \"Drive through a tunnel with the windows down.\"",
        "수: With the windows down. In a tunnel. Great.",
        "진: How long is it?",
        "제이: Two miles. We go in this side and come out the other side.",
        "진: (노트에 터널과 화살표를 그리며) Into is only in. Through is in and out.",
        "제이: Exactly! (창문을 모두 내린다.) Ready?",
        "(타세요가 터널 안으로 들어간다. 갑자기 전조등이 꺼지고 엔진이 멈춘다. 완전한 암흑.)",
        "진: Jay?!",
        "제이: It's fine. We're just in the middle of \"through.\"",
        "수: (어둠 속에서 아주 작게 노래한다.) \"Taseyo, Taseyo, take us through…\"",
        "제이: Su, you're singing.",
        "수: Don't tell anyone.",
        "(엔진이 덜덜 다시 켜진다. 저 멀리 작은 빛. 타세요가 터널 밖으로 빠져나온다.)",
        "진: We came through!",
        "제이: Through the tunnel! Through the dark!"
      ] }
  ],
  42: [
    { no: "42", title: "산과 산 사이", lines: [
        "[두 산 사이의 작은 마을 축제. 한낮.]",
        "(무지개색 깃발과 노점들. 골목마다 사람이 가득하다. 진이 지도를 펼친다. 제이는 벌써 사람들 속으로 사라졌다.)",
        "수: This town is between two mountains. Look.",
        "진: Between two. Only two. (노트에 두 산 사이의 마을을 그린다.)",
        "(진이 고개를 들자 제이가 없다.)",
        "진: Where is Jay?",
        "수: Somewhere among these people.",
        "진: Among… many people. Between is two. Among is many.",
        "수: You learn fast.",
        "진: (인파를 훑으며) I can't see him. He's among too many people.",
        "수: Look for the yellow hat.",
        "(저 멀리 노란 모자가 솟아 있다. 제이가 사탕 노점 앞에서 아이들 사이에 끼어 있다.)",
        "수: There. He's between two kids, holding a giant candy.",
        "제이: (사탕을 들고 돌아오며) Number ten! \"Find a town between two mountains.\" Found it! Also found candy.",
        "진: Jay. You were lost among the people.",
        "제이: I wasn't lost. I was among friends."
      ] }
  ],
  43: [
    { no: "43", title: "해 뜨기 전", lines: [
        "[언덕 위 캠핑장. 새벽 네 시 반.]",
        "(하늘이 아직 어둡다. 수가 제이와 진을 흔들어 깨운다. 제이는 침낭 속에서 꿈틀거린다.)",
        "수: Wake up. The sun comes up in twenty minutes.",
        "제이: Before the sun? It's before breakfast, too.",
        "진: (하품하며) Before breakfast is too early.",
        "수: Number eleven. \"See the sun rise before breakfast.\"",
        "제이: And after breakfast?",
        "수: After breakfast, you can sleep all day.",
        "(동쪽 하늘이 붉어진다. 수가 카메라를 든다. 세 사람이 조용해진다.)",
        "수: (속삭이며) Before the photo, be quiet. After the photo, you can talk.",
        "(찰칵. 해가 올라온다. 제이가 벌떡 일어난다.)",
        "제이: After that, I'm hungry!",
        "진: After sunrise, breakfast. Before sunrise, sleep. (노트에 줄 선 사람들을 그린다.) Before is the front of the line. After is the back.",
        "수: You just wrote the whole day."
      ] }
  ],
  44: [
    { no: "44", title: "구름 위로", lines: [
        "[절벽 전망대. 이른 오후.]",
        "(난간 너머로 구름이 발밑에 깔려 있다. 진은 벽에 붙어 서서 난간을 잡고 있다. 수는 카메라를 들고 앞으로 나간다.)",
        "제이: Number twelve. \"Stand above the clouds.\"",
        "수: The clouds are below us. Look at that.",
        "진: (눈을 꼭 감고) I can't. I'm not good with high places.",
        "제이: Don't look far. Look at the line between the sky and the clouds.",
        "진: (실눈을 뜨며) Above the line, blue. Below the line, white.",
        "제이: Right! And what's below the clouds?",
        "진: A town. A very small town. (조금 웃는다.)",
        "수: We're above the clouds, and the town is below them.",
        "진: Everything is below me except the sky.",
        "(진이 눈을 뜬다. 노트에 가로선 하나를 긋고, 위에 세 사람, 아래에 마을을 그린다.)",
        "진: Above the line, us. Below the line, everything else.",
        "(수가 셔터를 누른다. 진의 손이 아직 떨린다.)",
        "진: I am above the clouds!"
      ] }
  ],
  45: [
    { no: "45", title: "빙글빙글", lines: [
        "[호수 둘레 산책길. 늦은 오후.]",
        "(안내판: 「호수 한 바퀴 3km」. 세 사람이 걷는다. 진은 지도를 거꾸로 들고 있다.)",
        "제이: Number thirteen. \"Walk around a lake.\"",
        "수: Around, not across. Around the edge.",
        "진: (손가락으로 원을 그리며) One circle around the lake.",
        "(숲 사이 갈림길. 제이는 오른쪽, 수는 왼쪽으로 간다.)",
        "수: This way goes around the lake.",
        "제이: That way goes around the hill.",
        "진: Everything goes around. (지도를 돌려 본다.)",
        "(한 시간 뒤. 같은 벤치 앞. 세 사람이 지친 얼굴로 멈춘다.)",
        "수: This bench again.",
        "제이: We walked around the lake three times. I think that's a record.",
        "수: (사진을 찍으며) Or we're lost.",
        "제이: We're not lost. We're going around.",
        "(진이 노트에 큰 원을 그리고 그 안에 세 사람 얼굴을 그린다.)",
        "진: Tonight, let's sit around a fire, not around a lake."
      ] }
  ],
  46: [
    { no: "46", title: "다리를 건너", lines: [
        "[해안 절벽 위 긴 다리 입구. 새벽.]",
        "(안개 속으로 하얀 다리가 끝없이 뻗어 있다. 표지판: 「1.4 MILES」.)",
        "제이: Number fourteen. \"Cross a long bridge. Follow the coast road.\"",
        "진: Cross? Across?",
        "수: Across means from this side to that side.",
        "진: (다리 위로 손을 왼쪽에서 오른쪽까지 긋는다.) Across the bridge, side to side.",
        "(타세요가 다리를 건넌다. 아래에서 파도 소리가 올라온다. 진은 창문에 붙어 바다를 본다.)",
        "제이: We drive across the bridge. Then along the coast for an hour.",
        "진: Along is not across?",
        "수: Right. Across goes side to side. Along follows the long line.",
        "(다리를 건넌 뒤 바닷가 도로. 창밖으로 바다가 길게 이어진다.)",
        "진: (창문에 손을 대고) Along the sea. Very long.",
        "제이: We're driving along the coast, and we're singing.",
        "수: We're not singing.",
        "제이: (노래를 시작한다.) \"Along the coast, across the bridge…\"",
        "수: Someone stop him.",
        "진: (웃으며) Along the road, Jay sings and Su suffers."
      ] }
  ],
  47: [
    { no: "47", title: "뒷자리와 옆자리", lines: [
        "[달리는 타세요 안. 해질 무렵.]",
        "(수가 맨 뒷자리에 혼자 앉아 창밖을 본다. 진은 앞자리에서 자꾸 돌아본다. 제이는 룸미러로 수를 힐끔 본다.)",
        "진: (작게) Su sits behind us all day. Alone.",
        "제이: She's been like that since the cliff. Something is wrong.",
        "진: Can I sit beside her?",
        "제이: Try. Carefully.",
        "(진이 흔들리는 버스 안을 걸어 수 옆자리로 간다.)",
        "진: Can I sit beside you?",
        "수: (어깨를 으쓱) It's a free seat.",
        "진: (앉으며) You were behind us, so I couldn't see you. Beside you, I can see.",
        "수: (카메라를 만지작거리며) The contest is in three weeks. My photos are bad. All of them.",
        "진: (노트를 펼쳐 수 앞에 놓는다.) Look. My drawings are also bad. But I put them beside each other.",
        "수: (조금 웃는다.) Beside each other?",
        "진: Your photos and my drawings. Side by side.",
        "(와플이 두 사람 사이로 비집고 들어온다.)",
        "수: Fine. Sit beside me.",
        "제이: (앞에서) I'm behind the wheel. But I'm with you."
      ] }
  ],
  48: [
    { no: "48", title: "필름 한 통", lines: [
        "[주차장에 세운 타세요 안. 아침.]",
        "(수가 가방을 통째로 뒤집는다. 필름 통이 굴러다니지만 한 통이 없다.)",
        "수: It's gone. The roll from the cliff.",
        "제이: Which one?",
        "수: The one from above the clouds. The only good one.",
        "진: Did you take it out of the camera?",
        "수: I put it… somewhere. (패닉)",
        "제이: Think. We drove through the tunnel. Across the bridge. Along the coast.",
        "진: Between two mountains. Around the lake.",
        "수: Stop listing our trip!",
        "(진이 노트를 펼쳐 그림들을 훑는다.)",
        "진: Wait. Before the cliff, you had it. After the cliff, you sat behind us.",
        "수: …I sat behind you.",
        "제이: (뒷좌석 등받이를 들추며) Behind the last seat!",
        "(정말로 맨 뒷좌석 뒤에 작은 통이 끼어 있다. 와플이 그 옆에서 자고 있다. 수가 통을 꺼내 가슴에 안는다.)",
        "수: Beside Waffle's bed. The whole time.",
        "진: He guarded it.",
        "수: (목이 잠긴다.) Thank you. Both of you."
      ] }
  ],
  // ─── 7월 ───
  // ─── 7월 · 「할머니의 여름 목록」 (Grandma's Summer List) ───
  49: [
    { no: "49", title: "폭풍 속에서", lines: [
        "[폭풍우 속에 멈춘 타세요 안. 밤.]",
        "(창밖에서 번개가 친다. 빗소리가 지붕을 두드린다. 전등이 나가고, 컵 안에서 촛불 하나가 흔들린다.)",
        "진: Is it always this loud?",
        "제이: It's just rain. During a storm, everything sounds big.",
        "수: During the storm, we can't drive. We can't sleep.",
        "진: (번개가 칠 때) During the lightning, I can see the road.",
        "제이: Number seventeen. \"Stay up during a storm.\" Done. Everything on this list is a bad idea.",
        "수: We waited for two hours during the storm. Two hours!",
        "진: \"For\" is how long. \"During\" is what happens. (노트에 적는다.)",
        "수: (손전등 아래에서) During every storm, Grandma told us the same story.",
        "진: What story?",
        "제이: About a lighthouse. It never went out during the worst storm.",
        "(번개가 번쩍이는 순간 진의 얼굴이 환해진다. 와플이 진의 무릎에서 낑낑댄다.)",
        "진: During the story, Waffle is calm. During the thunder, he is not.",
        "제이: (촛불 쪽으로 몸을 기울이며) Want to hear it?"
      ] }
  ],
  50: [
    { no: "50", title: "비 그칠 때까지", lines: [
        "[여전히 비 내리는 갓길. 아침.]",
        "(빗줄기가 가늘어졌지만 아직 그치지 않았다. 수가 손목시계를 보고, 진은 휴대폰 신호를 찾는다.)",
        "진: No signal. There's been no message from Grandma Heesoon since yesterday morning.",
        "제이: She calls every day.",
        "수: She's fine. Grandma is always fine.",
        "제이: (불안을 감추며) We wait here until the rain stops.",
        "진: Until when?",
        "제이: Until it stops.",
        "수: I've been counting the drops since we woke up.",
        "진: How many?",
        "수: A lot. I'll wait until it stops. Then I'll shoot the puddles.",
        "(진이 노트에 굵은 말뚝 두 개를 그린다. 왼쪽은 「since」, 오른쪽은 「until」, 그 사이에 긴 줄.)",
        "진: Since is the start. Until is the end. The line between is long.",
        "제이: Since yesterday morning. That's a long line.",
        "(휴대폰이 갑자기 진동한다. 셋이 동시에 쳐다본다.)",
        "희순: (전화, 잡음 섞인 목소리) …Did you eat?",
        "제이: (웃음이 터진다.) Grandma! We didn't eat. We waited until you called."
      ] }
  ],
  51: [
    { no: "51", title: "타세요 없이", lines: [
        "[산길 한복판. 오전.]",
        "(타세요가 연기를 내며 완전히 멈춰 있다. 아무도 말이 없다. 와플이 타세요의 바퀴 옆에 앉는다.)",
        "제이: (열쇠를 돌리며) Taseyo? Taseyo, please.",
        "수: He's dead. Really dead this time.",
        "진: Without Taseyo, how do we go?",
        "제이: We can't go anywhere without Taseyo!",
        "수: We can walk. It's just a mountain. Without a map. Without a signal.",
        "진: (노트에 「with」 그림을 그린 뒤 한 사람을 지운다.) Without is with, but someone is gone.",
        "제이: (버스를 토닥이며) With Taseyo, it's a trip. Without Taseyo, it's a hike.",
        "수: A hike without a map. That's a bad hike.",
        "진: Number nineteen. \"Go a day without a phone.\"",
        "수: The list is doing this on purpose.",
        "(제이가 웃으며 배낭을 멘다.)",
        "제이: OK. We walk. I can't sing without Taseyo, but I'll sing anyway.",
        "수: Please don't."
      ] }
  ],
  52: [
    { no: "52", title: "바람을 거슬러", lines: [
        "[바닷가 절벽 도로. 오후.]",
        "(어제 마을 정비소에서 고친 타세요가 맞바람에 밀리며 힘겹게 달린다. 앞유리가 바람에 웅웅 운다.)",
        "제이: We're driving against the wind. Taseyo is working so hard.",
        "진: The wind is pushing against us.",
        "(진이 지도를 흔든다.)",
        "진: I'm against driving today. A storm is coming.",
        "제이: I'm against stopping. We're so close.",
        "수: (뒷자리에서) Honestly, I'm against both of you.",
        "진: Why against us?",
        "수: Because you're both right.",
        "(돌풍이 타세요의 옆구리를 때린다. 차가 휘청한다.)",
        "제이: (핸들을 꽉 쥐고) Fine. Fine! We stop.",
        "진: Thank you.",
        "(타세요가 절벽 옆 공터에 선다. 셋이 내려 바람 속에서 타세요에 등을 기댄다.)",
        "수: Lean against Taseyo. He's the only wall here.",
        "진: (제이의 어깨에 기대며) Against Jay is also okay.",
        "제이: Against the wind, against the plan… we're always against something."
      ] }
  ],
  53: [
    { no: "53", title: "너처럼", lines: [
        "[공터에 세운 타세요 옆. 저녁. 하늘이 무겁다.]",
        "(캠핑 의자 셋. 수와 제이가 서로를 흉내 내며 웃는다. 진은 노트를 무릎에 놓고 그림을 그리다 웃음을 터뜨린다.)",
        "수: (팔을 휘저으며) I can sing like a bird!",
        "제이: That's not like a bird. That's like a cat in the rain.",
        "진: (받아 적는다.) Like a cat. But Su is not a cat.",
        "수: I'm not a cat.",
        "제이: You sing like one, though.",
        "진: And \"as\"?",
        "제이: \"As\" is real. I work as a driver. Su works as a photographer.",
        "진: (노트에 거울 그림과 명찰 그림을 그린다.) Like is a mirror. As is a name tag.",
        "수: Jay drives like a pilot who hates roads.",
        "제이: Hey!",
        "진: Can I be the driver for one minute? I mean, work as the driver.",
        "제이: You can't drive.",
        "진: (핸들을 쥐는 시늉) Then I'll act like a driver.",
        "수: She looks like a driver. She's not a driver.",
        "제이: (열쇠를 건넨다.) OK. As Captain Jin, you may move Taseyo one meter."
      ] }
  ],
  54: [
    { no: "54", title: "그래도 간다", lines: [
        "[폭풍이 지나간 도로. 이른 아침.]",
        "(도로에 물이 고여 있다. 표지판이 쓰러져 있다. 제이가 지도를 다시 접는다. 수는 우비를 뒤집어쓴다.)",
        "수: We're late because of the storm.",
        "진: Because of the storm, we lost three days.",
        "제이: Because of me, we lost half a day. I took the wrong road.",
        "수: (한숨) Because of Jay and because of the storm, we're behind.",
        "진: (일어나며) Despite the storm, we are here.",
        "제이: Despite the rain, we're still driving!",
        "진: Despite the wrong road, we saw a beautiful waterfall.",
        "수: (마지못해) Despite everything, Taseyo is running.",
        "진: (노트에 물웅덩이를 그린다.) Because of: I carry the reason on my back. Despite: I step past the stone.",
        "수: Because of Taseyo, we're here.",
        "진: Despite Taseyo, we're here.",
        "제이: Both are true!"
      ] }
  ],
  55: [
    { no: "55", title: "빛을 향해", lines: [
        "[해안 언덕길. 해질 녘.]",
        "(길 끝이 언덕에 가려 있다. 언덕 너머에서 흰 빛이 커졌다 작아졌다 한다.)",
        "제이: That light. It's beyond the hill.",
        "수: The lighthouse. It has to be.",
        "진: (나침반을 꺼내며) The needle points toward the light.",
        "제이: We drive toward it. Not to it yet. Toward.",
        "수: Toward means heading that way. To means you arrived.",
        "진: We are heading toward the light. (노트에 화살표를 그리고 머리 앞을 점선으로 이어 준다.)",
        "(타세요가 언덕을 오른다. 꼭대기에서 모두 숨을 멈춘다. 눈앞에 바다. 절벽 끝에 흰 등대가 서 있다. 빛이 그들 위를 훑고 지나간다.)",
        "수: Beyond the hill, beyond the fence… there it is.",
        "진: (목이 잠긴다.) It's real.",
        "제이: Number twenty-three. \"Walk toward a light.\" (타세요를 세운다.) Let's walk the last part.",
        "진: We walk toward the light. All of us.",
        "수: Beyond this hill, beyond the storm. That's the whole trip.",
        "(와플이 짖는다. 세 사람이 함께 빛을 향해 걷기 시작한다.)"
      ] }
  ],
  56: [
    { no: "56", title: "마지막 줄", lines: [
        "[절벽 위 등대 앞. 밤.]",
        "(등대의 흰 빛이 천천히 돈다. 문 옆 벤치에 담요를 두른 작은 할머니가 앉아 있다. 손에는 닳은 노트. 와플이 제일 먼저 달려간다.)",
        "희순: Waffle! You've gotten fatter since last summer.",
        "제이: Grandma!",
        "희순: Did you eat?",
        "수: Grandma, we drove three hundred miles. (웃음이 터진다.) And yes, we ate.",
        "진: (조심스럽게) Hello. I'm Jin.",
        "희순: I know. I read every postcard from Jin. The drawings are very good.",
        "진: (얼굴이 빨개진다.) You kept them?",
        "수: Grandma, why this lighthouse?",
        "희순: During every storm in my life, this light stayed on. I wanted you to see it without me telling you.",
        "제이: Without you telling us? You told us the story a hundred times.",
        "희순: And because of that story, you came. Despite the storm, despite the old bus, despite Jay's driving.",
        "제이: Hey!",
        "(희순이 낡은 노트를 펼쳐 진 쪽으로 내민다. 마지막 줄이다.)",
        "진: (소리 내어 읽는다.) \"Number twenty-four. Come back with more friends than you left with.\"",
        "(제이와 수가 진을 본다. 진이 잠깐 말을 잃는다.)",
        "진: I came as a guest. (작게) I think I'm leaving as family.",
        "수: We walked toward the light. And we're here.",
        "(등대 빛이 그들 위를 지나간다. 와플이 짖는다.)"
      ] }
  ],
};

// 월별 드라마 제목. 없는 달은 위 dramaTitle을 쓴다.
const dramaByMonth = {
  5: { title: "할머니의 여름 목록", subtitle: "Grandma's Summer List" },
  6: { title: "할머니의 여름 목록", subtitle: "Grandma's Summer List" },
  7: { title: "할머니의 여름 목록", subtitle: "Grandma's Summer List" }
};
