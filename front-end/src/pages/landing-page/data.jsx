import React from 'react';
import { FaRandom } from "react-icons/fa";
import { GiRocketFlight } from "react-icons/gi";
import { MdAvTimer } from "react-icons/md";

export const DATA_FOR_CARDS = [
    {
        icon: <FaRandom />,
        title: 'Random Workouts',
        description: 'Everytime a new workout'
    },
    {
        icon: <GiRocketFlight />,
        title: 'Easy to Use',
        description: 'start in 10 secs'
    },
    {
        icon: <MdAvTimer />,
        title: 'Timer',
        description: 'with sounds, classic period 20:10'
    }
];