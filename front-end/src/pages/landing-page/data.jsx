import React from 'react';
import { FaRandom } from "react-icons/fa";
import { GiRocketFlight } from "react-icons/gi";
import { MdAvTimer } from "react-icons/md";

export const DATA_FOR_CARDS = [
    {
        icon: <FaRandom />,
        title: 'Random Workouts',
        description: [
            'Everytime a new workout',
            'No more predictable routines'
        ]
    },
    {
        icon: <GiRocketFlight />,
        title: 'Easy to Use',
        description: [ 'User-friendly interface',
                        'Start in 3 clicks'
        ]
    },
    {
        icon: <MdAvTimer />,
        title: 'Timer',
        description: ['Classic Tabata timer: 20 secs - workout, 10 secs - rest',
                        'Voice countdown'
        ]
    }
];