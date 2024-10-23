import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons';

import { faBell } from '@fortawesome/free-regular-svg-icons';
import { IProfile } from '../component/profile/IProfile';
import image from '../asset/face.jpg';

const profile: IProfile.Payload = {
  disable: false,

  // image: 'https://resume.yowu.dev/static/image/profile_2019.png',
  image,
  name: {
    title: '김주명',
    small: '(JuMyeong)',
  },
  contact: [
    {
      title: 'brisk3941@naver.com',
      link: 'mailto:tux@linux.org',
      icon: faEnvelope,
    },
    {
      title: 'Please contact me by email',
      icon: faPhone,
      badge: true,
    },
    {
      link: 'https://github.com/brisk3941',
      icon: faGithub,
    },
    {
      link: 'https://www.instagram.com/__jmkim__',
      icon: faInstagram,
    },
  ],
  notice: {
    title:
      "휴대전화나 인스타 DM 메시지가 아닌 이메일로 연락 부탁드립니다.",
    icon: faBell,
  },
};

export default profile;
