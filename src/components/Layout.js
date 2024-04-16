import React, { useState } from 'react';
import './Layout.css';
import gold from '../images/gold.png';
import silver from '../images/silver.png';
import bronze from '../images/bronze.png';
import { Search } from './Search';
import { RunnerList } from './RunnerList';

const results = [
  {
    img: gold,
    name: 'Guga Gongadze',
    distance: 44,
    time: '4:43:23',
    gender: 'male',
  },
  {
    img: silver,
    name: 'Gigi Arabuli',
    distance: 44,
    time: '5:07:36',
    gender: 'male',
  },
  {
    img: bronze,
    name: 'Kimi Papidze',
    distance: 44,
    time: '5:20:07',
    gender: 'male',
  },
  {
    img: gold,
    name: 'Ketevan Mumladze',
    distance: 44,
    time: '6:06:15',
    gender: 'female',
  },
  {
    img: silver,
    name: 'Sopho Jgharkava',
    distance: 44,
    time: '7:17:55',
    gender: 'female',
  },
  {
    img: bronze,
    name: 'Tamta Matitashvili',
    distance: 44,
    time: '7:18:13',
    gender: 'female',
  },
];

// const femaleRunners = results.filter((runner) => runner.gender === 'female');

export function Layout() {
  const [searchValue, setSearchValue] = useState('');
  const [runners, setRunners] = useState(results);
  const [direction, setDirection] = useState('up');

  const handleChange = (event) => {
    const newSearch = event.target.value;

    setSearchValue(newSearch);

    const filteredRunners = results.filter((runner) => {
      return runner.name.toLowerCase().includes(newSearch.toLowerCase());
    });

    setRunners(filteredRunners);
  };

  const handleClick = (direction) => {
    setDirection(direction);
  };

  const sortedRunners = [...runners].sort((a, b) => {
    if (direction === 'up') {
      return a.name > b.name;
    } else {
      return a.name < b.name;
    }
  });

  return (
    <div className="content">
      <Search searchValue={searchValue} handleChange={handleChange} direction={direction} handleClick={handleClick} />

      <RunnerList sortedRunners={sortedRunners} />
    </div>
  );
}
