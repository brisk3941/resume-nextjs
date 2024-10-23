import { ISkill } from '../component/skill/ISkill';

const programmingLanguages: ISkill.Skill = {
  category: 'Languages',
  items: [
    {
      title: 'C++',
    },
    {
      title: 'C#',
    },
    {
      title: 'ASP',
    },
    {
      title: 'HTML/CSS',
    },
    {
      title: 'Java',
    },
    {
      title: 'Jquery / Javascript',
    },
  ],
};

const kernelDevelopment: ISkill.Skill = {
  category: 'Fameworks & Libraries',
  items: [
    {
      title: 'Spring Boot',
    },
    {
      title: 'eGovFrame',
    },
    {
      title: 'KcaseCrypto',
    },
    {
      title: 'React',
    },
    {
      title: 'Next.js',
    },
  ],
};

const automation: ISkill.Skill = {
  category: 'Infrastructure & Databases',
  items: [
    {
      title: 'NCP',
    },
    {
      title: 'Apache',
    },
    {
      title: 'Kubernetes',
    },
    {
      title: 'Jeus',
    },
    {
      title: 'Tomcat',
    },
    {
      title: 'Linux',
    },
    {
      title: 'Oracle',
    },
    {
      title: 'MySQL',
    },
    {
      title: 'MySQL',
    },
    {
      title: 'MSSQL',
    },
    {
      title: 'MariaDB',
    },
    {
      title: 'Postgresql',
    },
  ],
};

const networkSecurity: ISkill.Skill = {
  category: 'Tools & IDEs',
  items: [
    {
      title: 'Github',
    },
    {
      title: 'Eclipse',
    },
    {
      title: 'Intellij',
    },
    {
      title: 'Viusal Studio',
    },
    {
      title: 'VS Code',
    },
    {
      title: 'Suversion',
    },
  ],
};

const misc: ISkill.Skill = {
  category: 'Misc',
  items: [
    {
      title: 'Online Games',
    },
    {
      title: 'Car Driving',
    },
    {
      title: 'Stock Analysis',
    },
    {
      title: 'Gym Exercise',
    },
    {
      title: 'Cooking',
    },
  ],
};

const skill: ISkill.Payload = {
  disable: false,
  skills: [programmingLanguages, kernelDevelopment, automation, networkSecurity, misc],
  // tooltip: '1: 기초 수준\n2: 취미 개발 수준\n3: Production 개발 가능 수준',
};

export default skill;
