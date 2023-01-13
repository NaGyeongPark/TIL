const data4 = [
  {
    id: "0ba23968-f2d3-454e-9bc7-c9e383edfc1f",
    title: "아이디, 사용자명, 비밀번호 입력 창을 표시한다.",
    priority: 3,
    from: "2022-11-16",
    until: "2022-11-18",
    content: "",
    prev: [],
    next: ["eeeb5663-22fe-41d5-b3cc-d92fa04d68ab"],
  },
  {
    id: "eeeb5663-22fe-41d5-b3cc-d92fa04d68ab",
    title: "아이디는 중복될 수 없다.",
    priority: 3,
    from: "2022-11-16",
    until: "2022-11-18",
    content: "",
    prev: ["0ba23968-f2d3-454e-9bc7-c9e383edfc1f"],
    next: ["1edd6ab7-c2ad-45d9-9fd4-64ebabe9a1e3"],
  },
  {
    id: "1edd6ab7-c2ad-45d9-9fd4-64ebabe9a1e3",
    title: "비밀번호는 특수문자 포함 6자 이상으로 제한한다.",
    priority: 2,
    from: "2022-11-16",
    until: "2022-11-18",
    content: "",
    prev: ["eeeb5663-22fe-41d5-b3cc-d92fa04d68ab"],
    next: [],
  },
  {
    id: "917e93f2-1053-47be-9416-f170248eb79d",
    title: "가입 버튼을 클릭하면 사용자 데이터를 DB에 저장한다.",
    priority: 2,
    from: "2022-11-16",
    until: "2022-11-18",
    content: "",
    prev: [],
    next: [],
  },
  {
    id: "93470657-a3a2-4a10-ab2d-f7b16544cf81",
    title: "회원가입이 성공적으로 완료되면 로그인 페이지로 이동한다.",
    priority: 2,
    from: "2022-11-16",
    until: "2022-11-18",
    content: "",
    prev: [],
    next: [],
  },
  {
    id: "8499d4e2-2aff-4cd1-a96e-1b98c918658c",
    title: "가입 버튼 아래 버튼을 클릭하면 로그인 페이지로 이동한다.",
    priority: 2,
    from: "2022-11-16",
    until: "2022-11-18",
    content: "",
    prev: [],
    next: [],
  },
  {
    id: "37d294e4-f809-4ad9-9dd5-91f55e998e3d",
    title: "아이디, 비밀번호 입력 창을 표시한다.",
    priority: 3,
    from: "2022-11-16",
    until: "2022-11-18",
    content: "",
    prev: [],
    next: [],
  },
  {
    id: "7642dd30-817a-4dbd-990e-27cade8427c6",
    title: "아이디와 비밀번호를 모두 입력하면 로그인 버튼이 활성화된다",
    priority: 2,
    from: "2022-11-16",
    until: "2022-11-18",
    content: "",
    prev: [],
    next: [],
  },
  {
    id: "3d7d6663-0096-4a1f-9d35-cc47887953d9",
    title: "활성화된 로그인버튼을 클릭하면 서버에 로그인 요청을 보낸다",
    priority: 3,
    from: "2022-11-16",
    until: "2022-11-18",
    content: "",
    prev: [],
    next: [],
  },
  {
    id: "f05855b1-efe6-4d42-81a8-9788115186d0",
    title: "유저가 존재하지 않을 경우 경고 문구를 표시한다",
    priority: 1,
    from: "2022-11-16",
    until: "2022-11-18",
    content: "",
    prev: [],
    next: [],
  },
  {
    id: "88932db3-a2a4-47ad-b186-2346dbf8d811",
    title: "비밀번호가 틀릴 경우 경고 문구를 표시한다",
    priority: 1,
    from: "2022-11-16",
    until: "2022-11-18",
    content: "",
    prev: [],
    next: ["48ebda62-42a0-45a9-b98e-e5f3cb552e29"],
  },
  {
    id: "5864b8b2-f6fa-4657-b6f7-e38d5cee3403",
    title: "로그인에 성공하면 메인 페이지로 이동한다",
    priority: 3,
    from: "2022-11-16",
    until: "2022-11-18",
    content: "",
    prev: [],
    next: ["48ebda62-42a0-45a9-b98e-e5f3cb552e29"],
  },
  {
    id: "64144a4f-601a-4b67-be55-ced69f400ceb",
    title: "가입하기 버튼을 눌러 회원가입 페이지로 이동한다.",
    priority: 2,
    from: "2022-11-16",
    until: "2022-11-18",
    content: "",
    prev: [],
    next: ["48ebda62-42a0-45a9-b98e-e5f3cb552e29"],
  },
  {
    id: "48ebda62-42a0-45a9-b98e-e5f3cb552e29",
    title: "그룹을 생성할지 참가할지 선택하는 모달을 생성한다.",
    priority: 3,
    from: "2022-11-16",
    until: "2022-11-18",
    content: "",
    prev: [
      "88932db3-a2a4-47ad-b186-2346dbf8d811",
      "5864b8b2-f6fa-4657-b6f7-e38d5cee3403",
      "64144a4f-601a-4b67-be55-ced69f400ceb",
    ],
    next: [
      "b301fb82-12fe-4d3e-adb7-c19f75ec588e",
      "530825ab-be9e-40ab-acb0-3250bfe777e5",
    ],
  },
  {
    id: "b301fb82-12fe-4d3e-adb7-c19f75ec588e",
    title: "그룹 생성을 선택할 경우 그룹 생성 모달이 표시된다.",
    priority: 3,
    from: "2022-11-16",
    until: "2022-11-18",
    content: "",
    prev: ["48ebda62-42a0-45a9-b98e-e5f3cb552e29"],
    next: [],
  },
  {
    id: "530825ab-be9e-40ab-acb0-3250bfe777e5",
    title: "뒤로가기 버튼을 클릭 시 앞의 모달을 보여준다.",
    priority: 1,
    from: "2022-11-16",
    until: "2022-11-18",
    content: "",
    prev: ["48ebda62-42a0-45a9-b98e-e5f3cb552e29"],
    next: [],
  },
  {
    id: "245410a2-7288-45db-912a-1c17639d8448",
    title:
      "그룹 만들기 화면에서 그룹 대표 이미지를 업로드하고 그룹명을 입력한다.",
    priority: 3,
    from: "2022-11-16",
    until: "2022-11-18",
    content: "",
    prev: [],
    next: ["c7c39953-bc7c-4338-938d-832309fe9430"],
  },
  {
    id: "c7c39953-bc7c-4338-938d-832309fe9430",
    title: "만들기 버튼을 누르면 그룹 생성 요청이 서버에 전송된다. ",
    priority: 3,
    from: "2022-11-16",
    until: "2022-11-18",
    content: "",
    prev: ["245410a2-7288-45db-912a-1c17639d8448"],
    next: ["836463aa-9f2b-4104-9543-7d3d1025d369"],
  },
  {
    id: "836463aa-9f2b-4104-9543-7d3d1025d369",
    title: "그룹 이름이 중복되는 경우 생성 불가 문구를 표시한다.",
    priority: 1,
    from: "2022-11-16",
    until: "2022-11-18",
    content: "",
    prev: ["c7c39953-bc7c-4338-938d-832309fe9430"],
    next: [],
  },
  {
    id: "20f899d4-43cc-491f-9c33-bc5373f08670",
    title:
      "그룹 생성시 서버에 그룹 대표 이미지 URL과 이름, 초대 코드가 저장된다.",
    priority: 3,
    from: "2022-11-16",
    until: "2022-11-18",
    content: "",
    prev: [],
    next: [],
  },
  {
    id: "4b31b0cf-f079-436b-b7c1-dee6501bdab9",
    title: "그룹이 생성되면 해당 그룹의 메인 페이지로 입장한다.",
    priority: 2,
    from: "2022-11-16",
    until: "2022-11-18",
    content: "",
    prev: [],
    next: [],
  },
  {
    id: "c6d7f0e4-a3e0-48bf-8c9a-0053534c2835",
    title: "그룹 초대 모달이 표시된다.",
    priority: 2,
    from: "2022-11-16",
    until: "2022-11-18",
    content: "",
    prev: [],
    next: ["6a6cd0bf-7995-4b0e-8d1b-7a6b75255a40"],
  },
  {
    id: "6a6cd0bf-7995-4b0e-8d1b-7a6b75255a40",
    title: "그룹 초대 모달에서는 초대 코드를 보여준다.",
    priority: 2,
    from: "2022-11-16",
    until: "2022-11-18",
    content: "",
    prev: ["c6d7f0e4-a3e0-48bf-8c9a-0053534c2835"],
    next: ["e5716ecb-61f7-4e39-92c9-c7dd4c066ff6"],
  },
  {
    id: "e5716ecb-61f7-4e39-92c9-c7dd4c066ff6",
    title: "초대 코드 복사 버튼을 클릭하면 초대 코드를 클립보드에 저장한다.",
    priority: 1,
    from: "2022-11-16",
    until: "2022-11-18",
    content: "",
    prev: ["6a6cd0bf-7995-4b0e-8d1b-7a6b75255a40"],
    next: ["aa5644e1-714b-470f-88f9-91e54be16627"],
  },
  {
    id: "aa5644e1-714b-470f-88f9-91e54be16627",
    title: "뒤로가기 버튼이나 닫기 버튼, 배경을 누르면 모달을 닫는다.",
    priority: 2,
    from: "2022-11-16",
    until: "2022-11-18",
    content: "",
    prev: ["e5716ecb-61f7-4e39-92c9-c7dd4c066ff6"],
    next: ["7eb1daf1-c295-432a-b75c-95a5284caa8c"],
  },
  {
    id: "7eb1daf1-c295-432a-b75c-95a5284caa8c",
    title: "그룹 관리자가 그룹 삭제 버튼을 눌러 그룹 삭제 모달을 표시한다.",
    priority: 2,
    from: "2022-11-24",
    until: "2022-11-26",
    content: "",
    prev: ["aa5644e1-714b-470f-88f9-91e54be16627"],
    next: ["7d492a78-b096-4374-bcd0-ab4ffbfabaed"],
  },
  {
    id: "7d492a78-b096-4374-bcd0-ab4ffbfabaed",
    title: "그룹 삭제 버튼을 누르면 그룹 삭제 요청을 보낸다.",
    priority: 2,
    from: "2022-11-24",
    until: "2022-11-26",
    content: "",
    prev: ["7eb1daf1-c295-432a-b75c-95a5284caa8c"],
    next: ["a5ea302f-e55d-4319-93fb-1829b5c2a6c1"],
  },
  {
    id: "a5ea302f-e55d-4319-93fb-1829b5c2a6c1",
    title:
      "그룹 삭제 시 관련 유저 정보는 유지되나, 채팅, 파일 등의 데이터는 함께 삭제된다.",
    priority: 2,
    from: "2022-11-24",
    until: "2022-11-26",
    content: "",
    prev: ["7d492a78-b096-4374-bcd0-ab4ffbfabaed"],
    next: [],
  },
  {
    id: "23842059-2b4d-41be-a431-22e4a38e2087",
    title: "그룹 장만이 그룹 삭제 버튼을 눌러 그룹 삭제 모달을 띄울 수 있다.",
    priority: 1,
    from: "2022-11-24",
    until: "2022-11-26",
    content: "",
    prev: [],
    next: [],
  },
  {
    id: "ff0633bb-8124-48a3-b094-bf153fc1d6c8",
    title: "그룹 장 이외 유저의 그룹 삭제 요청은 거절된다.",
    priority: 1,
    from: "2022-11-24",
    until: "2022-11-26",
    content: "",
    prev: [],
    next: [],
  },
  {
    id: "73cc95a6-b9af-4009-8d5e-d8ee9eac3e5e",
    title:
      "그룹 코드 입력창과 그룹 참가하기, 뒤로가기 버튼이 있는 모달을 표시한다.",
    priority: 3,
    from: "2022-11-24",
    until: "2022-11-26",
    content: "",
    prev: [],
    next: ["120d2d7e-1040-4690-9d50-3e4742f05e34"],
  },
  {
    id: "120d2d7e-1040-4690-9d50-3e4742f05e34",
    title: "그룹 코드를 입력하면 그룹 참가하기 버튼이 활성화 된다.",
    priority: 3,
    from: "2022-11-24",
    until: "2022-11-26",
    content: "",
    prev: ["73cc95a6-b9af-4009-8d5e-d8ee9eac3e5e"],
    next: ["bdb7406e-4ab7-4c30-af67-d6fede235edc"],
  },
  {
    id: "bdb7406e-4ab7-4c30-af67-d6fede235edc",
    title: "참가하기 버튼을 누르면 서버에 그룹 가입 요청을 보낸다.",
    priority: 3,
    from: "2022-11-24",
    until: "2022-11-26",
    content: "",
    prev: ["120d2d7e-1040-4690-9d50-3e4742f05e34"],
    next: ["138483a5-133f-4ca9-807a-6738f1332e26"],
  },
  {
    id: "138483a5-133f-4ca9-807a-6738f1332e26",
    title: "유효한 그룹 코드가 아닌경우 경고 문구를 표시한다.",
    priority: 2,
    from: "2022-11-24",
    until: "2022-11-26",
    content: "",
    prev: ["bdb7406e-4ab7-4c30-af67-d6fede235edc"],
    next: ["11a70295-eb15-4177-9e1a-296eb6ecafd3"],
  },
  {
    id: "11a70295-eb15-4177-9e1a-296eb6ecafd3",
    title: "가입에 성공하면 그룹 리스트를 갱신한다.",
    priority: 3,
    from: "2022-11-24",
    until: "2022-11-26",
    content: "",
    prev: ["138483a5-133f-4ca9-807a-6738f1332e26"],
    next: ["1a9043b7-671d-41bb-b3dd-f5950128dd36"],
  },
  {
    id: "1a9043b7-671d-41bb-b3dd-f5950128dd36",
    title: "가입에 성공하면 가입한 그룹의 기본 채널에 접속한다.",
    priority: 2,
    from: "2022-11-24",
    until: "2022-11-26",
    content: "",
    prev: ["11a70295-eb15-4177-9e1a-296eb6ecafd3"],
    next: [],
  },
  {
    id: "54fffcb7-f330-46fc-b249-984db91db96d",
    title:
      "좌측 사이드바에 자신이 가입한 그룹 썸네일 사진 목록이 세로로 표시된다. ",
    priority: 3,
    from: "2022-11-24",
    until: "2022-11-26",
    content: "",
    prev: [],
    next: [],
  },
  {
    id: "19d7324d-b3b2-4a60-9219-005ee700dee9",
    title: "자신이 가입한 그룹 썸네일 사진 목록을 불러온다. ",
    priority: 3,
    from: "2022-11-24",
    until: "2022-11-26",
    content: "",
    prev: [],
    next: [],
  },
  {
    id: "736a062b-12d7-4ca3-aea9-89903e48a0ca",
    title:
      "그룹 썸네일에 마우스를 오버하면 그룹의 이름이 썸네일 오른쪽에 표시된다.",
    priority: 1,
    from: "2022-11-24",
    until: "2022-11-26",
    content: "",
    prev: [],
    next: [],
  },
  {
    id: "dfaf9e55-6808-44c3-92f2-beb4b1e0f6f3",
    title: "그룹 썸네일을 클릭하면 해당 그룹의 기본 채널로 이동한다.",
    priority: 3,
    from: "2022-11-24",
    until: "2022-11-26",
    content: "",
    prev: [],
    next: [],
  },
  {
    id: "019e05e3-e438-463f-aece-4e056d145deb",
    title: "그룹 관리자가 채널 생성 버튼을 눌러 채널 생성 모달을 표시한다.",
    priority: 3,
    from: "2022-11-24",
    until: "2022-11-26",
    content: "",
    prev: [],
    next: [],
  },
  {
    id: "fe23d00b-b06f-4cc5-ae1e-fa6733e8425e",
    title:
      "채널의 유형(회의/채팅)을 선택하고 채널 이름을 입력한 후 채널 생성 요청을 보낸다.",
    priority: 3,
    from: "2022-11-30",
    until: "2022-12-01",
    content: "",
    prev: [],
    next: ["1a32f5d0-4a8a-455d-849a-baa39ec6416b"],
  },
  {
    id: "1a32f5d0-4a8a-455d-849a-baa39ec6416b",
    title: "채널 유형에 맞게 입력한 채널 이름으로 채널을 DB에 저장한다.",
    priority: 3,
    from: "2022-11-30",
    until: "2022-12-02",
    content: "",
    prev: ["fe23d00b-b06f-4cc5-ae1e-fa6733e8425e"],
    next: [],
  },
  {
    id: "a2b133f5-5d9a-47c4-b6c3-b6fcc20dd9a0",
    title: "기존 채널 중 중복되는 이름이 있다면 경고 문구를 표시한다.",
    priority: 2,
    from: "2022-11-30",
    until: "2022-12-02",
    content: "",
    prev: [],
    next: [],
  },
  {
    id: "dfb7dc52-e86c-4543-9a5f-f3306bb3d1ea",
    title: "채널목록은 좌측 사이드바에 분류에 따라 리스트로 표시되어 있다.",
    priority: 3,
    from: "2022-11-30",
    until: "2022-12-02",
    content: "",
    prev: [],
    next: [],
  },
  {
    id: "1c0b6e9a-14ed-41ac-b57d-d2d7a05d3970",
    title: "그룹에 있는 채널 목록을 불러온다.",
    priority: 3,
    from: "2022-11-30",
    until: "2022-12-03",
    content: "",
    prev: [],
    next: [],
  },
  {
    id: "4bc8caa9-2082-4ffe-a1fa-b8d9a773207a",
    title: "조회하고 싶은 채널을 선택하면 채널에 접속할 수 있다.",
    priority: 3,
    from: "2022-11-30",
    until: "2022-12-03",
    content: "",
    prev: [],
    next: ["a5ba4849-a2af-4cd0-ab4d-603e9672e8fb"],
  },
  {
    id: "a5ba4849-a2af-4cd0-ab4d-603e9672e8fb",
    title: "채팅 채널을 선택할 경우 그동안의 채팅 내역을 조회할 수 있다",
    priority: 3,
    from: "2022-11-30",
    until: "2022-12-03",
    content: "",
    prev: ["4bc8caa9-2082-4ffe-a1fa-b8d9a773207a"],
    next: ["a89cb883-d19d-405a-9663-e791b0996052"],
  },
  {
    id: "a89cb883-d19d-405a-9663-e791b0996052",
    title: "화상 채널을 선택할 경우 화상 통화에 참여할 수 있다.",
    priority: 3,
    from: "2022-11-30",
    until: "2022-12-04",
    content: "",
    prev: ["a5ba4849-a2af-4cd0-ab4d-603e9672e8fb"],
    next: ["08d3b760-5b9d-4bf3-8e31-189e88462ebf"],
  },
  {
    id: "08d3b760-5b9d-4bf3-8e31-189e88462ebf",
    title: "채널 삭제를 확인시키는 모달을 표시한다.",
    priority: 1,
    from: "2022-11-30",
    until: "2022-12-04",
    content: "",
    prev: ["a89cb883-d19d-405a-9663-e791b0996052"],
    next: ["b15078ab-b8e7-4ea0-a283-25f350d73043"],
  },
  {
    id: "b15078ab-b8e7-4ea0-a283-25f350d73043",
    title: "그룹 생성한 유저를 인식해 삭제를 진행한다.",
    priority: 1,
    from: "2022-11-30",
    until: "2022-12-04",
    content: "",
    prev: ["08d3b760-5b9d-4bf3-8e31-189e88462ebf"],
    next: ["8fdbe5be-4f84-4d84-9e4d-a7138c828333"],
  },
  {
    id: "8fdbe5be-4f84-4d84-9e4d-a7138c828333",
    title: "그룹원들의 이름, 프로필 이미지, 접속 현황은 우측 바에 표시된다",
    priority: 2,
    from: "2022-11-30",
    until: "2022-12-03",
    content: "",
    prev: ["b15078ab-b8e7-4ea0-a283-25f350d73043"],
    next: ["22dda6e8-ae55-438c-b66f-734e0d51d935"],
  },
  {
    id: "22dda6e8-ae55-438c-b66f-734e0d51d935",
    title:
      "접속하지 않은 그룹원의 경우 Offline 하단에 표시되며 회색 불로 표시된다",
    priority: 2,
    from: "2022-11-30",
    until: "2022-12-03",
    content: "",
    prev: ["8fdbe5be-4f84-4d84-9e4d-a7138c828333"],
    next: ["d09cf2c3-66ac-4959-8b85-55aa725ea22d"],
  },
  {
    id: "d09cf2c3-66ac-4959-8b85-55aa725ea22d",
    title: "접속한 그룹원의 경우 Online 하단에 표시되며 녹색 불로 표시된다",
    priority: 2,
    from: "2022-11-30",
    until: "2022-12-03",
    content: "",
    prev: ["22dda6e8-ae55-438c-b66f-734e0d51d935"],
    next: [],
  },
  {
    id: "499f4b02-8f24-4367-9924-36b05f948f2a",
    title: "채팅 채널 아래에는 입력창이 보인다.",
    priority: 3,
    from: "2022-11-30",
    until: "2022-12-03",
    content: "",
    prev: [],
    next: [],
  },
  {
    id: "6c332211-3617-4d58-8278-9471e18a6f10",
    title: "메시지를 입력한 뒤 엔터를 누르면 메시지를 전송한다.",
    priority: 3,
    from: "2022-11-30",
    until: "2022-12-03",
    content: "",
    prev: [],
    next: [],
  },
  {
    id: "7b8a1f42-e4ee-4b4a-91d0-90881f5f14a8",
    title: "메시지가 입력되지 않은 경우 메시지를 전송하지 않는다.",
    priority: 1,
    from: "2022-11-30",
    until: "2022-12-03",
    content: "",
    prev: [],
    next: [],
  },
  {
    id: "ac065a71-3ae3-43c8-8b2f-816839d58125",
    title: "메시지는 작성자와 작성 시간, 텍스트를 포함하여 DB에 저장한다.",
    priority: 3,
    from: "2022-11-30",
    until: "2022-12-03",
    content: "",
    prev: [],
    next: [],
  },
  {
    id: "5a3338d9-fc28-4e62-9497-f77c618d3e30",
    title:
      "채팅 메시지가 작성 날짜에 처음으로 입력된 경우 상단에 날짜를 표시한다.",
    priority: 1,
    from: "2022-11-30",
    until: "2022-12-03",
    content: "",
    prev: [],
    next: [],
  },
  {
    id: "ff032341-3594-4c54-8a83-3bcebcbd8a8a",
    title: "채팅 채널에는 실시간으로 메시지를 표시한다.",
    priority: 3,
    from: "2022-11-30",
    until: "2022-12-03",
    content: "",
    prev: [],
    next: [],
  },
];
