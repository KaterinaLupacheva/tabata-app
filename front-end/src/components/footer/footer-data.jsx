import React from 'react';
import { FaTwitter } from 'react-icons/fa';
import { FaLinkedinIn } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaRegEnvelope } from 'react-icons/fa';

export const FOOTER_DATA = [
  {
    id: 0,
    link: 'https://twitter.com/IoRamonak',
    icon: <FaTwitter />,
  },
  {
    id: 1,
    link: 'https://www.linkedin.com/in/katsiaryna-lupachova/',
    icon: <FaLinkedinIn />,
  },
  {
    id: 2,
    link: 'https://github.com/KaterinaLupacheva',
    icon: <FaGithub />,
  },
  {
    id: 3,
    link: 'mailto: contact@ramonak.io',
    icon: <FaRegEnvelope />,
  },
];
