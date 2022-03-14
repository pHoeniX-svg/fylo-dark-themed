import { FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa';

const data = {
  features: [
    {
      id: 'iqwjrepjqp',
      title: 'Access your files, anywhere',
      body: 'The ability to use a smartphone, tablet, or computer to access your account means your files follow you everywhere.',
      image: 'images/icon-access-anywhere.svg',
    },
    {
      id: 'qidfwjf2fh',
      title: 'Security you can trust',
      body: '2-factor authentication and user-controlled encryption are just a couple of the security features we allow to help secure your files.',
      image: 'images/icon-security.svg',
    },
    {
      id: '2o3p3pe3powow',
      title: 'Real-time collaboration',
      body: 'Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required.',
      image: 'images/icon-collaboration.svg',
    },
    {
      id: '263p3pe3powow',
      title: 'Store any type of file',
      body: "Whether you're sharing holidays photos or work documents, Fylo has you covered allowing for all file types to be securely stored and shared.",
      image: 'images/icon-any-file.svg',
    },
  ],
  testimonials: [
    {
      id: 'hfwyfwf2',
      author: {
        name: 'Satish Patel',
        role: 'Founder & CEO, Huddle',
        image: 'images/profile-1.jpg',
      },
      body: 'Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.',
    },
    {
      id: 'hhfjhfbfh',
      author: {
        name: 'Bruce McKenzie',
        role: 'Founder & CEO, Huddle',
        image: 'images/profile-2.jpg',
      },
      body: 'Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.',
    },
    {
      id: 'hfvrygwyfgur',
      author: {
        name: 'Iva Boyd',
        role: 'Founder & CEO, Huddle',
        image: 'images/profile-3.jpg',
      },
      body: 'Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.',
    },
  ],
  social: [
    {
      id: 'icon-facebook',
      url: 'https://www.facebook.com',
      icon: FaFacebook,
    },
    {
      id: 'icon-twitter',
      url: 'https://www.twitter.com',
      icon: FaTwitter,
    },
    {
      id: 'icon-instagram',
      url: 'https://www.twitter.com',
      icon: FaLinkedin,
    },
  ],
};

export { data };
