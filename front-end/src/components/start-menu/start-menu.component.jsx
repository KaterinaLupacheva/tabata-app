import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectMenuSections } from '../../redux/menu/menu.selector';

import './start-menu.styles.scss';

import MenuItem from '../menu-item/menu-item.component';

const StartMenu = ({ sections }) => (
    <div className='start-menu'>
    {
        sections.map(({ id, ...otherSectionProps }) => (
         <MenuItem key={id} {...otherSectionProps} />
    ))}
    </div>
);
    
const mapStateToProps = createStructuredSelector({
    sections: selectMenuSections
  });

export default connect(mapStateToProps)(StartMenu);
