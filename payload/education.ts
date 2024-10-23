import { IEducation } from '../component/education/IEducation';

const education: IEducation.Payload = {
  disable: false,

  list: [
    {
      title: '영산대학교',
      subTitle: '사이버보안학과 학사 졸업 (4.09/4.5)',
      startedAt: '2012-03',
      endedAt: '2018-02',
    },
    {
      title: '부산 대연고등학교',
      subTitle: '자연계 졸업 (부산)',
      startedAt: '2009-03',
      endedAt: '2012-02',
    },
  ],
};

export default education;
