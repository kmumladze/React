import React, { useState } from 'react';
import './Layout.css';
import { Profile } from './Profile';
import gold from '../images/gold.png';
import silver from '../images/silver.png';
import bronze from '../images/bronze.png';
import { Search } from './Search';

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
      <div className="grid-container ">
        {sortedRunners.map((runner) => (
          <Profile key={runner.name}>
            <img src={runner.img} alt="medal" className="medal" />
            <h1 className="runner">{runner.name}</h1>
            <h3 className="distance">Distance: {runner.distance}</h3>
            <p className="time">Finish Time: {runner.time}</p>
          </Profile>
        ))}
      </div>
    </div>
  );
}
