import { IExperience } from '../component/experience/IExperience';

const experience: IExperience.Payload = {
  disable: false,
  disableTotalPeriod: false,
  list: [
    {
      title: '지에스아이티엠 (GSITM)',
      position: '대한전선 ITO 운영',
      startedAt: '2023-02',
      descriptions: [
        '그룹웨어 개발 및 유지보수 (SAP 연동)',
        'E-Accounting 개발 및 유지보수 (SAP 연동)',
        '협업포털 시스템 개발 및 유지보수 (SAP 연동)',
        'EIS 시스템 개발 및 유지보수',
        'ISC 시스템 개발 및 유지보수',
      ],
      skillKeywords: ['SAP', 'C#', 'Linux', 'Java', 'ASP', 'Oracle', 'MariaDB', 'eGovFrame'],
    },
    {
      title: '케이사인 (KSIGN)',
      position: '보안인증 솔루션 개발자',
      startedAt: '2020-08',
      endedAt: '2023-01',
      descriptions: [
        '전기차 충전 인프라 시스템 (V2G 시스템) 개발',
        '통합인증관리시스템 개발',
        '간편인증솔루션 개발',
        '국방획득정보시스템 개발 (국방부)',
        '차세대세입정보시스템 개발',
        '공인인증서 로그인 전자서명 본인인증 담당 개발',
        '경찰청, 교육청, 안전보건공단 등 공기업 유지보수 및 설치 지원',
        '공개키 암복호화 등 PKI 관련 업무 담당',
      ],
      skillKeywords: ['Java', 'Linux', 'Oracle', 'Javascript', 'Jquery', 'KcaseCrypto'],
    },
    {
      title: '이데링크 (Ideelink)',
      position: '개발팀 웹 개발자',
      startedAt: '2018-01',
      endedAt: '2020-07',
      descriptions: [
        '비교과통합 시스템 개발 및 유지보수 (창원대, 동아대 등)',
        '현장실습지원 시스템 개발 및 유지보수 (부경대, 인제대, 경성대 등)',
        'LINK+ 종합정보 시스템 개발 및 유지보수 (E-Book, 스케줄관리, 캡스톤디자인)',
        '일학습병행제(IPP) 시스템 개발 및 유지보수',
        '기업지원종합시스템 개발 (부경대 드래곤밸리)',
        '역량개발시스템 개발 (오픈 워크넷 API연동)',
      ],
      skillKeywords: ['Spring', 'Linux', 'Jeus', 'Apache', 'Oracle', 'Mysql', 'Postage', 'Tomcat'],
    },
  ],
};

export default experience;
