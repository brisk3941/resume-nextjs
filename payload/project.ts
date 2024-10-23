import { IProject } from '../component/project/IProject';

const project: IProject.Payload = {
  disable: false,
  list: [
    {
      title: 'ERP 시스템 개발 및 유지보수 / 운영',
      startedAt: '2023-02',
      where: '대한전선 (Taihan)',
      descriptions: [
        {
          content: '그룹웨어 시스템 유지보수 / 운영.',
          weight: 'MEDIUM',
          descriptions: [
            { content: '2023년 9월 신규 그룹웨어 이관 작업 (SAP, XI 연동)' },
            { content: '그룹웨어 기안 양식 수정보완 및 신규개발 추가사용' },
          ],
        },
        {
          content: 'E-Accounting 시스템 유지보수 / 운영.',
          weight: 'MEDIUM',
          descriptions: [
            { content: '부가세액 불공제/무관 자동분류 로직 개선 (VAN사 연동)' },
            { content: '보안감사 대비 사용자 관리, 권한 기능 추가 개발' },
            { content: '원천세 경비처리 기능 추가 보완개발' },
          ],
        },
        {
          content: '협업포털(TCN) 시스템 유지보수 / 운영.',
          weight: 'MEDIUM',
          descriptions: [
            { content: '납품분할 기능 사용간 오류 개선으로 오류율 감소' },
            { content: '성적서 등록 기능 개선 (일괄등록) 및 거래명세서 현황 조회 기능 개선' },
            { content: '거래명세서 출력 QR라벨 기능 신규 개발' },
            { content: '원천세 경비처리 기능 추가 보완개발' },
          ],
        },
        {
          content: '경영정보시스템(EIS) 시스템 유지보수 / 운영.',
          weight: 'MEDIUM',
          descriptions: [{ content: '신규 사용자, 메뉴 권한 관리 및 운영' }],
        },
        {
          content: 'IT Support Center (ISC) 시스템 유지보수 / 운영.',
          weight: 'MEDIUM',
          descriptions: [
            { content: '패스워드 관리 프로세스 개선 (잠금 및 관리자 관리)' },
            { content: '지속적 트래픽으로 인한 서버다운현상 개선' },
          ],
        },
      ],
    },
    {
      title: 'IT Support Center (ISC) 시스템 개발',
      startedAt: '2023-02',
      endedAt: '2023-04',
      where: '대한전선 (Taihan)',
      descriptions: [
        {
          content: '그룹웨어 SSO 연동 로그인 기능 구현.',
        },
        {
          content: '보안감사에 활용 될 수 있도록 CTS 작성 기능 구현.',
          weight: 'MEDIUM',
          descriptions: [{ content: '담당자 결제 기능으로 감사 자료 획득' }],
        },
        {
          content: '담당자 결제, 건의 담당 팀장 결제할 수 있도록 구현.',
          weight: 'MEDIUM',
          descriptions: [{ content: '결제간 알림 메일 전송 개발' }],
        },
        {
          content: '대한전선 사내시스템 이용간 신속한 업무지원 가능하도록 설계 및 구현.',
        },
      ],
    },
    {
      title: '차세대 세입정보시스템 PKI 개발',
      startedAt: '2022-05',
      endedAt: '2023-01',
      where: '행정안전부',
      descriptions: [
        {
          content: '신기술 부문 QR 인증 로그인 기능 구현',
          weight: 'MEDIUM',
          descriptions: [
            { content: '안드로이드, 아이폰 연동 QR로그인 기능 구현' },
            { content: '인증서와 토큰기반 보안인증 로그인 개발' },
          ],
        },
        {
          content: '(관련기사)정부, 지방세입‧지방재정 등 차세대 시스템 본격 추진',
          href: 'http://joseplus.com/news//newsview.php?ncode=1065583886424286&dt=m',
        },
      ],
    },
    {
      title: '전기차 충전 인프라 시스템 개발',
      startedAt: '2022-01',
      endedAt: '2023-01',
      where: '한국전력연구원 (KEPCO)',
      descriptions: [
        {
          content: 'ISO 15118 표준문서 분석 및 프로세스 설계',
        },
        {
          content: '전기차 충전 PnC 기능 BackEnd 기능 PKI 구현',
          weight: 'MEDIUM',
          descriptions: [
            { content: '인증,결제,충전 API 개발 구현' },
            { content: '힌전KDN의 충전기를 이용 및 협업을 통한 안정적인 프로세스 구현' },
          ],
        },
        {
          content:
            '(관련기사) BMW 그룹 코리아, 한국전력과 함께 차세대 전기차 충전서비스, ‘플러그 앤 차지’ 개발',
          href:
            'https://www.press.bmwgroup.com/korea/article/detail/T0381055KO/bmw-%EA%B7%B8%EB%A3%B9-%EC%BD%94%EB%A6%AC%EC%95%84-%ED%95%9C%EA%B5%AD%EC%A0%84%EB%A0%A5%EA%B3%BC-%ED%95%A8%EA%BB%98-%EC%B0%A8%EC%84%B8%EB%8C%80-%EC%A0%84%EA%B8%B0%EC%B0%A8-%EC%B6%A9%EC%A0%84%EC%84%9C%EB%B9%84%EC%8A%A4-%ED%94%8C%EB%9F%AC%EA%B7%B8-%EC%95%A4-%EC%B0%A8%EC%A7%80%E2%80%99-%EA%B0%9C%EB%B0%9C?language=ko',
        },
      ],
    },
    {
      title: '공인인증서/전자서명 및 PKI관련 업무 담당 및 운영',
      startedAt: '2020-08',
      endedAt: '2023-01',
      where: '케이사인 (KSIGN)',
      descriptions: [
        {
          content: '공동인증서 로그인 사이트 신규 설치 및 유지보수 지원',
          weight: 'MEDIUM',
          descriptions: [
            {
              content: '경찰청, 교육청, 안전보건공단, 중앙선거관리위원회 등 유지보수 및 운영 담당',
            },
          ],
        },
        {
          content: '브라우저 인증서 Javascript 로 설치가 필요없는 로그인 지원 개발 고도화',
        },
        {
          content: 'PKCS#5, PKCS#7 등 표준 PKI 습득',
          weight: 'MEDIUM',
          descriptions: [{ content: 'SEED, ARIA 등 국제 표준 암호화 알고리즘 이용 암복호화 개발' }],
        },
        {
          content: 'KCaseCrypto 라이브러리 담당 연구 및 분석',
        },
      ],
    },
    {
      title: '국방획득정보시스템 개발',
      startedAt: '2022-05',
      endedAt: '2022-11',
      where: '국방부',
      descriptions: [
        {
          content: '보안인증 PKI 128에서 256 으로 고도화',
          weight: 'MEDIUM',
          descriptions: [
            { content: 'MPKI 통합인증 개발담당 보조' },
            { content: 'SSO 인증 토큰 암복호화 담당 개발' },
          ],
        },
        {
          content:
            '(관련기사) 국방전산정보원, ㈜케이사인과 74억원 규모의 ‘국방획득정보시스템’ 체계개발 계약',
          href: 'https://www.news2day.co.kr/article/20201215500288',
        },
      ],
    },
    {
      title: '간편인증 솔루션 개발',
      startedAt: '2022-03',
      endedAt: '2022-10',
      where: '케이사인 (KSIGN)',
      descriptions: [
        {
          content: '네이버, 카카오지갑, 삼성패스, 페이코, 통신사패스 통합 간편 로그인 개발 담당',
          weight: 'MEDIUM',
          descriptions: [
            { content: '각 해당 업체와 API 연동을 통한 통합 개발' },
            { content: '관리자 페이지 개발을 통한 통계 및 관리기능 구현' },
          ],
        },
        {
          content: 'GS인증 1등급 획득 담당',
        },
      ],
    },
    {
      title: '비교과 통합 시스템 개발 및 운영/유지보수',
      startedAt: '2018-01',
      endedAt: '2020-07',
      where: '이데링크 (Ideelink)',
      descriptions: [
        {
          content: 'ORACLE 데이터 관리, 역량진단 시스템 개발, 통계 시스템 운영 관리',
        },
        {
          content: '창원대학교 이룸시스템 개발 참여',
        },
        {
          content: '동아대학교 DECO 시스템 개발 참여',
        },
      ],
    },
    {
      title: '현장실습지원 시스템 개발 및 운영/유지보수',
      startedAt: '2018-01',
      endedAt: '2020-07',
      where: '이데링크 (Ideelink)',
      descriptions: [
        {
          content: '대학교 교과목 및 학점 연동, ORACLE, MSSQL 등 데이터베이스 데이터 관리',
        },
        {
          content: '부경대학교 디딤돌시스템 개발 참여',
        },
        {
          content: '인제대, 경성대 현장실습시스템 유지보수',
        },
      ],
    },
    {
      title: 'LINK+ 종합정보 시스템 개발 및 운영/유지보수',
      startedAt: '2018-01',
      endedAt: '2020-07',
      where: '이데링크 (Ideelink)',
      descriptions: [
        {
          content: 'E-BOOK 시스템 개발',
        },
        {
          content: '스케줄 관리 시스템 개발',
        },
        {
          content: '캡스톤 디자인 시스템 유지보수',
        },
      ],
    },
    {
      title: '기업지원종합시스템 개발',
      startedAt: '2018-01',
      endedAt: '2018-06',
      where: '부경대학교',
      descriptions: [
        {
          content: '부경대 드래곤밸리 개발 참여',
        },
        {
          content: '가족기업 및 입주기업 관리 개발 담당',
        },
        {
          content: '통계 시스템 개발 참여',
        },
      ],
    },
  ],
};

export default project;
