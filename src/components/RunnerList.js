import { Profile } from './Profile';
import './RunnerList.css';

export function RunnerList({ sortedRunners }) {
  return (
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
  );
}
