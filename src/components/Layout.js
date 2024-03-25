import React from 'react';
import './Layout.css';
import { Profile } from './Profile';
import gold from '../images/gold.png';
import silver from '../images/silver.png';
import bronze from '../images/bronze.png';

const results = [
  { img: gold, name: 'Guga Gongadze', distance: 44, time: '4:43:23', gender: 'male' },
  { img: silver, name: 'Gigi Arabuli', distance: 44, time: '5:07:36', gender: 'male' },
  { img: bronze, name: 'Kimi Papidze', distance: 44, time: '5:20:07', gender: 'male' },
  { img: gold, name: 'Ketevan Mumladze', distance: 44, time: '6:06:15', gender: 'female' },
  { img: silver, name: 'Sopho Jgharkava', distance: 44, time: '7:17:55', gender: 'female' },
  { img: bronze, name: 'Tamta Matitashvili', distance: 44, time: '7:18:13', gender: 'female' },
];

export function Layout() {
  const femaleRunners = results.filter((runner) => runner.gender === 'female');

  return (
    <div className="grid-container">
      {femaleRunners.map((result) => (
        <Profile key={result.name} person={result} />
      ))}
    </div>
  );
}
