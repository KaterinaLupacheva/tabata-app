import React from 'react';
import { IconContext } from 'react-icons';

import { MdKeyboardArrowLeft } from 'react-icons/md';

const ArrowLeftIcon = () => (
  <IconContext.Provider value={{ color: '#E0314B', size: '7em' }}>
    <div>
      <MdKeyboardArrowLeft />
    </div>
  </IconContext.Provider>
);

export default ArrowLeftIcon;
