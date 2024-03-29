import React, { useState } from 'react';
import './Layout.css';
import { Profile } from './Profile';
import gold from '../images/gold.png';
import silver from '../images/silver.png';
import bronze from '../images/bronze.png';

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
  const [name, setName] = useState('');
  const [runners, setRunners] = useState(results);

  const handleChange = (event) => {
    const newSearch = event.target.value;

    setSearchValue(newSearch);

    const filteredRunners = results.filter((runner) => {
      return runner.name.toLowerCase().includes(newSearch.toLowerCase());
    });

    setRunners(filteredRunners);
  };

  // const handleButtonClick = () => {
  //   const filteredRunners = results.filter((runner) => {
  //     return runner.name.toLowerCase().includes(searchValue.toLowerCase());
  //   });

  //   setRunners(filteredRunners);
  // };

  const handleNameClick = (event) => {
    setName(event.target.textContent);
  };

  return (
    <div className="content">
      <h1>{name}</h1>
      <div className="search-container">
        <input type="text" placeholder="search" value={searchValue} onChange={handleChange} />
        {/* <button onClick={handleButtonClick}>search</button> */}
      </div>

      <div className="grid-container">
        {runners.map((runner) => (
          <Profile key={runner.name}>
            <img src={runner.img} alt="medal" className="medal" />
            <h1 className="runner" onClick={handleNameClick}>
              {runner.name}
            </h1>
            <h3 className="distance">Distance: {runner.distance}</h3>
            <p className="time">Finish Time: {runner.time}</p>
          </Profile>
        ))}
      </div>
    </div>
  );
}
