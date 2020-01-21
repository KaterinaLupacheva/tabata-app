import React from 'react';
import { TiTick } from "react-icons/ti";

import './description-item.styles.scss';

const DescriptionItem = ({ item }) => (
    <div className='description-item'>
        <TiTick />
        {item}
    </div>
);

export default DescriptionItem;