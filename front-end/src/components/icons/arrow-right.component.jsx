import React from 'react';
import { IconContext } from 'react-icons';

import { MdKeyboardArrowRight } from 'react-icons/md';

const ArrowRightIcon = () => (
  <IconContext.Provider value={{ color: '#E0314B', size: '7em' }}>
    <div>
      <MdKeyboardArrowRight />
    </div>
  </IconContext.Provider>
);

export default ArrowRightIcon;
