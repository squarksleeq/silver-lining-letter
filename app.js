// 별자리별 시작일과 끝일을 월일 숫자로 저장합니다.
const zodiacSigns = [
  ["염소자리", 1222, 119],
  ["물병자리", 120, 218],
  ["물고기자리", 219, 320],
  ["양자리", 321, 419],
  ["황소자리", 420, 520],
  ["쌍둥이자리", 521, 621],
  ["게자리", 622, 722],
  ["사자자리", 723, 822],
  ["처녀자리", 823, 922],
  ["천칭자리", 923, 1022],
  ["전갈자리", 1023, 1121],
  ["사수자리", 1122, 1221],
];

// 별자리마다 다른 결의 짧은 편지를 전합니다.
const fortunes = {
  "염소자리": [
    "새벽 사무실의 첫 불빛은 아무도 보지 않아도 켜져. 그 불을 켠 사람이 너라는 걸 알아.",
    "토성이 네 어깨 위의 무게를 가만히 세어 봤어. 오늘은 그중 하나를 내려놓아도 돼.",
    "끝이 보이지 않는 계단은 오르는 사람에게만 짧아져. 오늘 계단은 한 칸만 올라도 충분해.",
    "오래 쓴 연장에는 손때가 남아. 오늘은 네 손때를 한 번 들여다보자.",
    "오늘도 잘 버텼어, 진짜로. 이제 그 사실만 가슴에 안고 쉬어도 돼.",
    "책임이라는 외투가 오늘은 조금 무거웠지. 현관에서 벗어두고 따뜻한 걸 마셔.",
    "아무도 모르게 해낸 일들이 네 뿌리야. 뿌리는 오늘도 조용히 깊어졌어.",
    "마감 앞에서도 숨은 네 편이어야 해. 어깨를 한 번 돌리고 시작하자.",
    "단단한 얼굴 뒤에 쌓인 하루가 있네. 오늘은 그 하루에게 고맙다고 말해줘.",
    "쉼은 후퇴가 아니라 내일의 다리를 돌보는 일이야. 오늘은 다리부터 챙기자.",
    "할 일은 산처럼 많은데 봉우리는 하나만 오르면 돼. 가장 낮은 봉우리부터 가자.",
    "기둥도 가끔은 기댈 벽이 필요해. 누구에게 기대고 싶은지 떠올려봐.",
    "참는 일이 익숙해졌다면 오늘만 좋아하는 걸 망설임 없이 골라봐. 허락은 네가 해.",
    "땅을 단단히 딛는 속도로도 충분히 멀리 가. 급하지 않은 걸음이 가장 믿음직해.",
    "달력의 빈칸에 이름을 붙여줘. 쉼, 이라고 쓰면 그 칸은 약속이 돼.",
    "일의 목록 끝에 물 한 잔을 적어 두자. 몸을 돌보는 것도 중요한 업무야.",
    "꾸준함은 눈에 보이지 않게 쌓이다가 어느 날 문이 돼. 오늘은 그 문 앞 한 칸이야.",
    "한꺼번에 붙든 일들이 손에서 미끄러져. 하나씩 내려놓으면 다시 잡을 수 있어.",
    "잘해내는 사람에게도 저녁은 와. 일찍 덮은 노트가 내일의 너를 도울 거야.",
    "누가 알아주지 않아도 네가 쌓은 날들은 사라지지 않아. 오늘 쌓은 한 칸을 인정해줘."
  ],
  "물병자리": [
    "마지막 버스는 너를 두고 떠나도 괜찮다고 말해. 걸어서 집에 가는 길에 좋은 생각이 올 거야.",
    "멀리서 깜빡이는 안테나가 너랑 같은 주파수를 찾고 있어. 오늘은 신호를 조금 크게 보내봐.",
    "천왕성이 예고 없이 네 머릿속 문을 두드렸어. 이상한 생각이어도 문은 열어 보자.",
    "유리창 너머의 소란은 오늘 너랑 상관없어. 창을 닫고 네 이야기에 집중해.",
    "그 생각, 나만 이해 못 한 거 아니지? 이해시킬 한 문장만 준비해봐.",
    "너만 아는 규칙이 하나 생겼네. 사용 설명서를 같이 걸어 두면 더 멋져.",
    "아이디어가 우주까지 다녀왔구나. 지구 일정도 한 번 확인하고 가자.",
    "틀 밖으로 나가는 건 멋져. 나가는 문이 어딘지는 알고 가자.",
    "오늘의 발상은 아직 아무도 읽지 않은 편지 같아. 가장 믿는 한 사람에게만 먼저 보여줘.",
    "마이페이스는 너의 재능이야. 약속 시간만 같이 맞추면 완벽해.",
    "엉뚱한 생각 안에 반짝이는 실마리가 있을지도 몰라. 버리기 전에 적어 두자.",
    "이름 붙이지 못한 생각이 종이 가장자리를 맴돌아. 일단 이름 후보를 세 개만 적어 봐.",
    "새로운 도구가 생겼어? 설명서는 버리지 말고 한 줄만 읽어 보자.",
    "오늘은 평범한 것이 이상하게 신기해 보여. 익숙한 것들을 외계인 눈으로 봐봐.",
    "다른 길을 고른 데엔 네가 본 풍경이 있겠지. 그 풍경을 한 사람에게 들려줘.",
    "별 사이를 건너온 생각이야. 오늘 일정 안에 착륙할 자리를 하나만 만들어 두자.",
    "취향을 변명으로 포장하지 마. 좋아한다는 말이면 충분한 날이 있어.",
    "혼자 걷는 속도도 좋아. 기다리는 사람 앞에선 시계를 데려가자.",
    "예상 밖의 답을 만나면 서둘러 지나치지 마. 낯섦이 질문을 바꿔 줄지도 몰라.",
    "상상은 멀리 갔네. 달력 한 귀퉁이에 돌아올 시각을 적어 두자."
  ],
  "물고기자리": [
    "잠들기 직전의 생각이 하루의 진짜 결론이야. 오늘 밤은 그 생각에게 이불을 덮어줘.",
    "안개 속 가로등은 길이 아니라 거리를 알려 줘. 오늘은 가까운 불빛만 따라가도 돼.",
    "물에 번진 잉크는 처음 쓴 글자보다 아름다워. 번진 마음도 그렇게 봐주자.",
    "해왕성이 네 윤곽을 살짝 흐려 놓았어. 그래서 오늘의 풍경이 더 부드러워 보여.",
    "네가 그린 장면은 네 안에서 자란 거라서 누구의 허락도 필요 없어. 네 상상은 네 거야.",
    "누군가의 슬픔을 네가 전부 안아 줄 필요는 없어. 곁에 앉아 있는 것만으로도 충분해.",
    "마음이 먼저 알아차린 게 있어. 중요한 약속은 날짜와 시간만 한 번 더 확인하자.",
    "상상 속 먼 바다를 다녀와도 좋아. 돌아올 배편은 미리 챙겨 두자.",
    "좋아하는 노래 한 곡이 어두운 복도 끝까지 같이 걸어 줄 거야. 이어폰 먼저 꽂자.",
    "꿈의 윤곽은 흐려지기 직전에 가장 선명해. 가장 작은 조각 하나를 오늘의 일로 옮겨 보자.",
    "남의 등을 토닥인 손으로 네 어깨도 다독여 줘. 오늘은 순서를 바꿔도 돼.",
    "구름도 매일 달리진 않아. 아무것도 안 하는 시간을 오늘 일정에 넣어 줘.",
    "짧은 안부가 먼 마음에 닿는 날이야. 답을 재촉하지 않는 인사를 보내봐.",
    "생각이 안개처럼 번질 땐 창문을 열고 물 한 모금 마셔. 몸이 지금 여기로 돌아와.",
    "작은 감동은 소리 없이 지나가. 오늘 본 것 하나만 마음에 적어 두자.",
    "도와주고 싶은 마음은 예뻐. 네 하루에도 문을 잠글 시간이 있다는 것만 기억해.",
    "마음이 흔들리는 건 아직 살아서 움직인다는 뜻이야. 물결이 잦아들 때까지 기다려도 돼.",
    "네 직감은 속삭임이야. 큰 소리로 말하지 않아도 사실을 한 번 확인하면 더 단단해져.",
    "오늘은 꿈과 현실 사이 문턱에 앉아 있어도 좋아. 발끝만 현실에 걸쳐 두자.",
    "꿈은 멀리 가도 괜찮아. 장바구니에 담기 전에는 가격표 한 번만 읽어 보자."
  ],
  "양자리": [
    "화성이 네 등을 먼저 떠밀었어. 어디로 뛰는지만 보고 계속 뛰어.",
    "출발 총소리는 아직 안 났는데 벌써 두 발짝 나갔네. 총소리는 기다려 주자.",
    "불씨가 말보다 빠르게 번지는 날이야. 하고 싶은 말은 상대 문장이 끝난 다음에 꺼내봐.",
    "닫히기 직전의 엘리베이터 문처럼 기회가 번쩍 지나가. 일단 발부터 끼워 넣을 사람, 너잖아.",
    "오늘의 네 직감은 성냥처럼 짧고 밝아. 불이 붙었으면 무엇을 밝힐지도 정해두자.",
    "또 일을 벌였네, 그래도 반가워. 마무리를 맡아 줄 사람 한 명만 곁에 세워둬.",
    "별들이 너를 앞줄에 세웠어. 뒤따르는 사람들 속도도 한 번만 돌아봐.",
    "멈추는 것도 달리기의 일부야. 물 한 모금 마시는 사이에 길이 더 선명해질 거야.",
    "네 한마디가 방 안의 온도를 바꿔. 오늘은 그 온도를 따뜻한 쪽으로 올려줘.",
    "대답이 입술까지 도착했네. 숨 한 번 쉬고, 그다음에 보내.",
    "결심은 이미 신발 끈을 묶었어. 이번엔 지도도 한 번 펼쳐 보자.",
    "화성의 불꽃은 오래 타려면 바람길이 필요해. 쉬는 틈 하나를 일정에 끼워 넣어.",
    "아무도 움직이지 않는 방에서 네가 첫 발자국이 돼. 단, 문 위치는 확인하고.",
    "용기는 이미 가득 찼어. 이제 필요한 건 조금 느린 한 걸음이야.",
    "오늘의 승부는 속도가 아니라 방향이야. 출발선에서 나침반만 한 번 봐.",
    "한 번 더 이기고 싶은 마음이 올라와. 이기는 것보다 같이 가는 쪽이 더 멀리 가.",
    "급한 마음이 앞장서도 길은 너를 기다려. 신호등 색깔만 보고 건너자.",
    "불꽃은 크지 않아도 길을 비춰. 오늘은 작은 일 하나를 끝까지 해봐.",
    "먼저 손드는 사람은 늘 너야. 오늘은 손을 든 뒤에 질문까지 들어보자.",
    "달려온 만큼 그림자도 길어졌어. 저녁엔 그 그림자랑 천천히 걸어줘."
  ],
  "황소자리": [
    "햇볕에 데워진 돌계단이 너를 기다려. 천천히 올라도 좋아, 물병은 챙기고.",
    "오래 끓인 국물의 바닥에 오늘 필요한 맛이 있어. 냉장고 문을 한 번 열어봐.",
    "금성이 네 식탁 쪽으로 기울었어. 맛있는 걸 앞에 두고는 서두르지 않아도 돼.",
    "꼭 쥔 열쇠는 어느 문을 위한 건지 알고 있어. 그 문을 오늘은 한 뼘만 열어보자.",
    "네 고집은 뿌리가 깊어서 그래. 다만 오늘은 가지 하나쯤 바람에 맡겨도 돼.",
    "편안한 의자가 너를 붙잡고 있네. 십 분만 일어나 걷고 와도 의자는 안 도망가.",
    "오늘의 행운은 아주 작고 따뜻해. 손에 쥔 컵의 온기부터 알아차려 봐.",
    "흙 속의 일은 눈에 안 띄어도 자라는 중이야. 오늘은 물을 한 번 더 주는 날이야.",
    "익숙한 길 모퉁이에서 낯선 냄새가 났어. 빵집이든 뭐든 한 번쯤 들어가 봐.",
    "천천히 가는 사람이 가장 멀리까지 짐을 가져가. 오늘 짐은 두 개만 챙기자.",
    "금성의 느린 빛이 네 하루에 얹혔어. 좋아하는 걸 하나만 골라 오래 누려.",
    "마음이 한번 정해지면 산 같잖아. 산에도 오솔길 하나쯤은 내줘도 돼.",
    "오늘은 새로운 것보다 오래된 것이 위로가 돼. 낡은 담요를 꺼내도 좋아.",
    "편한 게 최고라는 말, 반만 맞아. 나머지 반을 찾으러 작은 모험 하나 어때?",
    "서두르라는 알림은 오늘 무음으로 둬도 돼. 답장은 차 한 잔 마신 뒤에.",
    "쌓아 온 시간이 네 발밑을 단단하게 해. 오늘은 그 위에서 기지개를 켜봐.",
    "소파와의 대화가 길어졌네. 마무리 인사를 하고 창가로 자리를 옮겨봐.",
    "네 손길이 닿은 물건들은 오래 가. 오늘은 그중 하나를 닦아주자.",
    "느긋함은 네 재능이야. 약속 시간만 시계에 한 번 적어두자.",
    "단맛이 필요한 저녁이야. 작은 디저트 하나는 오늘의 정당한 계획이야."
  ],
  "쌍둥이자리": [
    "수성이 네 혀끝에서 먼저 출발했어. 약속은 말한 만큼만 지키자, 진짜로.",
    "열어 둔 탭 두 개 중 하나가 이미 답을 알고 있어. 나머지는 닫아도 도망 안 가.",
    "말 많은 골목의 메아리가 네 목소리를 닮았네. 오늘은 메아리 말고 진짜 대답을 들어봐.",
    "읽지 않은 메시지 숫자가 마음속 숫자와 같아졌어. 하나만 열어서 답하면 숫자가 줄어.",
    "오늘 떠오른 생각은 셋인데 손은 두 개뿐이야. 세 번째는 메모장에 맡겨.",
    "이야기가 세 번 바뀌었네, 첫 이야기는 어디 갔어? 마지막에 꼭 데려오자.",
    "재미있는 소식이 손끝에서 근질거려. 단톡방에 올리기 전에 한 번만 확인하자.",
    "질문이 꼬리에 꼬리를 물고 오는 날이야. 하나만 잡고 끝까지 파봐.",
    "네 농담이 오늘은 방 안을 환하게 해. 웃음 끝에 다정한 한마디만 얹어줘.",
    "너는 한 사람 안에 두 사람이 살잖아. 오늘은 조용한 쪽에게 마이크를 줘.",
    "바람이 네 책장을 넘겨. 어느 쪽에서 멈출지는 네가 정해도 돼.",
    "말이 생각을 앞질렀다면 잠깐 정지 버튼을 눌러. 되감기는 없지만 쉼표는 있어.",
    "새 취미가 눈에 쏙 들어왔네. 장바구니에 담기 전에 체험부터 해봐.",
    "오늘의 행운은 우연한 수다 속에 숨었어. 듣는 귀를 하나 더 열어둬.",
    "네 머릿속 브라우저는 탭이 서른 개야. 오늘은 다섯 개만 남기고 정리하자.",
    "호기심이 길을 만들어. 돌아올 길표도 하나 떨어뜨리고 가.",
    "두 가지를 동시에 하면 둘 다 반만 돼. 하나를 먼저 끝내는 반전, 어때?",
    "친구와 나눈 한마디가 밤새 맴돌 거야. 먼저 안부를 보내는 쪽이 되어봐.",
    "오늘은 말솜씨보다 침묵이 더 많은 걸 전해. 삼 초만 기다렸다 대답해봐.",
    "수다는 네 마법이야. 그 마법이 약속 시간에도 통하는지 확인해 보자."
  ],
  "게자리": [
    "밀물은 모래성을 탓하지 않아. 오늘 무너진 마음도 탓하지 말자.",
    "달이 네 방 창문에 오래 머물러. 오늘은 불을 조금 일찍 끄고 눕자.",
    "껍데기 안쪽의 부드러운 곳을 오늘은 누가 알아봐 줄 거야. 알아봐 주면 웃어줘.",
    "비 오는 날 창가의 김 위에는 아무 말이나 적어도 돼. 마음이 쓴 글씨는 금방 따뜻해져.",
    "남 챙기느라 바빴지? 오늘은 네 밥그릇부터 채우자, 토닥토닥.",
    "마음이 집 안을 몇 바퀴 돌았네. 소파 모서리에 앉아 숨만 세어도 충분해.",
    "달의 손바닥이 네 어깨를 한 번 다독였어. 너도 네 어깨를 한 번 쓸어줘.",
    "걱정이 구름처럼 몰려와도 비가 다 오진 않아. 우산 대신 따뜻한 차 한 잔 어때?",
    "네가 건넨 작은 친절이 누군가의 오후를 데웠어. 오늘은 그 온기가 네게도 돌아와.",
    "혼자 상상 속에서 싸우고 왔구나. 실제로는 아무 일도 없었으니 이제 쉬자.",
    "그리운 사람 생각이 포근한 파도처럼 와. 안부 한 줄이면 마음이 가벼워질 거야.",
    "네 다정함은 조용히 번지는 불빛 같아. 오늘은 그 불빛 아래 네 자리도 만들어줘.",
    "마음이 말랑해진 날은 약한 날이 아니야. 말랑한 날이 사람을 제일 잘 안아줘.",
    "도움을 청하는 건 짐을 같이 들자는 초대야. 오늘 한 번만 초대장을 보내봐.",
    "오래된 노래가 어깨를 감싸 주는 저녁이야. 이어폰을 꽂고 한 곡만 끝까지 들어봐.",
    "달이 차오르는 동안 마음도 불어나. 넘치면 말로 한 조각 덜어내도 괜찮아.",
    "조개가 입을 다무는 건 약해서가 아니라 소중해서야. 열고 싶을 때 열면 돼.",
    "오늘 하루 정말 많이 챙겼어. 이제 네 차례니까 이불부터 챙기자.",
    "따뜻한 말을 남에게만 아껴 두지 마. 거울 앞에서 잘하고 있다고 한마디 건네봐.",
    "마음에도 물이 필요해. 오늘은 물 한 잔과 한숨 한 번으로 시작하자."
  ],
  "사자자리": [
    "불 꺼진 무대에도 네가 서던 자리는 남아 있어. 오늘 조명은 네가 직접 켜.",
    "태양이 네 이름을 먼저 불렀어. 박수는 받고, 조명은 옆 사람에게도 돌려줘.",
    "거울 앞에서 한 번 더 고친 표정이 오늘은 충분히 멋져. 이제 거울이랑 회의는 끝내자.",
    "해 지기 전 마지막 햇빛이 가장 오래 기억에 남아. 오늘의 마지막 장면을 네가 골라봐.",
    "주인공은 대본을 외운 사람이야. 오늘 일정표, 첫 장은 확인했지?",
    "네 웃음이 방 안 온도를 한 칸 올려. 그 온도를 곁의 사람에게도 나눠줘.",
    "왕관은 가끔 무거워. 탁자 위에 잠깐 내려놓고 물부터 한 모금 마셔.",
    "네가 등장하면 공기가 달라져. 조연에게도 한 줄 대사를 선물하자.",
    "박수가 끝난 뒤의 고요도 네 무대야. 조용한 순간에도 당당한 너를 놓치지 마.",
    "자신감은 네 별의 연료야. 연료가 떨어지기 전에 오늘은 푹 쉬어줘.",
    "태양이 네 어깨에 오래 머물러. 그 빛을 받아 줄 사람을 한 명만 떠올려봐.",
    "무대 뒤에서 의자를 옮긴 손들이 있어. 고맙다는 말은 공연이 끝나기 전에.",
    "오늘 네가 한 말은 누군가에게 인용될지도 몰라. 멋진 문장 하나만 준비해 두자.",
    "사자는 하루에 스무 시간을 쉰대. 오늘은 네 안의 사자에게 낮잠을 허락해.",
    "환하게 빛나는 건 네 일이야. 옆 사람을 비추는 건 오늘의 취미로 삼아보자.",
    "네 이야기에는 박수가 어울려. 다만 박수 사이에 다른 사람의 이야기도 끼워 넣자.",
    "오늘의 하이라이트는 큰 무대가 아니라 작은 친절일지도 몰라. 한 번 해보자.",
    "눈부신 사람도 가끔은 흐려도 돼. 흐린 날의 너도 여전히 주인공이야.",
    "자존심이 먼저 일어섰네. 일단 앉히고 마음을 불러와.",
    "사진은 한 장이면 충분해. 나머지는 눈과 마음에 찍어 두자."
  ],
  "처녀자리": [
    "정리된 서랍 속 어긋난 물건 하나가 오늘의 주인공이야. 그냥 두어도 서랍은 잘 닫혀.",
    "밑줄 그어 둔 문장이 아직 너를 기다려. 오늘은 그 문장대로 하나만 해보자.",
    "먼지 하나 없는 책상 위 얼룩은 지우지 않아도 돼. 사람이 쓴 흔적이니까.",
    "다섯 번째 확인은 내일의 네가 해도 늦지 않아. 지금은 보내기 버튼을 눌러보자.",
    "수성이 네 문장에 쉼표를 하나 놓아줬어. 숨 쉴 곳이 생기면 글도 읽기 좋아져.",
    "세상은 맞춤법 검사기가 아니야. 오늘은 오타 하나쯤 웃고 넘어가자.",
    "큰 산도 칸으로 나누면 계단이 돼. 오늘은 첫 칸만 채우고 퇴근하자.",
    "네 눈은 작은 어긋남을 잘 찾아. 그 눈을 너 자신에게는 조금 흐리게 맞춰줘.",
    "체크박스를 다 채우지 않아도 하루는 성공할 수 있어. 가장 중요한 칸 하나만 골라.",
    "다듬는 손이 멈추지 않는 밤이야. 완성은 흠이 없는 상태가 아니라 내보낸 상태야.",
    "책상 한 귀퉁이만 비워도 마음 한 귀퉁이가 비어. 거기에 숨을 놓아두자.",
    "계획표가 아름답게 정렬됐네. 이제 첫 줄을 실제로 해보는 일만 남았어.",
    "네 기준은 높고 정확해. 오늘만 스스로에게 따뜻한 점수를 줘봐.",
    "모든 걸 미리 알 수는 없어. 해 보면서 알게 되는 답도 있어.",
    "정돈은 마음이 하는 기도 같아. 서랍 하나만 열고 그걸로 오늘 기도는 끝.",
    "남의 띄어쓰기는 오늘 놔줘. 네 하루의 띄어쓰기를 먼저 살펴봐.",
    "완벽을 기다리다 해가 지곤 해. 팔십 점짜리 오늘도 충분히 근사해.",
    "작은 것을 챙기는 네 습관이 누군가를 지켜 왔어. 그 사실을 오늘 인정해 줘.",
    "쉬는 시간도 일정표에 한 칸 적어. 빈칸이 아니라 약속으로.",
    "고칠 곳이 보여도 노트를 덮어도 돼. 내일의 눈이 더 잘 볼 거야."
  ],
  "천칭자리": [
    "흔들리다 멈춘 저울은 균형이 아니라 선택을 부탁하고 있어. 둘 다 아니어도 돼, 하나만 골라봐.",
    "금성이 두 갈래 길의 한가운데에 서 있어. 마음이 먼저 돌아본 쪽이 정답에 가까워.",
    "반쯤 열린 문은 열린 것도 닫힌 것도 아니야. 오늘은 한 뼘만 더 밀어보자.",
    "모두의 의자를 반듯하게 놓느라 네 자리가 비었어. 하나쯤 비스듬해도 괜찮아.",
    "메뉴판을 오래 본 날은 처음 눈이 간 이름이 답이야. 점심은 오늘 안에 정하자.",
    "동전을 던지는 순간 알게 될 거야. 어느 쪽 면이 나오길 바랐는지.",
    "거절 하나가 관계를 무너뜨리진 않아. 네 시간을 지키는 문고리를 하나 달아두자.",
    "모두를 만족시키려다 너만 지쳤어. 오늘은 한 사람 몫만큼만 애쓰자.",
    "마음이 바뀌어도 그 선택은 진심이었어. 바꾸는 것도 균형을 잡는 방법이야.",
    "선택지가 많을 땐 기준 하나만 세워. 나머지는 접어 두면 접은 자리가 길이 돼.",
    "네가 만든 평온한 자리에 너도 앉아야 해. 의자는 이미 하나 놓아 뒀어.",
    "저울 한쪽에 네 마음을 먼저 올려봐. 그다음에 남의 기대를 얹으면 무게가 달라 보여.",
    "하나를 고르면 다른 하나는 다음 계절에 다시 만나. 아주 사라지는 건 아니야.",
    "부드러운 말로 단단한 뜻을 전할 수 있는 사람이야. 오늘이 그 연습 날이야.",
    "고민이 길어지는 건 마음이 많다는 증거야. 그중 가장 작은 목소리도 한 번 들어봐.",
    "양쪽 말을 다 듣느라 귀가 지쳤어. 오늘은 조용한 곳에서 네 목소리만 들어보자.",
    "완벽하게 맞는 답이 없을 땐 몸이 덜 긴장되는 답을 골라. 어깨가 알려줄 거야.",
    "균형은 가만히 서 있는 게 아니라 계속 조금씩 기우는 거야. 오늘은 네 쪽으로 한 뼘 기울어봐.",
    "모두의 기분을 읽느라 애썼네. 이제 네 표정을 거울에 물어보자.",
    "오늘은 쉬는 시간도 선택지에 넣어. 쉬는 걸 고르는 건 멋진 판단이야."
  ],
  "전갈자리": [
    "깊은 물 밑의 오래된 병은 아직 봉인되어 있어. 오늘은 마개를 조금만 흔들어봐도 돼.",
    "말 안 해도 알아, 네 속이 조용히 끓고 있다는 거. 믿는 사람에게 한 조각만 꺼내봐.",
    "자물쇠가 달린 일기장은 누군가 읽어 주길 바라기도 해. 오늘 한 줄만 열어 둬.",
    "명왕성이 네 바닥 아래를 한 번 비췄어. 무서운 건 어둠이 아니라 보고도 모른 척하는 거야.",
    "불 꺼진 방에서 빛나는 화면이 오늘 밤의 유일한 증인이야. 보내지 않을 문자는 지워도 돼.",
    "직감이 낮게 속삭이네. 따르기 전에 사실 하나만 더 확인하자.",
    "네 침묵은 거짓이 아니라 가장 깊은 문장이야. 하지만 오늘은 한마디쯤 소리 내도 좋아.",
    "눈빛 하나로 분위기를 읽어 냈지. 짐작이 길어질 땐 한 번 조용히 물어봐.",
    "비밀은 잘 지키는 사람이야. 비밀번호는 메모장 말고 머릿속에 넣어두자.",
    "한 가지에 깊이 잠겨 있었구나. 물 밖으로 나와서 숨부터 쉬자.",
    "마음의 문은 활짝 열지 않아도 돼. 손바닥만 한 틈으로도 바람이 들어와.",
    "오랜 침묵 끝에 답이 올라왔어. 오늘은 그 답을 입 밖으로 한 번만 연습해봐.",
    "믿음은 천천히 쌓는 거라서 더 단단해. 오늘 쌓은 한 칸을 기억해 둬.",
    "어둠 속에서도 윤곽을 볼 수 있는 너야. 윤곽 안쪽의 따뜻함도 기억해줘.",
    "속마음을 조금 보여준다고 깊이가 줄진 않아. 얕은 곳에서 발끝만 담가봐.",
    "작은 단서 하나가 눈에 들어왔네. 결론을 서두르지 말고 한 번 더 지켜봐.",
    "가까운 사람에게서 멀어진 기분이 들 수 있어. 오늘은 짧은 인사로 거리를 좁혀봐.",
    "오래 품은 마음은 쉽게 놓이지 않아. 놓는 연습은 손가락 하나부터 해도 돼.",
    "달이 네 가장 조용한 방을 지나가. 그 방에 오늘만 따뜻한 조명을 켜 두자.",
    "비밀스러운 미소 말고 따뜻한 인사도 가끔 꺼내봐. 의외로 잘 어울려."
  ],
  "사수자리": [
    "반쯤 싼 여행 가방은 마음이 이미 떠났다는 증거야. 지갑과 충전기만 챙기고 가자!",
    "목성이 지도 바깥의 길을 보여 줬어. 첫 모퉁이까지만 가 보고 돌아와도 모험이야.",
    "활시위를 당기기 직전의 숨이 가장 정직해. 이번엔 어디를 겨눌지 크게 말해봐.",
    "기회가 마지막 버스처럼 들어오네. 문 닫히기 전에 일단 올라타!",
    "오늘은 길을 잃어도 이야기가 돼. 돌아올 막차 시간만 알아 두자.",
    "네 웃음소리가 먼 곳까지 길을 닦아. 같이 갈 사람 한 명에게 먼저 전화해봐.",
    "솔직한 한마디가 오늘의 지름길이야. 모서리만 살짝 둥글리고 던져봐.",
    "하늘이 넓게 열렸어. 우산은 날씨 앱에 묻고, 마음은 하늘에 맡기자.",
    "새로운 것이 자꾸 눈에 걸려. 한 번도 안 가 본 골목에 들어가 봐.",
    "목적지가 없어도 출발은 할 수 있어. 신발 끈부터 단단히 묶자.",
    "지금 필요한 건 확신이 아니라 작은 호기심이야. 궁금한 걸 하나만 검색해봐.",
    "계획이 바뀌면 여행이 시작돼. 당황은 3초만 하고 풍경을 보자.",
    "멀리 가고 싶은 마음은 동네 한 바퀴로도 풀려. 낯선 길로 집에 가 볼래?",
    "네 낙천성은 같이 있는 사람을 가볍게 해. 오늘은 그 가벼움을 한 사람에게 나눠줘.",
    "필터를 완전히 끄진 말자. 솔직함은 다정한 포장지를 입으면 더 멀리 가.",
    "배우고 싶은 것이 떠올랐으면 첫 페이지만 펼쳐 봐. 전부 알고 시작하는 사람은 없어.",
    "자유는 돌아올 곳이 있어서 더 신나. 저녁 약속 시간은 주머니에 넣어 두자.",
    "도전의 결과가 어떻든 오늘의 경험치는 쌓여. 일단 웃으면서 해 보자.",
    "낯선 사람과 나눈 짧은 대화가 길을 바꿔. 먼저 이름을 물어보는 건 어때?",
    "세상은 넓고 간식은 챙겨야 해. 가방 한쪽에 작은 즐거움을 하나 넣어 가자."
  ]
};

// 생년월일에 해당하는 별자리를 찾습니다.
function getZodiacSign(year, month, day) {
  const isLeapYear = year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
  const daysInMonth = [
    31,
    isLeapYear ? 29 : 28,
    31,
    30,
    31,
    30,
    31,
    31,
    30,
    31,
    30,
    31,
  ];

  // 실제 달력에 존재하지 않는 날짜는 유효한 별자리로 계산하지 않습니다.
  if (
    !Number.isInteger(year) ||
    !Number.isInteger(month) ||
    !Number.isInteger(day) ||
    year < 1 ||
    month < 1 ||
    month > 12 ||
    day < 1 ||
    day > daysInMonth[month - 1]
  ) {
    return null;
  }

  const monthDay = month * 100 + day;

  for (const [name, start, end] of zodiacSigns) {
    // 염소자리는 12월에서 다음 해 1월까지 이어집니다.
    if (start > end ? monthDay >= start || monthDay <= end : monthDay >= start && monthDay <= end) {
      return name;
    }
  }

  return null;
}

// 별자리 기호, 원소, 달의 분위기, 원소 조합, 요일별 행성 설명을 준비합니다.
const zodiacSymbols = {
  염소자리: "♑",
  물병자리: "♒",
  물고기자리: "♓",
  양자리: "♈",
  황소자리: "♉",
  쌍둥이자리: "♊",
  게자리: "♋",
  사자자리: "♌",
  처녀자리: "♍",
  천칭자리: "♎",
  전갈자리: "♏",
  사수자리: "♐",
};

const zodiacElements = {
  양자리: "불",
  사자자리: "불",
  사수자리: "불",
  황소자리: "흙",
  처녀자리: "흙",
  염소자리: "흙",
  쌍둥이자리: "공기",
  천칭자리: "공기",
  물병자리: "공기",
  게자리: "물",
  전갈자리: "물",
  물고기자리: "물",
};

const moonSignExplanations = {
  양자리: "현관 앞에서 이미 신발을 신고 있네. 마음이 앞서면 목적지만 확인하고 나서 문을 열어.",
  황소자리: "손에 익은 컵과 익숙한 의자가 오늘은 유난히 반갑겠어. 서두르지 말고 가진 것을 천천히 누려봐.",
  쌍둥이자리: "열린 창으로 말과 생각이 한꺼번에 들어와. 가장 마음에 남은 한 문장부터 붙잡아보자.",
  게자리: "누군가의 표정이 오래 마음에 남는 밤이야. 그 사람을 살피듯 네 마음에도 이불을 덮어줘.",
  사자자리: "좋아하는 것을 감추기보다 제대로 바라보고 싶은 저녁이야. 네 기쁨을 나눌 사람도 곁에 불러봐.",
  처녀자리: "책상 위 작은 먼지까지 눈에 들어오는 날이네. 고칠 곳을 모두 찾기보다 하나만 정돈해도 돼.",
  천칭자리: "마주 앉은 사람의 마음이 궁금해지는 저녁이야. 그 대화 안에 네 생각도 빠뜨리지 말아줘.",
  전갈자리: "말보다 침묵에 실린 마음이 먼저 보일 수 있어. 짐작이 깊어지면 믿는 이에게 직접 물어봐.",
  사수자리: "지도 바깥의 길이 자꾸 눈에 들어오네. 호기심을 따라가되 돌아올 시각도 주머니에 넣어두자.",
  염소자리: "흩어진 일을 가지런히 놓고 싶은 밤이야. 목록 끝에는 쉬는 시간도 하나 적어둬.",
  물병자리: "아직 이름 없는 생각이 종이 가장자리에 맴돌아. 서둘러 설명하지 말고 먼저 적어봐.",
  물고기자리: "꿈과 기억의 경계가 부드러워지는 저녁이야. 마음껏 느끼되 중요한 약속은 달력에서 확인해줘.",
};

const elementPairExplanations = {
  불: {
    불: "성냥 하나가 금세 방 안을 밝힐 수 있어. 첫 열기를 살려 가장 하고 싶은 일부터 시작해봐.",
    흙: "따뜻해진 흙에서 새싹이 고개를 내밀어. 떠올린 계획을 손에 잡히는 첫 단계로 옮겨보자.",
    공기: "열린 창을 타고 불씨가 멀리 날아가네. 좋은 생각이 떠오르면 누군가에게 소리 내어 들려줘.",
    물: "뜨거운 마음과 깊은 감정이 한자리에 있어. 말이 빨라질 때는 물 한 모금만큼 쉬어가자.",
  },
  흙: {
    불: "마른 흙 아래 묻혀 있던 씨앗이 온기를 만났어. 미뤄둔 일에 작은 불을 붙여보자.",
    흙: "오래 다져온 길이 발밑에서 단단해져. 익숙한 일 하나를 끝내면 다음 걸음도 보일 거야.",
    공기: "흩어진 메모가 탁자 위에 가지런히 놓이네. 머릿속 생각에 날짜와 순서를 붙여봐.",
    물: "마른 화분에 물이 스며들듯 마음과 생활이 함께 자리를 찾아. 가장 가까운 일부터 돌보자.",
  },
  공기: {
    불: "종이 위의 생각에 불이 옮겨붙었어. 너무 오래 다듬기 전에 작은 행동으로 바꿔봐.",
    흙: "바람이 잦아들자 흩어졌던 메모 한 장이 보이네. 지금 가장 중요한 문장에 밑줄을 그어.",
    공기: "두 사람의 말이 열린 창 사이로 오가네. 네 이야기를 건넨 뒤에는 대답이 올 자리도 남겨두자.",
    물: "생각 사이로 오래된 감정이 번져와. 답을 정하기 전에 네 마음이 무엇을 지키려는지 들어봐.",
  },
  물: {
    불: "잔잔한 물 위로 뜨거운 기운이 올라와. 감정이 넘치기 전에 잠깐 자리를 옮겨 숨을 골라봐.",
    흙: "빗물이 낮은 곳에 천천히 고이듯 마음도 제자리를 찾아가. 작은 생활 하나를 돌보면 숨이 놓일 거야.",
    공기: "수면 위에 말이 조심스레 떠오르는 밤이야. 믿는 사람에게 마음 한 조각을 건네도 좋아.",
    물: "깊은 물 아래 묻어둔 감정이 고요히 떠오르네. 그 마음을 밀어내지 말고 네 편에 앉혀줘.",
  },
};

const weekdayPlanetExplanations = [
  "월요일의 달빛이 창가에 머물러. 오늘은 마음이 보내는 작은 신호를 지나치지 말아줘.",
  "화요일의 붉은 기운이 먼 곳을 물들이네. 망설이던 일에 첫걸음을 내딛되, 주변도 살펴봐.",
  "수요일엔 편지와 목소리가 길을 찾아가. 전하고 싶던 말을 짧고 정확하게 건네보자.",
  "목요일의 넓은 하늘 아래 생각이 멀리 뻗어가. 아직 가보지 않은 가능성을 하나 적어둬.",
  "금요일 저녁, 마주 앉은 사람의 표정이 부드러워 보여. 다정한 말 한마디를 아끼지 마.",
  "토요일은 오래된 돌계단을 오르는 날처럼 느리게 가도 돼. 한 칸씩 밟으면 끝에 닿아.",
  "일요일 햇빛이 방 안의 먼지를 드러내듯 네 장점도 자연스레 보일 거야. 숨기지 않아도 돼.",
];

// 별자리마다 다른 결의 마지막 문장을 전합니다.
const closingAdvice = {
  염소자리: "끝낸 일 옆에 작은 표시를 남겨. 네가 지나온 하루를 네 눈으로 확인할 수 있게.",
  물병자리: "그 생각을 종이 한쪽에 적어둬. 아직 아무도 모르는 길의 첫 표지가 될지 몰라.",
  물고기자리: "잠들기 전, 오늘 마음에 남은 장면 하나를 떠올려. 그것만으로도 충분한 밤이 있어.",
  양자리: "다음 출발 전에는 물 한 모금 마셔. 불씨는 오래 타야 멀리 데려가니까.",
  황소자리: "손에 익은 작은 기쁨을 골라 천천히 누려. 서두르지 않는 시간도 네 것이야.",
  쌍둥이자리: "오늘 들은 말 중 하나를 오래 간직해봐. 대답하지 않고 듣는 일도 대화야.",
  게자리: "따뜻한 것을 네 앞에 먼저 놓아줘. 네가 돌보는 마음에도 네 마음이 들어가야 해.",
  사자자리: "네가 받은 박수만큼 곁의 사람에게도 고마움을 돌려줘. 무대는 함께 만든 거니까.",
  처녀자리: "마지막으로 고칠 곳을 발견해도 노트를 덮어봐. 완성은 흠이 없는 상태와 다르니까.",
  천칭자리: "모두의 마음을 저울에 올리기 전에 네 마음부터 한쪽에 놓아줘.",
  전갈자리: "마음속 문을 조금만 열어둬. 믿을 만한 목소리가 들어올 틈은 그만큼이면 돼.",
  사수자리: "새 길을 걷기 전에 돌아올 차편을 확인해. 멀리 가는 용기는 귀환할 줄 아는 마음과 닮았어.",
};

const lunarPhaseNames = [
  ["new", "삭"],
  ["waxing-crescent", "초승달"],
  ["first-quarter", "상현달"],
  ["waxing-gibbous", "차오르는 달"],
  ["full", "보름달"],
  ["waning-gibbous", "기우는 달"],
  ["last-quarter", "하현달"],
  ["waning-crescent", "그믐달"],
];

const lunarSynodicMonth = 29.530588853;
const knownNewMoon = Date.UTC(2000, 0, 6, 18, 14);
const dayMilliseconds = 86400000;
const result = document.getElementById("result");
const birthdateInput = document.getElementById("birthdate");
const birthYearSelect = document.getElementById("birth-year");
const birthMonthSelect = document.getElementById("birth-month");
const birthDaySelect = document.getElementById("birth-day");
const formMessage = document.getElementById("form-message");
const inputScreen = document.getElementById("input-screen");
const letterScreen = document.getElementById("letter-screen");

function getDisplayDate() {
  const requestedDate = new URLSearchParams(window.location.search).get("date");
  if (requestedDate && /^\d{4}-\d{2}-\d{2}$/.test(requestedDate)) {
    const [year, month, day] = requestedDate.split("-").map(Number);
    const parsedDate = new Date(year, month - 1, day);
    if (
      parsedDate.getFullYear() === year &&
      parsedDate.getMonth() === month - 1 &&
      parsedDate.getDate() === day
    ) {
      return parsedDate;
    }
  }
  return new Date();
}

function getLunarPhase(date) {
  const dateAtUtcMidnight = Date.UTC(date.getFullYear(), date.getMonth(), date.getDate());
  const daysSinceKnownNewMoon = (dateAtUtcMidnight - knownNewMoon) / dayMilliseconds;
  const age = ((daysSinceKnownNewMoon % lunarSynodicMonth) + lunarSynodicMonth) % lunarSynodicMonth;
  const phase = age / lunarSynodicMonth;
  const phaseIndex = Math.round(phase * 8) % 8;
  return { phaseName: lunarPhaseNames[phaseIndex] };
}

function updateCelestialHeader(date) {
  const dateHeading = document.querySelector(".today-date");
  const moonDisc = document.querySelector(".moon-disc");
  const moonPhaseName = document.getElementById("moon-phase-name");
  const moonVisual = document.querySelector(".moon-visual");
  const { phaseName } = getLunarPhase(date);
  const displayDate = new Intl.DateTimeFormat("ko-KR", {
    year: "numeric",
    month: "long",
    day: "numeric",
    weekday: "long",
  }).format(date);

  if (dateHeading) dateHeading.textContent = displayDate;
  if (moonDisc) {
    moonDisc.dataset.phase = phaseName[0];
  }
  if (moonPhaseName) moonPhaseName.textContent = `${phaseName[1]} · 달 위상`;
  if (moonVisual) moonVisual.setAttribute("aria-label", `${displayDate} 기준 ${phaseName[1]} 위상`);
}

function appendTextElement(parent, tagName, className, text) {
  const element = document.createElement(tagName);
  element.className = className;
  element.textContent = text;
  parent.append(element);
  return element;
}


const shareActions = document.getElementById("share-actions");
const saveImageButton = document.getElementById("save-image-button");
const shareImageButton = document.getElementById("share-image-button");
const shareCardPreview = document.getElementById("share-card-preview");
const shareCardPreviewImage = document.getElementById("share-card-preview-image");
let shareCardBlob = null;
let shareCardRenderPromise = null;
let shareCardImageUrl = null;
let shareCardRenderId = 0;

function updateShareActions(show) {
  if (shareActions) {
    shareActions.hidden = !show;
  }
}

function resetShareCardPreview() {
  shareCardBlob = null;
  shareCardRenderPromise = null;
  shareCardRenderId += 1;
  if (shareCardImageUrl) URL.revokeObjectURL(shareCardImageUrl);
  shareCardImageUrl = null;
  if (shareCardPreviewImage) shareCardPreviewImage.removeAttribute("src");
  if (shareCardPreview) shareCardPreview.hidden = true;
}

function showInputScreen() {
  if (inputScreen) inputScreen.hidden = false;
  if (letterScreen) letterScreen.hidden = true;
}

function showLetterScreen() {
  if (inputScreen) inputScreen.hidden = true;
  if (letterScreen) letterScreen.hidden = false;
}

function renderEmptyLetter() {
  if (!result) return;
  const emptyLetter = document.createElement("article");
  emptyLetter.className = "letter-empty";
  appendTextElement(emptyLetter, "p", "letter-salutation", "Dear you,");
  appendTextElement(emptyLetter, "p", "", "오늘의 편지가 도착하기를 기다리고 있어요.");
  appendTextElement(
    emptyLetter,
    "p",
    "empty-hint",
    "생년월일을 알려주면 별들이 당신을 위한 이야기를 골라줄게요.",
  );
  result.replaceChildren(emptyLetter);
  resetShareCardPreview();
  updateShareActions(false);
}

// 편지의 모든 문장은 textContent로 넣어 사용자 입력이 마크업으로 해석되지 않게 합니다.
function renderFortune(sign, today) {
  if (!result || !fortunes[sign]) return;

  const dayOfYear = Math.floor(
    (Date.UTC(today.getFullYear(), today.getMonth(), today.getDate()) -
      Date.UTC(today.getFullYear(), 0, 0)) /
      dayMilliseconds,
  );
  const zodiacIndex = zodiacSigns.findIndex(([name]) => name === sign);
  const fortuneIndex = (dayOfYear + zodiacIndex) % fortunes[sign].length;
  const moonSignIndex = Math.floor((dayOfYear * 12) / 28) % zodiacSigns.length;
  const moonSign = zodiacSigns[moonSignIndex][0];
  const signElement = zodiacElements[sign];
  const moonElement = zodiacElements[moonSign];
  const weekdayIndex = (today.getDay() + 6) % 7;
  const card = document.createElement("article");
  card.className = "fortune-result";

  appendTextElement(card, "p", "letter-salutation", "Dear you,");

  const heading = document.createElement("h2");
  heading.className = "fortune-sign";
  appendTextElement(heading, "span", "fortune-sign-symbol", zodiacSymbols[sign]).setAttribute(
    "aria-hidden",
    "true",
  );
  appendTextElement(heading, "span", "", sign);
  card.append(heading);

  appendTextElement(card, "p", "fortune-quote", `“${fortunes[sign][fortuneIndex]}”`);

  const explanationTitle = appendTextElement(
    card,
    "h3",
    "explanation-title",
    "오늘 밤, 별이 말하길",
  );
  explanationTitle.id = "letter-explanation-title";

  const explanations = [
    moonSignExplanations[moonSign],
    elementPairExplanations[signElement][moonElement],
    weekdayPlanetExplanations[weekdayIndex],
  ];
  explanations.forEach((text) => appendTextElement(card, "p", "fortune-explanation", text));

  const advice = document.createElement("div");
  advice.className = "closing-advice";
  appendTextElement(advice, "p", "", closingAdvice[sign]);
  card.append(advice);

  appendTextElement(card, "p", "letter-signoff", "With starlight,\nThe Universe");

  result.replaceChildren(card);

  const thought = document.createElement("aside");
  thought.className = "thought-to-keep";
  thought.setAttribute("aria-label", "오늘 간직할 문장");
  appendTextElement(thought, "p", "thought-label", "A thought to keep");
  appendTextElement(thought, "p", "thought-text", fortunes[sign][fortuneIndex]);
  result.append(thought);
  resetShareCardPreview();
  updateShareActions(true);
  void prepareLetterImagePreview(shareCardRenderId);
}

function setFormMessage(message) {
  if (formMessage) formMessage.textContent = message;
}

function parseBirthdate(value) {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(value)) return null;
  const [year, month, day] = value.split("-").map(Number);
  if (!getZodiacSign(year, month, day)) return null;

  const now = new Date();
  const isFutureDate =
    Date.UTC(year, month - 1, day) >
    Date.UTC(now.getFullYear(), now.getMonth(), now.getDate());
  return isFutureDate ? null : { year, month, day };
}

function showDateError() {
  const missingSelect = [birthYearSelect, birthMonthSelect, birthDaySelect]
    .find((select) => select && !select.value);
  if (missingSelect) {
    setFormMessage("생년월일의 연도, 월, 일을 모두 선택해 주세요.");
    missingSelect.focus();
    return;
  }

  const value = birthdateInput ? birthdateInput.value : "";
  if (!value) {
    setFormMessage("생년월일을 다시 선택해 주세요.");
    if (birthYearSelect) birthYearSelect.focus();
    return;
  }
  setFormMessage("달력에 존재하는 날짜를 입력해 주세요. 미래 날짜는 사용할 수 없어요.");
  if (birthDaySelect) birthDaySelect.focus();
}

const displayDate = getDisplayDate();
updateCelestialHeader(displayDate);

function updateBirthdateValue() {
  if (!birthdateInput || !birthYearSelect || !birthMonthSelect || !birthDaySelect) return;

  const { value: year } = birthYearSelect;
  const { value: month } = birthMonthSelect;
  const { value: day } = birthDaySelect;
  birthdateInput.value = year && month && day
    ? `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`
    : "";
  setFormMessage("");
}

function updateBirthDayOptions(preserveSelection = true) {
  if (!birthYearSelect || !birthMonthSelect || !birthDaySelect) return;

  const selectedDay = preserveSelection ? birthDaySelect.value : "";
  birthDaySelect.replaceChildren(new Option("일", ""));
  const year = Number(birthYearSelect.value);
  const month = Number(birthMonthSelect.value);
  if (!year || !month) {
    birthDaySelect.disabled = true;
    return;
  }

  const daysInMonth = new Date(year, month, 0).getDate();
  for (let day = 1; day <= daysInMonth; day += 1) {
    birthDaySelect.add(new Option(`${day}일`, String(day)));
  }
  birthDaySelect.disabled = false;
  if (Number(selectedDay) > 0 && Number(selectedDay) <= daysInMonth) {
    birthDaySelect.value = selectedDay;
  }
}

if (birthdateInput && birthYearSelect && birthMonthSelect && birthDaySelect) {
  const currentYear = new Date().getFullYear();
  for (let year = currentYear; year >= 1900; year -= 1) {
    const option = document.createElement("option");
    option.value = String(year);
    option.textContent = `${year}년`;
    birthYearSelect.append(option);
  }

  [birthYearSelect, birthMonthSelect].forEach((select) => {
    select.addEventListener("change", () => {
      updateBirthDayOptions();
      updateBirthdateValue();
    });
  });
  birthDaySelect.addEventListener("change", updateBirthdateValue);

  try {
    const savedBirthdate = localStorage.getItem("birthdate");
    if (savedBirthdate && parseBirthdate(savedBirthdate)) {
      const [year, month, day] = savedBirthdate.split("-");
      if (!Array.from(birthYearSelect.options).some((option) => option.value === year)) {
        birthYearSelect.add(new Option(`${year}년`, year));
      }
      birthYearSelect.value = year;
      birthMonthSelect.value = String(Number(month));
      updateBirthDayOptions(false);
      birthDaySelect.value = String(Number(day));
      updateBirthdateValue();
    } else if (savedBirthdate) {
      localStorage.removeItem("birthdate");
      setFormMessage("저장된 생년월일이 올바르지 않아 삭제했어요. 다시 입력해 주세요.");
    }
  } catch (error) {
    console.error("저장된 생년월일을 불러오지 못했습니다.", error);
    setFormMessage("브라우저 저장 공간에 접근할 수 없어 생년월일을 불러오지 못했어요.");
  }
}

const fortuneButton = document.getElementById("fortune-button");
if (fortuneButton) {
  fortuneButton.addEventListener("click", () => {
    if (!birthdateInput) {
      setFormMessage("생년월일 입력란을 찾을 수 없어요. 페이지를 새로고침해 주세요.");
      return;
    }

    const parsed = parseBirthdate(birthdateInput.value);
    if (!parsed) {
      showDateError();
      return;
    }

    const sign = getZodiacSign(parsed.year, parsed.month, parsed.day);
    if (!sign) {
      showDateError();
      return;
    }

    try {
      localStorage.setItem("birthdate", birthdateInput.value);
      setFormMessage("생년월일을 이 기기에 저장했어요.");
    } catch (error) {
      console.error("생년월일을 저장하지 못했습니다.", error);
      setFormMessage("저장할 수 없지만, 이번 운세는 확인할 수 있어요.");
    }
    renderFortune(sign, displayDate);
    showLetterScreen();
  });
}

const backToInputButton = document.getElementById("back-to-input-button");
if (backToInputButton) {
  backToInputButton.addEventListener("click", () => {
    renderEmptyLetter();
    setFormMessage("");
    showInputScreen();
  });
}

const clearBirthdateButton = document.getElementById("clear-birthdate-button");
if (clearBirthdateButton) {
  clearBirthdateButton.addEventListener("click", () => {
    try {
      localStorage.removeItem("birthdate");
    } catch (error) {
      console.error("저장된 생년월일을 삭제하지 못했습니다.", error);
      setFormMessage("브라우저 저장 공간에서 정보를 삭제하지 못했어요.");
      return;
    }

    if (birthdateInput) birthdateInput.value = "";
    if (birthYearSelect) birthYearSelect.value = "";
    if (birthMonthSelect) birthMonthSelect.value = "";
    if (birthDaySelect) birthDaySelect.value = "";
    updateBirthDayOptions(false);
    setFormMessage("저장된 생년월일을 지웠어요.");
    renderEmptyLetter();
  });
}


async function createLetterImage() {
  if (shareCardBlob) return shareCardBlob;
  if (shareCardRenderPromise) return shareCardRenderPromise;

  const renderId = shareCardRenderId;
  const renderPromise = renderLetterImage();
  shareCardRenderPromise = renderPromise;
  try {
    const blob = await renderPromise;
    if (renderId === shareCardRenderId) shareCardBlob = blob;
    return blob;
  } finally {
    if (shareCardRenderPromise === renderPromise) shareCardRenderPromise = null;
  }
}

async function prepareLetterImagePreview(renderId) {
  try {
    const blob = await createLetterImage();
    if (!blob || renderId !== shareCardRenderId || !shareCardPreview || !shareCardPreviewImage) {
      return;
    }

    shareCardImageUrl = URL.createObjectURL(blob);
    shareCardPreviewImage.src = shareCardImageUrl;
    shareCardPreview.hidden = false;
  } catch (error) {
    console.error("공유카드 미리보기를 만들지 못했습니다.", error);
    setFormMessage("공유카드 미리보기를 만들지 못했어요. 이미지 저장을 다시 시도해 주세요.");
  }
}

async function renderLetterImage() {
  const card = result?.querySelector(".fortune-result");
  if (!card) {
    setFormMessage("먼저 오늘의 편지를 만들어 주세요.");
    return null;
  }

  const fontFamilies = {
    body: '"Noto Sans KR", Pretendard, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
    display: '"Cormorant Garamond", Georgia, "Times New Roman", serif',
  };
  const quote = card.querySelector(".fortune-quote")?.textContent.trim() || "";
  const explanations = [...card.querySelectorAll(".fortune-explanation")]
    .map((element) => element.textContent.trim())
    .filter(Boolean);
  const advice = card.querySelector(".closing-advice")?.textContent.trim() || "";
  const sign = card.querySelector(".fortune-sign")?.textContent.trim() || "";
  const salutation = card.querySelector(".letter-salutation")?.textContent.trim() || "";
  if (!quote || explanations.length === 0 || !advice) {
    setFormMessage("편지에서 공유할 문장을 찾지 못했어요.");
    return null;
  }

  const signoff = card.querySelector(".letter-signoff")?.textContent.trim() || "";
  const bodyFontSample = [quote, ...explanations, advice, "오늘의 편지"].join("\n");
  const displayFontSample = ["SILVER LINING LETTER", salutation, signoff].join("\n");
  if (document.fonts) {
    try {
      await Promise.all([
        document.fonts.load(`600 28px ${fontFamilies.body}`, bodyFontSample),
        document.fonts.load(`600 44px ${fontFamilies.body}`, bodyFontSample),
        document.fonts.load(`500 26px ${fontFamilies.display}`, displayFontSample),
      ]);
    } catch (error) {
      console.warn("공유카드 웹폰트를 불러오지 못해 시스템 대체 글꼴을 사용합니다.", error);
    } finally {
      await document.fonts.ready;
    }
  }

  const canvas = document.createElement("canvas");
  const width = 1080;
  const height = 1920;
  const ctx = canvas.getContext("2d");
  if (!ctx) {
    setFormMessage("이미지를 만들 수 없어요.");
    return null;
  }

  const paddingX = 112;
  const contentWidth = width - paddingX * 2;
  const colors = {
    paper: "#f8f7f2",
    ink: "#202a32",
    muted: "#657987",
    accent: "#7a91a0",
  };
  const brandFont = `500 25px ${fontFamilies.display}`;
  const footerFont = `500 23px ${fontFamilies.body}`;

  function wrapText(text, font) {
    ctx.font = font;
    const lines = [];

    for (const paragraph of text.split(/\r?\n/)) {
      let line = "";
      for (const word of paragraph.trim().split(/\s+/)) {
        const candidate = line ? `${line} ${word}` : word;
        if (ctx.measureText(candidate).width <= contentWidth) {
          line = candidate;
          continue;
        }

        if (line) {
          lines.push(line);
          line = "";
        }

        let segment = "";
        for (const character of Array.from(word)) {
          const nextSegment = segment + character;
          if (segment && ctx.measureText(nextSegment).width > contentWidth) {
            if (/[、。，．！？!?）】」』〉》］｝〕]/u.test(character) && segment.length > 1) {
              lines.push(segment.slice(0, -1));
              segment = `${segment.slice(-1)}${character}`;
            } else {
              lines.push(segment);
              segment = character;
            }
          } else {
            segment = nextSegment;
          }
        }
        line = segment;
      }
      if (line) lines.push(line);
    }
    return lines;
  }

  function buildLayout(scale) {
    const layout = {
      salutationFont: `italic 500 ${Math.round(36 * scale)}px ${fontFamilies.display}`,
      signFont: `600 ${Math.round(38 * scale)}px ${fontFamilies.body}`,
      labelFont: `600 ${Math.round(22 * scale)}px ${fontFamilies.body}`,
      quoteFont: `600 ${Math.round(44 * scale)}px ${fontFamilies.body}`,
      sectionFont: `600 ${Math.round(28 * scale)}px ${fontFamilies.body}`,
      bodyFont: `400 ${Math.round(29 * scale)}px ${fontFamilies.body}`,
      adviceFont: `400 ${Math.round(28 * scale)}px ${fontFamilies.body}`,
      scale,
      blocks: [],
    };
    let y = 0;

    function addBlock(text, font, size, lineMultiplier, gapAfter, align = "left") {
      const lines = wrapText(text, font);
      const lineHeight = Math.round(size * lineMultiplier);
      layout.blocks.push({ text, font, lines, lineHeight, y, align });
      y += lines.length * lineHeight + gapAfter;
    }

    addBlock(salutation, layout.salutationFont, 36 * scale, 1.45, 18 * scale);
    addBlock(sign, layout.signFont, 38 * scale, 1.4, 36 * scale, "center");
    addBlock("A THOUGHT TO KEEP", layout.labelFont, 22 * scale, 1.4, 16 * scale, "center");
    const quoteLines = wrapText(quote, layout.quoteFont);
    const quoteLineHeight = Math.round(44 * scale * 1.52);
    layout.quote = {
      lines: quoteLines,
      font: layout.quoteFont,
      lineHeight: quoteLineHeight,
      y,
      padding: Math.round(28 * scale),
      height: quoteLines.length * quoteLineHeight + Math.round(56 * scale),
    };
    y += layout.quote.height + 40 * scale;
    addBlock("오늘 밤, 별이 말하길", layout.sectionFont, 28 * scale, 1.45, 22 * scale);
    explanations.forEach((text) => {
      addBlock(text, layout.bodyFont, 29 * scale, 1.7, 20 * scale);
    });

    const adviceLines = wrapText(advice, layout.adviceFont);
    const adviceLineHeight = Math.round(28 * scale * 1.7);
    const advicePadding = Math.round(20 * scale);
    layout.advice = {
      lines: adviceLines,
      font: layout.adviceFont,
      lineHeight: adviceLineHeight,
      y: y + Math.round(8 * scale),
      padding: advicePadding,
      height: adviceLines.length * adviceLineHeight + advicePadding * 2,
    };
    layout.contentTop = 220;
    layout.contentBottom = layout.advice.y + layout.advice.height + Math.round(62 * scale) +
      signoff.split(/\r?\n/).length * Math.round(42 * scale);
    layout.contentHeight = layout.contentBottom;
    return layout;
  }

  let layout = buildLayout(1);
  for (let scale = 0.96; layout.contentHeight > 1450 && scale >= 0.68; scale -= 0.04) {
    layout = buildLayout(scale);
  }
  const contentOffset = Math.min(96, Math.max(0, Math.round((1450 - layout.contentHeight) / 2)));
  layout.blocks.forEach((block) => {
    block.y += layout.contentTop + contentOffset;
  });
  layout.quote.y += layout.contentTop + contentOffset;
  layout.advice.y += layout.contentTop + contentOffset;
  layout.signoffY = layout.advice.y + layout.advice.height + Math.round(62 * layout.scale);

  canvas.width = width;
  canvas.height = height;
  ctx.fillStyle = colors.paper;
  ctx.fillRect(0, 0, width, height);
  ctx.strokeStyle = "rgba(128, 119, 101, 0.24)";
  ctx.lineWidth = 2;
  ctx.strokeRect(28, 28, width - 56, height - 56);
  ctx.strokeStyle = "rgba(128, 119, 101, 0.18)";
  ctx.beginPath();
  ctx.moveTo(paddingX, 164);
  ctx.lineTo(width - paddingX, 164);
  ctx.stroke();
  ctx.fillStyle = colors.accent;
  ctx.beginPath();
  ctx.arc(width / 2, 164, 4, 0, Math.PI * 2);
  ctx.fill();

  ctx.textAlign = "left";
  ctx.textBaseline = "alphabetic";
  ctx.fillStyle = colors.ink;
  ctx.font = brandFont;
  ctx.fillText("SILVER LINING LETTER", paddingX, 126);

  ctx.textAlign = "right";
  ctx.fillStyle = colors.muted;
  ctx.font = `500 22px ${fontFamilies.body}`;
  ctx.fillText("A LETTER FROM THE UNIVERSE", width - paddingX, 126);

  ctx.textAlign = "left";
  ctx.fillStyle = colors.accent;
  ctx.font = `600 23px ${fontFamilies.body}`;
  ctx.fillText("A LETTER WRITTEN FOR YOU", paddingX, height - 104);

  ctx.textBaseline = "top";
  layout.blocks.forEach((block, blockIndex) => {
    ctx.font = block.font;
    ctx.textAlign = block.align;
    ctx.fillStyle = blockIndex === 1 ? "#263449" :
      blockIndex === 2 || blockIndex === 3 ? colors.accent : colors.ink;
    const x = block.align === "center" ? width / 2 : paddingX;
    if (blockIndex === 3) {
      ctx.fillStyle = "rgba(128, 119, 101, 0.3)";
      ctx.fillRect(paddingX, block.y - 12, 72, 2);
      ctx.fillStyle = colors.accent;
    }
    block.lines.forEach((line, index) => {
      ctx.fillText(line, x, block.y + index * block.lineHeight);
    });
  });

  ctx.fillStyle = "rgba(169, 149, 108, 0.1)";
  ctx.fillRect(paddingX, layout.quote.y, contentWidth, layout.quote.height);
  ctx.fillStyle = "#a9956c";
  ctx.fillRect(paddingX, layout.quote.y, 3, layout.quote.height);
  ctx.fillStyle = colors.ink;
  ctx.font = layout.quote.font;
  ctx.textAlign = "center";
  layout.quote.lines.forEach((line, index) => {
    ctx.fillText(
      line,
      width / 2,
      layout.quote.y + layout.quote.padding + index * layout.quote.lineHeight,
    );
  });

  ctx.fillStyle = "rgba(169, 149, 108, 0.1)";
  ctx.fillRect(paddingX, layout.advice.y, contentWidth, layout.advice.height);
  ctx.fillStyle = "#a9956c";
  ctx.fillRect(paddingX, layout.advice.y, 3, layout.advice.height);
  ctx.fillStyle = colors.ink;
  ctx.textAlign = "left";
  ctx.font = layout.advice.font;
  layout.advice.lines.forEach((line, index) => {
    ctx.fillText(
      line,
      paddingX + layout.advice.padding,
      layout.advice.y + layout.advice.padding + index * layout.advice.lineHeight,
    );
  });

  ctx.textBaseline = "alphabetic";
  ctx.fillStyle = colors.muted;
  ctx.font = brandFont;
  const signoffLines = signoff.split(/\r?\n/);
  ctx.textAlign = "right";
  signoffLines.forEach((line, index) => {
    ctx.fillText(line, width - paddingX, layout.signoffY + index * Math.round(42 * layout.scale));
  });

  ctx.textAlign = "left";
  ctx.fillStyle = colors.accent;
  ctx.font = footerFont;
  ctx.fillText("A LITTLE LIGHT FOR YOUR DAY", paddingX, height - 104);

  return new Promise((resolve) => {
    canvas.toBlob((blob) => resolve(blob), "image/png");
  });
}

async function saveLetterImage(imageBlob = null) {
  let url;
  try {
    const blob = imageBlob || await createLetterImage();
    if (!blob) {
      setFormMessage("공유카드 이미지를 만들지 못했어요. 다시 시도해 주세요.");
      return false;
    }

    url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "silver-lining-letter.png";
    link.click();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
    return true;
  } catch (error) {
    if (url) URL.revokeObjectURL(url);
    console.error("이미지 저장에 실패했습니다.", error);
    setFormMessage("이미지를 저장하지 못했어요. 다시 시도해 주세요.");
    return false;
  }
}

async function shareLetterImage() {
  try {
    const blob = await createLetterImage();
    if (!blob) {
      setFormMessage("공유카드 이미지를 만들지 못했어요. 다시 시도해 주세요.");
      return;
    }

    const file = new File([blob], "silver-lining-letter.png", {
      type: "image/png",
    });

    if (navigator.canShare?.({ files: [file] }) && navigator.share) {
      try {
        await navigator.share({
          title: "Silver Lining Letter",
          text: "A little light for your day.",
          files: [file],
        });
      } catch (error) {
        if (error.name !== "AbortError") {
          console.error("이미지 공유에 실패했습니다.", error);
          setFormMessage("공유할 수 없어요. 이미지를 저장한 뒤 직접 공유해 주세요.");
        }
      }
      return;
    }

    if (await saveLetterImage(blob)) {
      setFormMessage("이 브라우저는 이미지 직접 공유를 지원하지 않아 이미지를 저장했어요.");
    }
  } catch (error) {
    console.error("공유카드를 준비하지 못했습니다.", error);
    setFormMessage("공유카드를 준비하지 못했어요. 다시 시도해 주세요.");
  }
}

if (saveImageButton) {
  saveImageButton.addEventListener("click", () => saveLetterImage());
}

if (shareImageButton) {
  shareImageButton.addEventListener("click", shareLetterImage);
}
