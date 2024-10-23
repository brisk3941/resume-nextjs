import { IPresentation } from '../component/presentation/IPresentation';

const presentation: IPresentation.Payload = {
  disable: false,

  list: [
    {
      title: '이데링크 현장실습',
      subTitle: '대학교 일학습병행제(IPP)',
      at: '2017-07',
      descriptions: [
        {
          content: '일학습병행제 4학년 2학기 전공수료',
        },
        {
          content: '',
          postHref: 'https://ipp.ysu.ac.kr/common/common.do?jsp_path=/index',
        },
      ],
    },
    {
      title: '쏘우웨이브 현장실습',
      subTitle: '무선 네트워크 장비 테스트 및 실습',
      at: '2016-07',
      descriptions: [
        {
          content: '장거리/단거리 무선 네트워크 장비 와이파이 무선 테스트 및 전파방해 테스트',
        },
        {
          content: '',
          postHref: 'https://sawwave.kr/',
        },
      ],
    },
    {
      title: 'KGITBANK 정규교육과정',
      subTitle: '보안 및 프로그래밍 과정 수료 (과정당 한달)',
      at: '2016-07',
      descriptions: [
        {
          content: 'IT 기초과정',
          descriptions: [{ content: '프로그래밍 기초' }],
        },
        {
          content: '프로그래밍',
          descriptions: [
            { content: 'JAVA1/JAVA2' },
            { content: 'Spring Framwork' },
            { content: '알고리즘' },
            { content: 'C언어' },
            { content: '자료구조' },
            { content: 'JSP' },
          ],
        },
        {
          content: '네트워크&운영체제',
          descriptions: [
            { content: '네트워크기초(CCNA)' },
            { content: 'CCNP' },
            { content: '리눅스' },
            { content: 'Window Server 2008' },
          ],
        },
        {
          content: '보안과정',
          descriptions: [
            { content: '리버스 엔지니어링' },
            { content: '시스템 보안' },
            { content: '웹보안' },
            { content: '네트워크보안' },
          ],
        },
        {
          content: '',
          postHref: 'https://www.kgitbank.co.kr/',
        },
      ],
    },
  ],
};

export default presentation;
