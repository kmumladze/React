import React from 'react';
import './Layout.css';
import { Profile } from './Profile';
import gold from '../images/gold.png';
import silver from '../images/silver.png';
import bronze from '../images/bronze.png';

const results = [
  { img: gold, name: 'Guga Gongadze', distance: 44, time: '4:43:23' },
  { img: silver, name: 'Gigi Arabuli', distance: 44, time: '5:07:36' },
  { img: bronze, name: 'Kimi Papidze', distance: 44, time: '5:20:07' },
  { img: gold, name: 'Ketevan Mumladze', distance: 44, time: '6:06:15' },
  { img: silver, name: 'Sopho Jgharkava', distance: 44, time: '7:17:55' },
  { img: bronze, name: 'Tamta Matitashvili', distance: 44, time: '7:18:13' },
];

export function Layout() {
  return (
    <div className="grid-container">
      <Profile person={results[0]} />
      <Profile person={results[1]} />
      <Profile person={results[2]} />
      <Profile person={results[3]} />
      <Profile person={results[4]} />
      <Profile person={results[5]} />
    </div>
  );
}
