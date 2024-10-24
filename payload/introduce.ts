import { IIntroduce } from '../component/introduce/IIntroduce';
import { lastestUpdatedAt } from '../package.json';

const introduce: IIntroduce.Payload = {
  disable: false,

  contents: [
    '저는 다양한 프로젝트에서 폭넓은 개발 경험을 쌓으며 꾸준히 성장해왔습니다. Spring, Java, Oracle, SVN, Linux 등의 기술을 활용하여 웹서비스를 개발하고 운영한 경험을 바탕으로, 확장성과 유지 보수성을 개선하기 위해 항상 노력하고 있습니다. 또한, 보안 관련 지식을 토대로 시큐어 코딩에 집중하여, 취약점을 최소화하며 안정적인 서비스를 제공하고자 최선을 다하고 있습니다.',
    'ERP 시스템과 SAP 등 업무 시스템의 전반적인 개발에 관심이 많아, 다양한 솔루션을 학습하고 적용하는 데 힘쓰고 있습니다. 실무에서 사용되는 기술들을 적극적으로 습득하며, 이를 바탕으로 더 나은 개발자로 성장하는 중입니다.',
    '서비스 개발이란 결국 개발과 비즈니스와의 커뮤니케이션이 가장 중요하다고 생각하고 있습니다. 능동적이고 적극적인 커뮤니케이션으로 문제 해결과 비즈니스 발전을 위해 뛰어듭니다. 이러한 점을 바탕으로 더 좋은 개발자로서 성장하기 위해 더 치열하게 학습하고, 경험하고, 노력하고 있습니다.',
  ],
  sign: 'Ju Myeong',
  // sign: packageJson.author.name,
  // latestUpdated: '2019-07-24',
  latestUpdated: lastestUpdatedAt,
};

export default introduce;
